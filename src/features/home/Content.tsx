import IssueCard, { IssueCardProps } from '@/shared/components/IssueCard';
import React, { ReactElement } from 'react';
import ContentHeader from './ContentHeader';
import { SolidBtn } from '@/shared/components/SolidBtn';

interface ContentProps {
	children: ReactElement<typeof ContentHeader>;
}

const data: IssueCardProps[] = [
	{
		id: '0',
		title: '정부의 디지털 혁신 정책 발표 정부의 디지털 혁신 정책 발표정부의 디지털 혁신 정책 발표정부의 디지털 혁신 정책 발표',
		committee: '여성가족위원회',
		name: '김지민',
		date: '2025.04.17',
		state: '법제사법위원회심사',
		keywordList: ['디지털', '혁신', '정책'],
		viewNum: 10200,
		bookmarkNum: 150,
		commentNum: 45,
		isBookMarked: true,
	},
	{
		id: '1',
		title: '정부의 디지털 혁신 정책 발표',
		committee: '과학기술정보방송통신위원회',
		name: '김지민',
		date: '2025.04.17',
		state: '본회의 심의',
		keywordList: ['디지털', '혁신', '정책'],
		viewNum: 10200,
		bookmarkNum: 150,
		commentNum: 45,
		isBookMarked: true,
	},
	{
		id: '2',
		title: '정부의 디지털 혁신 정책 발표',
		committee: '과학기술정보방송통신위원회',
		name: '김지민',
		date: '2025.04.17',
		state: '공포',
		keywordList: ['디지털', '혁신', '정책'],
		viewNum: 10200,
		bookmarkNum: 150,
		commentNum: 45,
		isBookMarked: false,
	},
	{
		id: '3',
		title: '정부의 디지털 혁신 정책 발표',
		committee: '과학기술정보방송통신위원회',
		name: '김지민',
		date: '2025.04.17',
		state: '발의/소관위원회 심사',
		keywordList: ['디지털', '혁신', '정책'],
		viewNum: 10200,
		bookmarkNum: 150,
		commentNum: 45,
		isBookMarked: false,
	},
	{
		id: '4',
		title: '정부의 디지털 혁신 정책 발표',
		committee: '과학기술정보방송통신위원회',
		name: '김지민',
		date: '2025.04.17',
		state: '발의/소관위원회 심사',
		keywordList: ['디지털', '혁신', '정책'],
		viewNum: 10200,
		bookmarkNum: 150,
		commentNum: 45,
		isBookMarked: false,
	},
	{
		id: '5',
		title: '정부의 디지털 혁신 정책 발표',
		committee: '과학기술정보방송통신위원회',
		name: '김지민',
		date: '2025.04.17',
		state: '법제사법위원회심사',
		keywordList: ['디지털', '혁신', '정책'],
		viewNum: 10200,
		bookmarkNum: 150,
		commentNum: 45,
		isBookMarked: false,
	},
];

const Content = ({ children }: ContentProps) => {
	return (
		<section className="w-full flex flex-col gap-5 max-w-maxw">
			{children}
			<div className="grid  grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-5">
				{data.map((issue) => {
					return <IssueCard key={issue.id} {...issue} />;
				})}
			</div>
			<div className="flex justify-center desktop:hidden">
				<SolidBtn primary={false} label={'더보기'} />
			</div>
		</section>
	);
};

export default Content;
