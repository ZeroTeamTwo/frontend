import BalanceBanner from '@/features/balance/BalanceBanner';
import VoteCards from '@/features/balance/VoteCards';
import FilterDropdown from '@/features/balance/FilterDropdown';
import VotePopup from '@/features/balance/VotePopup';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
	title: '밸런스 카드',
};

export default function BalancePage() {
	return (
		<>
			<VotePopup />
			<BalanceBanner />
			<section className="flex flex-col items-center w-full px-[20px] pb-[38px] bg-bg-normal-alternative gap-[16px] desktop:pb-[78px] desktop:gap-[20px] ">
				<Suspense>
					<div className="flex flex-col w-full pt-[20px] max-w-maxw gap-[20px]">
						<p className="pl-[8px] typo-heading2 font-bold">{'참여 내역'}</p>
						<div className="flex gap-[12px]">
							<FilterDropdown queryKey="order" defaultLabel="최신순" options={['최신순', '과거순']} about="정렬" />
							<FilterDropdown queryKey="status" defaultLabel="전체" options={['전체', '진행중', '적중함', '적중 실패']} about="필터링" />
						</div>
					</div>
					<VoteCards />
				</Suspense>
			</section>
		</>
	);
}
