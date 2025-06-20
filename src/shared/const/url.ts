export const CLIENT_NAVI_PATH = {
	home: { name: '홈', path: '/' },
	guide: { name: '정치 입문서', path: '/guide' },
	bill: { name: '법안 피드', path: '/bill' },
	billDetail: {
		name: '법안 상세',
		getPath: (id: string) => `/bill/${id}`,
	},
	person: { name: '정치인 피드', path: '/person' },
	mypage: { name: '마이페이지', path: '/mypage' },
	search: { name: '검색페이지', path: '/search' },
} as const;

const NAVIBAR_VALUES = ['guide', 'bill', 'person'] as const;

export const NAVIBAR_PATH = NAVIBAR_VALUES.map((key) => CLIENT_NAVI_PATH[key]);

export const SERVER_URL = {
	oauth: 'api/auth/oauth/',
	logout: 'api/auth/logout',
};
