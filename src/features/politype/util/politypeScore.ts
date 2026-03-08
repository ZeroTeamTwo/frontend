import { POLITYPE_QUESTION_LIST, PolitypeCategory, PolitypeLevel, ANIMAL_MATRIX, PARTICIPATION_ACTION } from '../const';

export interface CategoryScores {
	participation: number;
	change: number;
	value: number;
}

const applyReverseScore = (score: number): number => 6 - score;

const calcCategoryAvg = (answerList: number[], category: PolitypeCategory): number => {
	const questions = POLITYPE_QUESTION_LIST.filter((q) => q.category === category);
	const scores = questions.map((q) => {
		const raw = answerList[q.id - 1];
		return q.reverseScore ? applyReverseScore(raw) : raw;
	});
	const sum = scores.reduce((acc, s) => acc + s, 0);
	return sum / scores.length;
};

export const parsePolitypeAnswers = (answersParam: string | null): number[] | null => {
	if (!answersParam || answersParam.length !== POLITYPE_QUESTION_LIST.length) return null;
	const parsed = answersParam.split('').map(Number);
	if (parsed.some((v) => v < 1 || v > 5 || isNaN(v))) return null;
	return parsed;
};

export const calcCategoryScores = (answerList: number[]): CategoryScores => ({
	participation: calcCategoryAvg(answerList, 'participation'),
	change: calcCategoryAvg(answerList, 'change'),
	value: calcCategoryAvg(answerList, 'value'),
});

export const toLevel = (score: number): PolitypeLevel => {
	if (score >= 3.5) return 'high';
	if (score >= 2.5) return 'mid';
	return 'low';
};

export interface PolitypeResult {
	animal: string; // e.g. '돌고래'
	actionLabel: string; // e.g. '날아다니는' (유저 표시용)
	imagePath: string; // e.g. '/images/politype/animal/나는돌고래.png'
	changeLevel: PolitypeLevel;
	valueLevel: PolitypeLevel;
	participationLevel: PolitypeLevel;
}

export const derivePolitypeResult = (scores: CategoryScores): PolitypeResult => {
	const changeLevel = toLevel(scores.change);
	const valueLevel = toLevel(scores.value);
	const participationLevel = toLevel(scores.participation);

	const animal = ANIMAL_MATRIX[changeLevel][valueLevel];
	const { prefix, label: actionLabel } = PARTICIPATION_ACTION[participationLevel];
	const imagePath = `/images/politype/animal/${prefix}${animal}.png`;

	return { animal, actionLabel, imagePath, changeLevel, valueLevel, participationLevel };
};
