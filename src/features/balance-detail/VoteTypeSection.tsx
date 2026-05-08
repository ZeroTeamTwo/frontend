'use client';

import Image from 'next/image';
import { Fragment, useState } from 'react';
import SegmentControl from './SegmentControl';
import TypeChartSummary from './TypeChartSummary';

const prosData = [
	{ name: 'ㅇㅇ유형', percent: 45, count: 123 },
	{ name: 'ㅇㅇ유형', percent: 30, count: 82 },
	{ name: 'ㅇㅇ유형', percent: 25, count: 68 },
];

const consData = [
	{ name: 'ㅇㅇ유형', percent: 50, count: 140 },
	{ name: 'ㅇㅇ유형', percent: 35, count: 98 },
	{ name: 'ㅇㅇ유형', percent: 15, count: 42 },
];

const VoteTypeSection = () => {
	const [selected, setSelected] = useState('찬성유형');

	const currentData = selected === '찬성유형' ? prosData : consData;
	const textColor = selected === '찬성유형' ? 'text-primary-main-strong' : 'text-primary-sub-heavy';

	return (
		<div className="flex flex-col w-full h-[488px] px-[20px] py-[24px] bg-bg-elevated-normal rounded-[32px] gap-[16px]">
			<div className="flex gap-[2px]">
				<Image src="/svgs/pieChart.svg" alt="" width={24} height={24} />
				<p className="typo-headline2 font-bold text-label-strong">유형별 지지율</p>
			</div>
			<SegmentControl
				selected={selected}
				onChange={(value) => {
					setSelected(value);
				}}
			/>
			<ul>
				{currentData.map((item, index) => (
					<Fragment key={index}>
						<li className="flex items-center h-[47px] gap-[24px] list-none">
							<p className="flex-shrink-0 w-[20px] text-center text-label1-normal font-bold text-label-neutral">{index + 1}</p>
							<div className="flex w-full justify-between">
								<p className="typo-body2-normal text-label-strong">{item.name}</p>
								<div className={`flex typo-label2 ${textColor}`}>
									<p className="font-bold">{item.percent}</p>
									<p>%({item.count})</p>
								</div>
							</div>
						</li>
						{index < currentData.length - 1 && <div className="w-full h-[1px] bg-line-normal-alternative" />}
					</Fragment>
				))}
			</ul>
			<TypeChartSummary pros={70} cons={30} />
		</div>
	);
};

export default VoteTypeSection;
