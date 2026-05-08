import DoughnutChart from './DoughnutChart';

interface TypeChartProps {
	pros: number;
	cons: number;
}

const TypeChartSummary = ({ pros, cons }: TypeChartProps) => {
	return (
		<div className="flex flex-col p-[20px] rounded-[16px] gap-[16px] bg-fill-alternative">
			<div className="typo-body2-normal font-bold">
				<p>{'유저 이름'}님과 동일한</p>
				<div className="flex">
					<p className="text-status-cautionary">{'유형 이름'}</p>
					<p>유형은 이렇게 응답했어요</p>
				</div>
			</div>
			<div className="flex items-center gap-[16px]">
				<div className="w-[90px] h-[90px]">
					<DoughnutChart pros={pros} cons={cons} />
				</div>
				<div className="w-full">
					<div className="flex justify-between typo-body2-normal">
						<div className="flex items-center gap-[4px]">
							<div className="w-[12px] h-[12px] rounded-full bg-primary-main-normal" />
							<p className="text-label-neutral">찬성</p>
						</div>
						<div className="flex items-center text-primary-main-heavy">
							<p className="typo-label1-normal font-bold">{pros}</p>
							<p>%</p>
						</div>
					</div>
					<div className="flex justify-between typo-body2-normal">
						<div className="flex items-center gap-[4px]">
							<div className="w-[12px] h-[12px] rounded-full bg-primary-sub-strong" />
							<p className="text-label-neutral">반대</p>
						</div>
						<div className="flex items-center text-primary-sub-heavy">
							<p className="typo-label1-normal font-bold">{cons}</p>
							<p>%</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TypeChartSummary;
