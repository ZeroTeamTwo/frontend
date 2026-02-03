'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { POLITYPE_QUESTION_LIST } from './const';

const ResultInner = () => {
	const searchParams = useSearchParams();
	const answersParam = searchParams.get('answers');

	const answerList = answersParam ? answersParam.split('').map(Number) : [];

	return (
		<div className="relative z-10 flex flex-col items-center gap-6">
			<h1 className="typo-title2 font-bold text-line-solid-alternative text-center">결과 페이지</h1>
			{answerList.length > 0 ? (
				<div className="flex flex-col gap-2">
					{answerList.map((answer, idx) => (
						<p key={POLITYPE_QUESTION_LIST[idx]?.id ?? idx} className="typo-body1-normal text-line-solid-alternative">
							Q{idx + 1}: {answer}점
						</p>
					))}
				</div>
			) : (
				<p className="typo-body1-normal text-line-solid-alternative">답변 데이터가 없습니다.</p>
			)}
		</div>
	);
};

const ResultContent = () => {
	return (
		<div className="relative flex min-h-[calc(100dvh-64px)] w-full flex-col items-center justify-center px-5 py-10">
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-[16%] to-[#25371a]" />
			<Suspense>
				<ResultInner />
			</Suspense>
		</div>
	);
};

export default ResultContent;
