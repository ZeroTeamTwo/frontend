import Image from 'next/image';

const BalanceBanner = () => {
	const total = 10;
	const count = 4;

	const isCompleted = total - count === 0;

	return (
		<section className="flex flex-col items-center w-full pt-[56px] bg-[linear-gradient(111.04deg,_#EBFEF9_15.8%,_#F3F0FE_68.79%)] desktop:pt-[80px]">
			<div className="flex flex-col align-center gap-[28px]">
				<div className="flex flex-col items-center text-center gap-[24px] desktop:gap-[16px]">
					<div className="flex flex-col gap-[4px] font-bold hidden desktop:flex">
						<p className="text-primary-main-strong typo-body2-normal">이번 주 AI가 뽑은 사회･정치 이슈</p>
						<p className={'typo-heading2 text-[20px]'}>밸런스 카드</p>
					</div>
					<p className={'typo-heading2 text-[20px] font-bold desktop:hidden'}>{isCompleted ? '이번 주 밸런스 완료!' : '이번 주 밸런스 진행 현황'}</p>
					<div className="flex items-center justify-center h-[150px] overflow-hidden">
						<Image src="/svgs/balanceCard.svg" alt="" width={244} height={210} />
					</div>
				</div>
				<div className="flex flex-col gap-[20px]">
					{/* ActivitySummary */}
					<div className="flex justify-between w-[400px] max-w-[400px] p-[16px] typo-label1-reading rounded-[24px] bg-bg-elevated-normal divide-x-[1px] divide-solid divide-line-normal-neutral">
						<div className="flex-1 flex flex-col items-center">
							<p>투표</p>
							<div className="flex items-center gap-[2px]">
								<p className="typo-heading2 font-bold">{123}</p>
								<p>회</p>
							</div>
						</div>
						<div className="flex-1 flex flex-col items-center">
							<p>대세</p>
							<p className="typo-heading2 font-bold">{123}</p>
						</div>
						<div className="flex-1 flex flex-col items-center">
							<p>소신</p>
							<p className="typo-heading2 font-bold">{123}</p>
						</div>
					</div>
					{/* 이번 주 밸런스 미션 */}
					<div className="rounded-[25.5px] p-[2px] bg-[linear-gradient(97.21deg,#6541F2_1.41%,rgba(0,180,136,0.4)_98.59%)]">
						<div className="flex flex-col w-[400px] max-w-[400px] px-[20px] py-[16px] gap-[16px] rounded-[24px] bg-white">
							<div className="flex items-center w-full">
								<p className="flex-1 typo-headline1 font-bold">이번 주 밸런스 미션</p>
								<div className={`flex items-center ${isCompleted ? 'cursor-default' : 'cursor-pointer'}`}>
									<p className={`typo-body1-normal font-bold text-label-alternative ${!isCompleted ? 'text-primary-main-normal' : ''}`}>
										{isCompleted ? '완료' : '진행중'}
									</p>
									{!isCompleted && (
										<Image
											src="/svgs/trailing-purple.svg"
											alt=""
											width={18}
											height={18}
											className="w-[18px] h-[18px] desktop:w-[20px] desktop:h-[20px]"
										/>
									)}
								</div>
							</div>
							<div className="flex flex-col gap-[10px] text-label-alternative">
								<Indicator count={count} total={total} />
								{!isCompleted && <p className="typo-body1-normal">{`남은 밸런스: ${total - count}개`}</p>}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full h-[68px] bg-[linear-gradient(180deg,_rgba(247,247,248,0)_0%,_#F7F7F8_100%)]"></div>
		</section>
	);
};

interface IndicatorProps {
	count: number;
	total: number;
}

export const Indicator = ({ count, total }: IndicatorProps) => {
	const progress = (count / total) * 100;

	return (
		<div className="flex items-center w-full gap-[8px]">
			<div className="w-full h-[20px] bg-line-solid-neutral rounded-full overflow-hidden">
				<div
					className="h-full rounded-full"
					style={{
						width: `${count > 0 && count < 10 ? progress + 2 : progress}%`,
						background: `linear-gradient(90deg, #6541F2 ${progress * 0.8}%, #00D5A2 100%)`,
					}}
				></div>
			</div>
			<p className="typo-label1-normal text-label-alternative desktop:typo-headline1">{`${count}/${total}`}</p>
		</div>
	);
};

export default BalanceBanner;
