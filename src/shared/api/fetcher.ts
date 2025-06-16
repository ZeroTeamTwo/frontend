'use server';

import { cookies } from 'next/headers';
import { COOKIE_NAME } from '../const/cookie';
import { refreshToken } from './auth';
import { NeedLoginError, RefreshTokenError } from '../const/error';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface FetcherOptions extends Omit<RequestInit, 'method'> {
	method?: HttpMethod;
}

export async function fetcher(path: string, options: FetcherOptions = {}): Promise<Response> {
	const { headers, body, method = 'GET', ...rest } = options;

	const finalHeaders = {
		'Content-Type': 'application/json;charset=UTF-8',
		...headers,
	};

	const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${path}`, {
		method,
		headers: finalHeaders,
		body: body && typeof body !== 'string' ? JSON.stringify(body) : body,
		...rest,
	});

	return response;
}

export async function tokenFetcher<T>(path: string, options: FetcherOptions = {}, isRetry: boolean = false): Promise<T> {
	const cookieStore = await cookies();
	const { access } = COOKIE_NAME.auth;
	const accessToken = cookieStore.get(access)?.value;

	// 헤더 삽입 함수
	const buildHeaders = (token?: string) => ({
		...options.headers,
		...(token ? { Authorization: `Bearer ${token}` } : {}),
	});

	const response = await fetcher(path, {
		...options,
		headers: buildHeaders(accessToken),
	});

	if (response.status === 401) {
		if (!accessToken) {
			throw new NeedLoginError();
		}

		// 토큰이 있는데도 재발급 실패 → 이미 재시도 했으면 중단
		if (isRetry) {
			throw new RefreshTokenError();
		}

		// 첫 시도면 refresh 시도
		const refreshed = await refreshToken();
		if (!refreshed) {
			throw new RefreshTokenError();
		}

		// refresh 성공 → 재요청
		return tokenFetcher<T>(path, options, true);
	}

	if (!response.ok) {
		throw new Error(`Request failed with status ${response.status}`);
	}

	return (await response.json()) as T;
}
