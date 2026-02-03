import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { CLIENT_NAVI_PATH } from '@/shared/const/url';
import { PolitypeQuestion, POLITYPE_QUESTION_LIST } from '../const';

const updateAnswer = (answerList: (number | null)[], idx: number, value: number): (number | null)[] =>
	answerList.map((v, i) => (i === idx ? value : v));

const toAnswersQuery = (answerList: (number | null)[]): string => answerList.join('');

const deriveNavState = (currentIdx: number, totalCount: number) => ({
	isFirst: currentIdx === 0,
	isLast: currentIdx === totalCount - 1,
});

export const usePolitypeQuiz = (questionList: PolitypeQuestion[] = POLITYPE_QUESTION_LIST) => {
	const router = useRouter();
	const [currentIdx, setCurrentIdx] = useState(0);
	const [answerList, setAnswerList] = useState<(number | null)[]>(Array(questionList.length).fill(null));

	const { isFirst, isLast } = deriveNavState(currentIdx, questionList.length);
	const currentQuestion = questionList[currentIdx];
	const currentAnswer = answerList[currentIdx];
	const hasCurrentAnswer = currentAnswer !== null;

	const select = useCallback((value: number) => setAnswerList((prev) => updateAnswer(prev, currentIdx, value)), [currentIdx]);

	const prev = useCallback(() => {
		if (!isFirst) setCurrentIdx((i) => i - 1);
	}, [isFirst]);

	const next = useCallback(() => {
		if (hasCurrentAnswer && !isLast) setCurrentIdx((i) => i + 1);
	}, [hasCurrentAnswer, isLast]);

	const submit = useCallback(() => {
		router.push(`${CLIENT_NAVI_PATH.polytypeResult.path}?answers=${toAnswersQuery(answerList)}`);
	}, [answerList, router]);

	return {
		currentIdx,
		currentQuestion,
		currentAnswer,
		hasCurrentAnswer,
		totalCount: questionList.length,
		isFirst,
		isLast,
		select,
		prev,
		next,
		submit,
	};
};
