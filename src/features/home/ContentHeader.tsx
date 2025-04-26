import React from 'react';
import Image from 'next/image';
import { NonEmptyArray } from '@/shared/types/util';

type ContentHeaderProps = {
	title: string;
	link: string;
	keyword_list?: NonEmptyArray<string>;
	isLoginRequired?: boolean;
};

const ContentHeader = ({ title, link, keyword_list, isLoginRequired }: ContentHeaderProps) => {
	console.log(link);
	return (
		<div className="flex justify-between items-center w-full h-[38px] gap-[10px] p-0">
			<h2 className="typo-title2 font-bold flex items-center gap-2 flex-wrap">
				{title}
				{keyword_list && (
					<span className="flex gap-2 text-primary-main-normal">
						{keyword_list.map((keyword) => (
							<span key={keyword}>#{keyword}</span>
						))}
					</span>
				)}
				{isLoginRequired && <span className="text-label-alternative opacity-[61%]">로그인하고 관심 키워드를 골라보세요</span>}
			</h2>
			<button className="flex typo-body1-normal text-label-alternative opacity-[61%] font-bold">
				더보기 &nbsp; <Image src="/svgs/right.svg" alt="오른화살표" width="8" height="8" />
			</button>
		</div>
	);
};

export default ContentHeader;
