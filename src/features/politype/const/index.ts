export interface PolitypeQuestion {
	id: number;
	text: string;
}

export const POLITYPE_QUESTION_LIST: PolitypeQuestion[] = [
	{ id: 1, text: '약자를 보호하는 정책이 경제 효율보다 우선되어야 한다.' },
	{ id: 2, text: '정부는 시장에 적극적으로 개입해야 한다.' },
	{ id: 3, text: '복지 확대를 위해 세금을 더 걷는 것은 정당하다.' },
	{ id: 4, text: '기업의 자유로운 경쟁이 사회 발전의 핵심이다.' },
	{ id: 5, text: '환경 보호를 위해 경제 성장을 일부 제한할 수 있다.' },
];

export const LIKERT_OPTION_LIST = [
	{ value: 1, label: '매우\n그렇지 않다', size: 48 },
	{ value: 2, label: '그렇지\n않다', size: 36 },
	{ value: 3, label: '보통이다', size: 30 },
	{ value: 4, label: '그렇다', size: 36 },
	{ value: 5, label: '매우\n그렇다', size: 48 },
] as const;
