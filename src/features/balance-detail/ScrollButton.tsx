'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const ScrollButton = () => {
	const [isTop, setIsTop] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			setIsTop(window.scrollY === 0);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const scrollToBottom = () => {
		window.scrollTo({ top: 600, behavior: 'smooth' });
	};

	return (
		<div className="w-full z-2">
			{isTop ? (
				<button
					className="flex flex-col items-center w-full typo-label1-normal py-[8px] gap-[10px] bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_#D9D9D9_80%)] desktop:py-[16px] desktop:typo-body1-normal desktop:gap-[12px]"
					onClick={scrollToBottom}
				>
					내려서 세부 정보 보기
					<Image src="/svgs/downIcon.svg" alt="" width={22} height={20} className="w-[12px] h-[12px] desktop:w-[22px] desktop:h-[20px]" />
				</button>
			) : (
				<div className="w-full flex justify-end p-4">
					<button onClick={scrollToTop}>
						<Image src="/svgs/arrowUp.svg" alt="" width={40} height={40} />
					</button>
				</div>
			)}
		</div>
	);
};

export default ScrollButton;
