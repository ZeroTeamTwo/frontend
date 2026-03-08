import { useSearchParams } from 'next/navigation';
import { parsePolitypeAnswers, calcCategoryScores, CategoryScores } from '../util/politypeScore';

export type { CategoryScores };

export const usePolitypeResult = () => {
	const searchParams = useSearchParams();
	const answersParam = searchParams.get('answers');
	const answerList = parsePolitypeAnswers(answersParam);

	if (!answerList) return { isValid: false as const, answerList: null, scores: null };

	const scores = calcCategoryScores(answerList);
	return { isValid: true as const, answerList, scores };
};
