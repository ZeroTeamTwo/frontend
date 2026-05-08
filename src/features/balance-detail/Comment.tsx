import HeartIcon from '@/shared/icon/Heart';
import Image from 'next/image';
import VoteChip from './VoteChip';

const Comment = () => {
	return (
		<div className="flex flex-col gap-[10px]">
			<div className="flex flex-col gap-[12px]">
				<div className="flex items-center gap-[8px]">
					<div className="flex-shrink-0 w-[32px] h-[32px] rounded-full bg-fill-strong"></div>
					<div className="flex w-full justify-between items-start">
						<div className="flex flex-col">
							<div className="flex gap-[4px]">
								<p className="typo-label2 text-label-neutral">밸런스 러버</p>
								<VoteChip type="pros" />
							</div>
							<p className="typo-caption2 text-label-alternative">날아다니는 거북이</p>
						</div>
						<button>
							<Image src="/svgs/more.svg" alt="" width={24} height={24} />
						</button>
					</div>
				</div>
				<p className="typo-body2-normal text-label-neutral">찬성합니다</p>
			</div>
			<div className="flex justify-between items-center text-label-alternative">
				<div className="flex items-center gap-[4px]">
					<HeartIcon />
					<p className="typo-label1-normal">{123}</p>
				</div>
				<p className="typo-caption1">5시간 전</p>
			</div>
		</div>
	);
};

export default Comment;
