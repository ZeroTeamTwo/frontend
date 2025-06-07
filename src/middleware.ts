import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;
	const cookieStore = await cookies();

	const accessToken = cookieStore.get('accesstoken');
	const nickname = cookieStore.get('nickname');

	console.log('Middleware Access Token:', accessToken);
	if (!accessToken && pathname.startsWith('/onboarding')) {
		return NextResponse.redirect(new URL('/', req.url));
	}
	if (accessToken && !nickname?.value && !pathname.startsWith('/onboarding')) {
		return NextResponse.redirect(new URL('/onboarding', req.url));
	}
	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*.png$|.*.svg$|.*.jpg$).*)'],
};
