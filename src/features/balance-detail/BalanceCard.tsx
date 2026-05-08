import Image from 'next/image';

type VoteChoice = 'pros' | 'cons';

interface BalanceCardProps {
	userChoice: VoteChoice;
	prosCount: number;
	consCount: number;
}

const BalanceCard = ({ userChoice, prosCount, consCount }: BalanceCardProps) => {
	const totalCount = prosCount + consCount;

	const prosPercent = totalCount > 0 ? Math.round((prosCount / totalCount) * 100) : 0;
	const consPercent = totalCount > 0 ? 100 - prosPercent : 0;

	const isVoting = true;

	return (
		<div className="flex flex-col w-full min-h-[520px] bg-bg-elevated-normal rounded-[32px] overflow-hidden desktop:min-h-[700px]">
			<div className="relative w-full h-[130px] bg-center desktop:h-[200px]">
				<Image src={'/images/book.png'} alt="" fill className="object-cover" />
				<div className="absolute w-full h-full bg-[linear-gradient(180deg,_rgba(255,255,255,0)_60%,_#FFFFFF_100%)]" />
			</div>
			<div className="flex-1 flex flex-col w-full justify-between p-[20px] pb-[24px] gap-[20px]">
				{/* TopContent */}
				<div className="flex flex-col gap-[10px] desktop:gap-[16px]">
					{/* 아이콘 + 카운트 */}
					<div className="flex-1 flex items-center text-label-alternative gap-[10px]">
						{/* 날짜 | 투표수 | 의견수 -> Chip */}

						<div className="flex gap-[4px]">
							{isVoting ? (
								<>
									<Image src="/svgs/vote.svg" alt="" width={20} height={20} />
									<p>{`D-${12}`}</p>
								</>
							) : (
								<>
									<Image src="/svgs/calendar.svg" alt="" width={20} height={20} />
									<p className="text-accent-bg-red">마감</p>
								</>
							)}
						</div>
						<div className="h-[12px] w-[1.2px] bg-line-normal-normal" />

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
					<div className="flex flex-col gap-[2px] desktop:gap-[12px]">
						<p className="typo-body1-reading font-bold desktop:typo-heading1 desktop:font-medium">청소년 필독서 구독 지원 프로그램 도입안</p>
						<p className="typo-body2-reading text-label-alternative desktop:typo-heading2">
							청소년을 대상으로 매달 1권의 필독서를 구독 형태로 제공하는 지원 프로그램이 제안되었습니다. 독서 격차 해소와 꾸준한 독서 습관 형성을 돕는
							것이 목적입니다.
						</p>
					</div>
				</div>
				{/* BottomContent */}
				<div className="flex flex-col gap-[16px]">
					{/* VoteResultBar */}
					<div className="flex flex-col gap-[12px]">
						<div className="flex justify-between">
							<p className="typo-body1-normal font-bold text-[16px] desktop:typo-headline1">지지율</p>
							{/* VoteStatusChip - 마감일 때만 */}
							{!isVoting && (
								<>
									{/* <div className="h-[24px] px-[8px] py-[2px] text-[14px] text-label-neutral] bg-[var(--color-neutral-97)] rounded-[6px] desktop:h-[28px] desktop:text-[16px]">
										진행중
									</div> */}
									<div className="h-[24px] px-[8px] py-[2px] text-[14px] text-[var(--color-blue-45)] bg-[var(--color-blue-99)] rounded-[6px] desktop:h-[28px] desktop:text-[16px]">
										대세
									</div>
									{/* <div className="h-[24px] px-[8px] py-[2px] text-[14px] text-[var(--color-pink-45)] bg-[var(--color-pink-99)] rounded-[6px] desktop:h-[28px] desktop:text-[16px]">
										소신
									</div> */}
								</>
							)}
						</div>
						{/* 응답 전 */}
						<div className="flex justify-center items-center h-[26px] w-full typo-label2 text-label-alternative rounded-full bg-fill-normal desktop:h-[32px] desktop:typo-body2-normal">
							투표를 하면 지지율이 표시됩니다.
						</div>
						{/* 응답 후 */}
						<div className="flex flex-col w-full gap-[12px] desktop:gap-[14px]">
							<div
								className={`flex w-full h-[26px] typo-body2-normal text-static-white rounded-full overflow-hidden gap-[2px] desktop:typo-body1-normal desktop:h-[32px]`}
							>
								<div
									className={'flex items-center px-[12px] py-[2px] transition-all duration-500 bg-primary-main-normal'}
									style={{ width: `${prosPercent}%` }}
								>
									<p className="text-left">{`${prosPercent}%`}</p>
								</div>
								<div
									className={'flex items-center justify-end px-[12px] py-[2px] transition-all duration-500 bg-primary-sub-strong'}
									style={{ width: `${consPercent}%` }}
								>
									<p className="text-right">{`${consPercent}%`}</p>
								</div>
							</div>
							<div className="flex justify-between typo-label1-normal desktop:typo-headline1">
								<div className="flex items-center gap-[4px]">
									<div className={'w-[14px] h-[14px] rounded-full bg-primary-main-normal'}></div>
									<div className="flex">
										<p>{'찬성'}</p>
										<p className="text-label-alternative">{`(${prosCount})`}</p>
									</div>
								</div>
								<div className="flex items-center gap-[4px]">
									<div className={'w-[14px] h-[14px] rounded-full bg-primary-sub-strong'}></div>
									<div className="flex">
										<p>{'반대'}</p>
										<p className="text-label-alternative">{`(${consCount})`}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* ButtonSection */}
					<div className="flex gap-[8px] typo-body1-normal desktop:typo-headline1">
						<button
							className={`flex-1 flex items-center justify-center h-[46px] rounded-[14px] gap-[4px] transition-colors desktop:h-[56px]
							${userChoice === 'pros' ? 'bg-primary-main-normal text-static-white' : 'bg-fill-normal text-label-assistive'}`}
						>
							<p>찬성</p>
							{userChoice === 'pros' && <Image src="/svgs/voteCircle.svg" alt="selected" width={22} height={22} />}
						</button>
						<button
							className={`flex-1 flex items-center justify-center h-[46px] rounded-[14px] gap-[4px] transition-colors desktop:h-[56px]
							${userChoice === 'cons' ? 'bg-primary-sub-strong text-static-white' : 'bg-fill-normal text-label-assistive'}`}
						>
							<p>반대</p>
							{userChoice === 'cons' && <Image src="/svgs/voteCircle.svg" alt="selected" width={22} height={22} />}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BalanceCard;
