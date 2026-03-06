'use client';

import { SolidBtn } from '@/shared/components/SolidBtn';
import ProgressBar from './components/ProgressBar';
import QuestionCard from './components/QuestionCard';
import LikertScale from './components/LikertScale';
import NavBtn from './components/NavBtn';
import { usePolitypeQuiz } from './hooks/usePolitypeQuiz';

const QuestionContent = () => {
	const { currentQuestion, currentAnswer, hasCurrentAnswer, currentIdx, totalCount, isFirst, isLast, select, prev, next, submit } = usePolitypeQuiz();

	return (
		<div className="relative flex h-full min-h-[calc(100dvh-64px)] w-full flex-col items-center justify-center gap-[60px] px-5 py-[104px]">
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-[16%] to-[#25371a]" />

			<div className="absolute left-1/2 top-10 z-10 w-[calc(100%-40px)] max-w-[460px] -translate-x-1/2">
				<ProgressBar current={currentIdx + 1} total={totalCount} />
			</div>

			<div className="relative z-10">
				<QuestionCard questionNum={currentQuestion.id} questionText={currentQuestion.text} />
			</div>

			<div className="relative z-10 w-full flex justify-center px-1">
				<LikertScale selectedValue={currentAnswer} onSelect={select} />
			</div>

			{/* 모바일 하단 네비 영역: 항상 좌우 정렬, 마지막엔 우측에 결과확인 버튼 */}
			<div className="desktop:hidden absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-5 px-5 pb-10">
				{!isFirst ? <NavBtn direction="prev" disabled={false} onClick={prev} inline /> : <div className="size-[48px]" />}
				{isLast ? (
					<SolidBtn
						label="결과확인하기"
						size="large"
						disabled={!hasCurrentAnswer}
						onClick={submit}
						className="flex-1 bg-primary-sub-normal text-label-normal typo-headline1 font-[600]"
					/>
				) : (
					<NavBtn direction="next" disabled={!hasCurrentAnswer} onClick={next} inline />
				)}
			</div>

			{/* 데스크탑 사이드 네비 */}
			<div className="hidden desktop:block">
				{!isFirst && <NavBtn direction="prev" disabled={false} onClick={prev} />}
				{!isLast && <NavBtn direction="next" disabled={!hasCurrentAnswer} onClick={next} />}
			</div>

			{/* 데스크탑 마지막 페이지 제출 - 좌 버튼 없이 단독이므로 가운데 정렬 */}
			{isLast && (
				<div className="hidden desktop:flex absolute inset-x-0 bottom-0 z-10 justify-center px-8 py-14">
					<SolidBtn
						label="결과 확인하기"
						size="large"
						disabled={!hasCurrentAnswer}
						onClick={submit}
						className="w-full max-w-[450px] bg-primary-sub-normal text-label-normal typo-headline1 font-[600]"
					/>
				</div>
			)}
		</div>
	);
};

export default QuestionContent;
