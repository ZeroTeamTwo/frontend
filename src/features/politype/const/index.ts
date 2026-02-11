export type PolitypeCategory = 'participation' | 'change' | 'value';

export interface PolitypeQuestion {
	id: number;
	text: string;
	category: PolitypeCategory;
}

export const POLITYPE_QUESTION_LIST: PolitypeQuestion[] = [
	// 참여도
	{ id: 1, text: '친구들이 요즘 뉴스 얘기를 하면, 나는 대체로 무슨 내용인지 알고 있는 편이다.', category: 'participation' },
	{ id: 2, text: '정치적 대화는 피곤해서 되도록 피하려 한다.', category: 'participation' },
	{ id: 3, text: '지역 또는 사회의 문제를 해결하기 위해 서명, 투표, 커뮤니티 활동 등에 참여할 의향이 있다.', category: 'participation' },
	// 변화선호
	{ id: 4, text: '법이나 제도가 바뀌는 속도가 너무 느리다고 느낀다.', category: 'change' },
	{ id: 5, text: '나는 규칙이 불편하더라도, 당장 없애기보단 왜 생겼는지 먼저 생각해보는 편이다.', category: 'change' },
	{ id: 6, text: '사회 문제를 해결하기 위해선 기존의 시스템을 조금씩 고치기보다, 새롭게 판을 짜야 한다고 생각한다.', category: 'change' },
	// 가치지향
	{ id: 7, text: '약자를 보호하는 정책이 경제 효율보다 우선되어야 한다.', category: 'value' },
	{ id: 8, text: '환경 보호를 위해 기업의 자유를 어느 정도 제한할 필요가 있다.', category: 'value' },
	{ id: 9, text: '노동자 권리 보호가 기업 경쟁력보다 중요하다고 본다.', category: 'value' },
	{ id: 10, text: '개인의 자유로운 선택보다는 공동체의 안전과 질서를 위해 국가가 개인을 규제할 수 있다고 생각한다.', category: 'value' },
	{ id: 11, text: '다양한 가족 형태(비혼 동거, 동성 결합 등)를 법적인 가족으로 인정해 주어야 한다.', category: 'value' },
	{ id: 12, text: '부의 격차를 줄이는 분배 정책이 지금 우리 사회에서 시급하다.', category: 'value' },
	{ id: 13, text: '대기업에 더 많은 세금을 걷어 복지 예산을 늘리는 것에 찬성한다.', category: 'value' },
	{ id: 14, text: '부동산 투기 억제와 주거 안정을 위해서라면, 다주택자의 재산권 행사를 국가가 강력하게 규제해야 한다.', category: 'value' },
	{
		id: 15,
		text: "사회적 약자를 배려하기 위해 대학 입시나 취업에서 시행하는 '할당제(지역균형, 사회통합 전형 등)'를 더욱 확대해야 한다.",
		category: 'value',
	},
];

export const LIKERT_OPTION_LIST = [
	{ value: 1, label: '매우\n그렇지 않다', size: 48 },
	{ value: 2, label: '그렇지\n않다', size: 36 },
	{ value: 3, label: '보통이다', size: 30 },
	{ value: 4, label: '그렇다', size: 36 },
	{ value: 5, label: '매우\n그렇다', size: 48 },
] as const;
