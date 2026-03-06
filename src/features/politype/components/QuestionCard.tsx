interface QuestionCardProps {
	questionNum: number;
	questionText: string;
}

const CLIP_PATH = 'polygon(0 16px, 16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)';

const QuestionCard = ({ questionNum, questionText }: QuestionCardProps) => {
	return (
		<div className="flex w-full flex-col items-center gap-3 desktop:gap-5">
			<div className="flex w-full items-center justify-center">
				<p className="typo-title2 font-bold text-line-solid-alternative text-center text-shadow">{`Q${questionNum}`}</p>
			</div>

			{/* 테두리용 외곽 */}
			<div className="w-full max-w-[360px] self-stretch bg-[#C8F5D1] p-[2px]" style={{ clipPath: CLIP_PATH }}>
				{/* 내부 배경 + 텍스트 */}
				<div
					className="flex h-[198px] w-full items-center justify-center px-10 backdrop-blur-[6px]"
					style={{ clipPath: CLIP_PATH, backgroundColor: 'rgba(0, 213, 162, 0.7)' }}
				>
					<p className="typo-heading2 font-bold text-line-solid-alternative text-center drop-shadow-[0_6px_12px_rgba(0,0,0,0.12)]">{questionText}</p>
				</div>
			</div>
		</div>
	);
};

export default QuestionCard;
