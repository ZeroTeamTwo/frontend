import SearchBar from '@/shared/components/SearchBar';
import Link from 'next/link';

export default function SearchPage() {
	const data = ['이재명', '김문수', '이준석', '권영국', '정치'];
	return (
		<div className="flex flex-col items-center w-full max-w-maxw px-5 py-8 desktop:pt-0 desktop:pb-25 desktop:my-12  desktop:gap-8">
			<SearchBar />
			<section className="flex flex-col gap-5  items-baseline py-8 desktop:items-center">
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
		</div>
	);
}
