'use client';

import { useState, useLayoutEffect } from 'react';
import Dropdown from '@/shared/components/DropDown';
import useUpdateQueryParam from '@/shared/hooks/useUpdateQueryParam';
import CheckIcon from '@/shared/icon/Check';

interface FilterDropdownProps {
	queryKey: string; // 'order' 또는 'status'
	defaultLabel: string; // '최신순' 또는 '전체'
	options: string[]; // 드롭다운에 보여줄 목록
	about: string; // '정렬' 또는 '필터링'
}

const FilterDropdown = ({ queryKey, defaultLabel, options, about }: FilterDropdownProps) => {
	const [selected, setSelected] = useState(defaultLabel);
	const updateQueryParam = useUpdateQueryParam();

	useLayoutEffect(() => {
		const urlSearchParams = new URLSearchParams(window.location.search);
		const querySearch = urlSearchParams.get(queryKey) || defaultLabel;
		setSelected(querySearch);
	}, [queryKey, defaultLabel]);

	const handleSelect = (value: string) => {
		setSelected(value);
		updateQueryParam(queryKey, value);
	};

	return (
		<Dropdown label={selected} about={about} className="desktop:p-1 desktop:bg-bg-elevated-normal text-label-alternative">
			{(close) => (
				<div className="flex flex-col w-full gap-1 justify-center desktop:items-center">
					{options.map((value) => (
						<DropdownItem
							key={value}
							value={value}
							selected={selected}
							onSelect={(val) => {
								handleSelect(val);
								close();
							}}
						/>
					))}
				</div>
			)}
		</Dropdown>
	);
};

export default FilterDropdown;

const DropdownItem = ({ value, selected, onSelect }: { value: string; selected: string; onSelect: (value: string) => void }) => (
	<button
		className={`flex desktop:justify-center py-3 typo-body1-normal font-regular cursor-pointer desktop:w-[120px] gap-2 px-5 desktop:px-3 desktop:rounded-[12px] desktop:text-label-neutral ${
			selected === value ? 'text-primary-main-normal desktop:bg-fill-normal' : ''
		}`}
		onClick={() => onSelect(value)}
	>
		{selected === value ? <CheckIcon className="desktop:hidden" /> : <div className="desktop:hidden w-6" />}
		{value}
	</button>
);
