import { Metadata } from 'next';
import { Suspense } from 'react';
import SearchContent from '@/features/search/SearchContent';
import SearchBar from '@/features/search/SearchBar';

export const metadata: Metadata = {
	title: '검색 페이지',
};

export default function SearchPage() {
	return (
		<div className="flex flex-col items-center w-full px-5 py-8 desktop:pt-0 desktop:pb-25 desktop:my-12  desktop:gap-8">
			<Suspense>
				<div className="max-w-maxw w-full flex justify-center">
					<SearchBar />
				</div>
				<SearchContent />
			</Suspense>
		</div>
	);
}
