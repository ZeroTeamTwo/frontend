import { CLIENT_NAVI_PATH } from '@/shared/const/url';
import Image from 'next/image';
import Link from 'next/link';

type VoteChoice = 'pros' | 'cons';

interface VoteCardProps {
	voteId: string;
	userChoice: VoteChoice;
	prosCount: number;
	consCount: number;
}

const VoteCards = () => {
	return (
		<section className="flex flex-col w-full gap-[12px] tablet:grid tablet:grid-cols-2 desktop:gap-[20px] desktop:grid desktop:grid-cols-3 max-w-maxw">
			<VoteCard voteId="1" userChoice="pros" prosCount={123} consCount={123} />
			<VoteCard voteId="1" userChoice="cons" prosCount={1} consCount={99} />
			<VoteCard voteId="1" userChoice="cons" prosCount={32} consCount={23} />
			<VoteCard voteId="1" userChoice="cons" prosCount={123} consCount={321} />
			<VoteCard voteId="1" userChoice="cons" prosCount={123} consCount={321} />
			<VoteCard voteId="1" userChoice="pros" prosCount={123} consCount={321} />
		</section>
	);
};

const VoteCard = ({ voteId, userChoice, prosCount, consCount }: VoteCardProps) => {
	const totalCount = prosCount + consCount;

	const prosPercent = totalCount > 0 ? Math.round((prosCount / totalCount) * 100) : 0;
	const consPercent = totalCount > 0 ? 100 - prosPercent : 0;

	const isVoting = false;

	return (
		<div className="flex flex-col height-[154px] min-w-[303px] p-[16px] typo-label1-normal bg-bg-elevated-normal rounded-[12px] gap-[16px]">
			<div className="flex items-center w-full">
				<p className="flex-1 typo-body1-normal font-bold text-label-neutral">{'이슈 제목'}</p>
				<Link href={CLIENT_NAVI_PATH.balanceDetail.getPath(voteId)}>
					<Image src="/svgs/trailing.svg" alt="" width={18} height={18} className="w-[18px] h-[18px] desktop:w-[20px] desktop:h-[20px]" />
				</Link>
			</div>
			{/* VoteResultBar */}
			<div className="flex flex-col w-full gap-[10px]">
				<div className={`flex w-full h-[12px] rounded-full overflow-hidden gap-[2px]`}>
					<div
						className={`h-full transition-all duration-500 ${userChoice === 'pros' ? 'bg-primary-main-normal' : 'bg-fill-strong'}`}
						style={{ width: `${prosPercent}%` }}
					/>
					<div
						className={`h-full transition-all duration-500 ${userChoice === 'cons' ? 'bg-primary-sub-strong' : 'bg-fill-strong'}`}
						style={{ width: `${consPercent}%` }}
					/>
				</div>
				<div className="flex justify-between">
					<div className="flex items-center gap-[4px]">
						<div className={`w-[14px] h-[14px] rounded-full ${userChoice === 'pros' ? 'bg-primary-main-normal' : 'bg-fill-normal'}`}></div>
						<p>{'찬성'}</p>
						<p className="text-label-alternative">{`${prosPercent}%(${prosCount})`}</p>
					</div>
					<div className="flex items-center gap-[4px]">
						<div className={`w-[14px] h-[14px] rounded-full ${userChoice === 'cons' ? 'bg-primary-sub-strong' : 'bg-fill-normal'}`}></div>
						<p>{'반대'}</p>
						<p className="text-label-alternative">{`${consPercent}%(${consCount})`}</p>
					</div>
				</div>
			</div>
			<div className="flex">
				{/* 아이콘 + 카운트 */}
				<div className="flex-1 flex items-center text-label-alternative gap-[10px]">
					{/* 날짜 | 투표수 | 의견수 -> Chip */}
					{isVoting && (
						<>
							<div className="flex gap-[4px]">
								<Image src="/svgs/vote.svg" alt="" width={20} height={20} />
								<p>{`D-${12}`}</p>
							</div>
							<div className="h-[12px] w-[1.2px] bg-line-normal-normal" />
						</>
					)}
					<div className="flex gap-[4px]">
						<Image src="/svgs/vote.svg" alt="" width={20} height={20} />
						<p>{123}</p>
					</div>
					<div className="h-[12px] w-[1.2px] bg-line-normal-normal" />
					<div className="flex gap-[4px]">
						<Image src="/svgs/bubble.svg" alt="" width={17} height={17} />
						<p>{123}</p>
					</div>
				</div>
				{/* VoteStatusChip */}
				{isVoting ? (
					<div className="px-[8px] py-[2px] text-label-neutral font-semibold bg-[var(--color-neutral-97)] rounded-[6px]">{'진행중'}</div>
				) : (userChoice === 'pros' && prosCount >= consCount) || (userChoice === 'cons' && prosCount <= consCount) ? (
					<div className="px-[8px] py-[2px] text-[var(--color-blue-45)] font-semibold bg-[var(--color-blue-99)] rounded-[6px]">{'대세'}</div>
				) : (
					<div className="px-[8px] py-[2px] text-[var(--color-pink-45)] font-semibold bg-[var(--color-pink-99)] rounded-[6px]">{'소신'}</div>
				)}
			</div>
		</div>
	);
};

export default VoteCards;
