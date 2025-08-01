import Image from 'next/image';
import { normalizeTextStructure } from '@/shared/util';

const DetailContent = ({ detail }: { detail: string }) => {
	return (
		<section className="flex flex-col w-full px-1 py-5 gap-3 desktop:px-9 desktop:py-8">
			<h3 className="typo-heading2 font-bold text-label-normal desktop:typo-heading1">제안 이유 및 주요 내용</h3>
			{detail ? (
				<p className="whitespace-pre-wrap typo-body2-normal font-regular text-label-normal desktop:typo-body1-normal">
					{normalizeTextStructure(detail)}
				</p>
			) : (
				<div className="flex flex-col items-center w-full py-9 desktop:py-15 gap-8">
					<Image
						src="/images/loading.png"
						alt="업데이트 예정"
						width={132}
						height={132}
						className="w-[120px] h-[120px] desktop:w-[132px] desktop:h-[132px]"
					/>
					<span className="typo-body1-normal desktop:typo-heading2 font-regular text-label-normal">상세한 법안 내용을 준비중이에요</span>
				</div>
			)}
		</section>
	);
};

export default DetailContent;
