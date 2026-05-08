'use client';
import Image from 'next/image';
import BackIcon from '@/shared/icon/Back';
import { useRouter } from 'next/navigation';

const BackButton = () => {
	const router = useRouter();

	const handleBack = () => {
		router.push('/balance');
	};

	return (
		<>
			{/* 상단 뒤로가기 포함 배너 - mobile */}
			<aside className="flex items-center justify-between w-full h-[48px] px-[20px] bg-fill-normal z-2 desktop:hidden">
				<button onClick={handleBack}>
					<Image src="/svgs/left.svg" alt="" width={24} height={24} />
				</button>
				<p className="typo-body1-reading text-label-neutral">AI가 선정한 26년도 정치 TOP 10</p>
				<button>
					<Image src="/svgs/circleQuestion.svg" alt="" width={24} height={24} />
				</button>
			</aside>

			{/* 뒤로가기 버튼 - desktop */}
			<aside className="hidden relative desktop:block">
				<button className="w-[48px] h-[48px] p-[12px] rounded-[12px] bg-fill-normal absolute top-[48px] left-[-322px]" onClick={handleBack}>
					<BackIcon className={'text-label-neutral'} width={24} height={24} />
				</button>
			</aside>
		</>
	);
};

export default BackButton;
