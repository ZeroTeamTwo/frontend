'use server';

import { redirect } from 'next/navigation';
import { NeedLoginError, RefreshTokenError } from '../const/error';
import { tokenFetcher } from './fetcher';
import { clearAuth } from '@/features/auth/utils/cookie';

export const toggleScrapped = async (id: string) => {
	try {
		const response = await tokenFetcher<boolean>(`/api/bills/${id}/scraps/toggle`, { method: 'POST' });

		// 최종 북마크 상태 (boolean)
		return response.result;
	} catch (err) {
		if (err instanceof NeedLoginError) {
			redirect('/modal-login');
		}

		if (err instanceof RefreshTokenError) {
			await clearAuth();
			redirect('/modal-link');
		}

		throw new Error('서버에 문제가 생겼습니다.');
	}
};
