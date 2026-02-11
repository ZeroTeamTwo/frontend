'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SolidBtn } from '@/shared/components/SolidBtn';

const IntroContent = () => {
	const router = useRouter();

	const handleStart = () => {
		router.push('/politype/question');
	};

	return (
		<div className="relative w-full min-h-[calc(100dvh-64px)]">
			{/* 타이틀 이미지 */}
			<div className="absolute inset-x-0 top-0 z-[2]">
				<div className="relative w-[calc(100%+96px)] -ml-[49px] aspect-[1394/702]">
					<Image
						src="/images/politype/title.png"
						alt="정치의숲에서 환생 나는 누구?"
						fill
						sizes="600px"
						priority
						draggable={false}
						className="object-cover"
					/>
				</div>
			</div>

			{/* 캐릭터 이미지 */}
			<div className="absolute inset-x-0 bottom-0 z-[1]">
				<div className="relative w-full aspect-[600/859]">
					<Image
						src="/images/politype/characters.png"
						alt="정치 유형 캐릭터들"
						fill
						sizes="600px"
						priority
						draggable={false}
						className="hidden object-cover desktop:block"
					/>
					<Image
						src="/images/politype/characters-mb.png"
						alt="정치 유형 캐릭터들"
						fill
						sizes="600px"
						priority
						draggable={false}
						className="object-cover desktop:hidden"
					/>
				</div>
			</div>

			{/* 그라데이션 딤 */}
			<div className="absolute inset-x-0 bottom-0 top-[49%] z-[3] bg-gradient-to-b from-transparent to-[rgba(34,34,34,0.6)]" />

			{/* 하단 섹션 */}
			<div className="absolute inset-x-0 bottom-0 z-[4] flex flex-col items-center gap-3 px-8 py-14">
				<p className="typo-headline2 font-medium text-static-white">지금까지 20,000명이 참여했어요</p>
				<SolidBtn
					label="내 정치 유형 알아보기"
					size="large"
					onClick={handleStart}
					className="w-full bg-primary-sub-normal text-label-normal typo-headline1 font-[600]"
				/>
			</div>
		</div>
	);
};

export default IntroContent;
