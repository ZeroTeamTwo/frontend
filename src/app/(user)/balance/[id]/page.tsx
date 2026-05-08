import { Metadata } from 'next/types';
import BackButton from '@/features/balance-detail/BackButton';
import BalanceCard from '@/features/balance-detail/BalanceCard';
import VoteTypeSection from '@/features/balance-detail/VoteTypeSection';
import CommunitySecion from '@/features/balance-detail/CommunitySecion';
import { Indicator } from '@/features/balance/BalanceBanner';
import Image from 'next/image';
import ScrollButton from '@/features/balance-detail/ScrollButton';

export const metadata: Metadata = {
	title: '지난 밸런스 다시보기',
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;

	console.log(id);

	return (
		<div className="w-full flex-1 bg-[linear-gradient(155.21deg,_#EBFEF9_18.41%,_#F3F0FE_81.59%)] flex flex-col items-center">
			<BackButton />
			<div className="flex-1 flex flex-col items-center w-[375px] p-[16px] pb-[24px] gap-[16px] desktop:w-[480px] desktop:px-0 desktop:py-[48px]">
				<div className="w-[324px] desktop:w-[460px]">
					<Indicator count={3} total={10} />
				</div>
				<div className="flex flex-col items-center gap-[12px] desktop:gap-[16px]">
					<BalanceCard userChoice="pros" prosCount={123} consCount={123} />
					{/* 응답 후 */}
					<VoteTypeSection />
					<CommunitySecion />
					<div className="fixed bottom-0 w-full">
						<ScrollButton />
						<div className="flex justify-center items-center w-full h-[60px] px-[32px] typo-label2 font-bold text-label-neutral bg-bg-elevated-normal shadow-[0px_-24px_32px_0px_#D9D9D952] desktop:typo-body1-normal">
							<div className="flex w-[343px] justify-between items-center desktop:w-[480px]">
								<button className="flex justify-center items-center gap-[4px]">
									<Image src="/svgs/leadingIcon.svg" alt="" width={20} height={20} className="w-[14px] h-[14px] desktop:w-[20px] desktop:h-[20px]" />
									이전
								</button>
								<button className="flex justify-center items-center gap-[4px]">
									다음
									<Image src="/svgs/trailingIcon.svg" alt="" width={20} height={20} className="w-[14px] h-[14px] desktop:w-[20px] desktop:h-[20px]" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
