'use client';

import Dropdown from '@/shared/components/DropDown';
import { SolidBtn } from '@/shared/components/SolidBtn';
import { KEYWORD_LIST } from '@/shared/const/committee';
import React from 'react';

const CategoryFIlter = () => {
	return (
		<Dropdown label="몰라" about="키워드">
			{(close) => (
				<div className="flex flex-col relative w-full desktop:h-[400px] desktop:w-[320px] justify-center desktop:items-center">
					{KEYWORD_LIST.map((keyword) => (
						<div key={keyword}>{keyword}</div>
					))}
					<div className="absolute bottom-0 w-full flex justify-between">
						<button>초기화</button>
						<SolidBtn label="적용" onClick={close} />
					</div>
				</div>
			)}
		</Dropdown>
	);
};

export default CategoryFIlter;
