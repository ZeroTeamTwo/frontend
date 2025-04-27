import { CLIENT_NAVI_LIST } from '@/shared/const/url';
import Link from 'next/link';
import React from 'react';

const Navibar = () => {
	return (
		<div className="flex justify-between items-center gap-[70px]">
			{CLIENT_NAVI_LIST.filter((item) => item.name !== '홈').map((item) => (
				<NaviBtn key={item.name} title={item.name} link={item.path} />
			))}
		</div>
	);
};

export default Navibar;

const NaviBtn = ({ title, link }: { title: string; link: string }) => {
	return (
		<Link href={link} className="typo-body1-normal font-bold text-label-normal">
			{title}
		</Link>
	);
};
