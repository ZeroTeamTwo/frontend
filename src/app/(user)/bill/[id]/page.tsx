import { Metadata } from 'next';
import { getBillDetail } from '@/features/bill-detail/api/server';
import DetailCommentList from '@/features/bill-detail/DetailCommentList';
import DetailContent from '@/features/bill-detail/DetailContent';
import DetailInfo from '@/features/bill-detail/DetailInfo';
import DetailInteraction from '@/features/bill-detail/DetailInteraction';
import DetailTitle from '@/features/bill-detail/DetailTitle';
import ScrollUpBtn from '@/shared/components/ScrollUpBtn';

export const metadata: Metadata = {
	title: '법안 상세페이지',
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const data = await getBillDetail(id);

	return (
		<div className="flex flex-col items-center p-5 pb-[100px]  desktop:pt-12 desktop:pb-[160px] w-full">
			<article className="flex flex-col items-center w-full max-w-desktop gap-6 desktop:gap-9">
				<DetailTitle {...data} />
				<div className="border border-line-neutral	w-full" />
				<DetailInfo {...data} />
				<DetailContent detail={data.billSummary || ''} />
				{/* TODO: */}
				{/* <DetailProcess status={data.billStatus} /> */}
				<DetailInteraction id={id} isScrapped={data.scrapped} />
				<DetailCommentList />
			</article>
			<ScrollUpBtn />
		</div>
	);
}
