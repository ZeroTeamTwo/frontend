'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import DotIndicator from '../../shared/components/DotIndicator';
import { motion } from 'framer-motion';

const VotePopup = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [currentStep, setCurrentStep] = useState(0);

	useEffect(() => {
		const hasSeen = localStorage.getItem('tutorial_complete');

		if (!hasSeen) {
			setIsOpen(true);
		}
	}, []);

	const handleClose = () => {
		localStorage.setItem('tutorial_complete', 'true');
		setIsOpen(false);
	};

	const TUTORIAL_STEPS = [
		{ content: 'AI가 뽑은 사회･정치 이슈를 확인하고,\n당신의 의견을 선택해보세요.', image: '/svgs/popup1.svg' },
		{ content: '투표를 하면, 다른 사람들의\n지지율과 여론을 볼 수 있어요.', image: '/svgs/popup2.svg' },
		{
			content: '매주 10개씩 나오는 밸런스 카드에 참여하고,\n 당신의 정치 성향을 알아보세요!',
			image: '/svgs/popup3.svg',
		},
	];

	const { content, image } = TUTORIAL_STEPS[currentStep];

	const handlePrev = () => {
		if (currentStep > 0) setCurrentStep((prev) => prev - 1);
	};

	const handleNext = () => {
		if (currentStep < TUTORIAL_STEPS.length - 1) setCurrentStep((prev) => prev + 1);
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/52">
			<motion.div
				onPanEnd={(_, info) => {
					const swipeThreshold = 50;
					const { offset } = info;

					if (offset.x < -swipeThreshold) {
						handleNext();
					} else if (offset.x > swipeThreshold) {
						handlePrev();
					}
				}}
				className="flex flex-col w-[340px] h-[450px] tablet:w-[512px] tablet:h-[600px] rounded-[32px] overflow-hidden bg-white shadow-[0px_0px_32px_0px_rgba(0,0,0,0.32)] select-none touch-none"
			>
				{/* Top Section */}
				<div className="relative">
					<Image
						src={image}
						alt=""
						width={512}
						height={360}
						draggable={false}
						className="object-cover object-center w-[340px] h-[260px] tablet:w-[512px] tablet:h-[360px] pointer-events-none"
					/>
					<button className="absolute top-5 right-5" onClick={handleClose}>
						<Image src="/svgs/close.svg" alt="close" width={26} height={26} className="w-[24px] h-[24px] tablet:w-[26px] tablet:h-[26px]" />
					</button>
				</div>
				{/* Bottom Section */}
				<div className="flex-1 flex flex-col justify-between px-[32px] py-[24px] tablet:py-[32px]">
					<div className="flex flex-col items-center gap-[16px]">
						<div className="flex items-center justify-center w-[26px] h-[26px] tablet:w-[32px] tablet:h-[32px] rounded-full typo-body2-normal tablet:typo-headline2 font-bold text-static-white bg-primary-main-normal">
							{currentStep + 1}
						</div>
						<div className="w-[448px] typo-body1-normal tablet:typo-heading2 font-bold text-center text-label-neutral whitespace-pre-wrap">
							{content}
						</div>
					</div>
					{/* Desktop */}
					<div className="hidden tablet:flex justify-center items-center w-full h-[60px] typo-body1-normal font-bold text-label-neutral">
						<div className="flex w-[448px] justify-between items-center">
							<button className={`flex justify-center items-center gap-[4px] ${currentStep === 0 ? 'invisible' : 'visible'}`} onClick={handlePrev}>
								<Image src="/svgs/leadingIcon.svg" alt="" width={20} height={20} />
								이전
							</button>
							<button
								className={`flex justify-center items-center gap-[4px] ${currentStep === TUTORIAL_STEPS.length - 1 ? 'invisible' : 'visible'}`}
								onClick={handleNext}
							>
								다음
								<Image src="/svgs/trailingIcon.svg" alt="" width={20} height={20} />
							</button>
						</div>
					</div>
					{/* Mobile */}
					<DotIndicator totalSteps={TUTORIAL_STEPS.length} currentStep={currentStep} className="tablet:hidden" />
				</div>
			</motion.div>
		</div>
	);
};

export default VotePopup;
