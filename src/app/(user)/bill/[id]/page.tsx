import { getBillDetail } from '@/features/bill-detail/api';
import FloatingBtn from '@/features/bill-detail/FloatingReaction';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const data = getBillDetail(id);
	return (
		<div className="flex flex-col items-center p-5 pb-[100px]  desktop:pt-12 desktop:pb-[160px]">
			<FloatingBtn reactions={data.reactions} myReaction={data.myReaction} />
		</div>
	);
}
