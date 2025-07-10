import Link from 'next/link';
import React from 'react';

const RecommendTerms = () => {
	const data = ['정치', '경제', '사회', '문화', '환경'];

	return (
		<section className="flex flex-col gap-5 items-baseline py-8 desktop:items-center">
			<h2 className="typo-headline1 font-bold">추천 검색어</h2>
			<div className="flex flex-wrap gap-2 max-w-[660px]">
				{data.map((word, i) => (
					<Link
						key={word + i}
						href=""
						className="flex justify-center items-center border rounded-[10px] typo-body2-normal px-5 py-[9px] text-label-normal"
					>
						{word}
					</Link>
				))}
			</div>
		</section>
	);
};

export default RecommendTerms;
