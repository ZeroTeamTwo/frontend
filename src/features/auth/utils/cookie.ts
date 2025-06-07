import { cookies } from 'next/headers';

type AuthResult = {
	accessToken: string;
	refreshToken: string;
	userid: number;
	nickname: string | null;
};

export const storeAuth = async (result: AuthResult) => {
	const cookieStore = await cookies();

	cookieStore.set('accesstoken', result.accessToken, {
		httpOnly: true,
		secure: true,
		sameSite: 'lax',
		path: '/',
		maxAge: 60 * 60, // 1시간
	});

	cookieStore.set('accesstoken', result.refreshToken, {
		httpOnly: true,
		secure: true,
		sameSite: 'lax',
		path: '/',
		maxAge: 60 * 60 * 24 * 7, // 7일
	});

	cookieStore.set('userid', result.userid.toString(), {
		httpOnly: false,
		path: '/',
		maxAge: 60 * 60 * 24 * 7,
	});

	cookieStore.set('nickname', result.nickname ?? '', {
		httpOnly: false,
		path: '/',
		maxAge: 60 * 60 * 24 * 7,
	});
};
