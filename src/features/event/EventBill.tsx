import React from 'react';
import { EVENT_DETAIL_DATA, EventPerson } from './const/data';
import Image from 'next/image';

const EventBill = ({ name }: { name: EventPerson }) => {
	const bill = EVENT_DETAIL_DATA[name].bill;
	return (
		<section className="flex flex-col w-full gap-6 px-3 max-desktop:py-5 desktop:gap-9 desktop:px-9">
			<h2 className="flex gap-5 font-bold typo-heading2 desktop:typo-heading1 desktop:gap-3">
				<span className="text-label-normal">대표 발의안</span>
				<span className="text-primary-main-normal">{bill.length}</span>
			</h2>
			<div className="flex flex-col gap-6 desktop:gap-10">
				{bill.map(({ id, category, title }) => (
					<div key={id} className="flex  w-full items-center px-5 py-4 gap-4 rounded-[12px] desktop:h-[56px] bg-[#FBFAFF]">
						<span className="typo-label1-normal text-label-normal w-[65px] text-center desktop:typo-headline1 desktop:w-[80px] ">{category}</span>
						<div className="w-[3px] h-[16px] bg-[#E1E2E4]" />
						<span className="typo-label1-normal desktop:typo-headline1 break-words">{title}</span>
						<Image src={'/svgs/right.svg'} alt="추가 내용있음" width={10} height={18} className="text-[#E1E2E4]" />
					</div>
				))}
			</div>
		</section>
	);
};

export default EventBill;
