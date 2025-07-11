import React from 'react';
import EmptySearch from './EmptySearch';
import { useInfinityScrollSensor } from '@/shared/hooks/useInfinityScrollSensor';
import { getSearchData } from './api/server';
import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/shared/const/reactQuery';
import IssueCard from '@/shared/components/IssueCard';

const SearchData = ({ keyword }: { keyword: string }) => {
	const { data, fetchNextPage, hasNextPage, isLoading, isFetching } = useInfiniteQuery({
		queryKey: [QUERY_KEYS.search, keyword],
		queryFn: ({ pageParam }) => getSearchData({ page: pageParam, keyword }),
		initialPageParam: 0,
		getNextPageParam: (lastPage) => {
			if (!lastPage.result.last) {
				return lastPage.result.pageNumber + 1;
			}
			return undefined;
		},
		gcTime: 40 * 1000,
		staleTime: 30 * 1000,
	});

	const { sensorRef } = useInfinityScrollSensor({ isFetching, hasNextPage, fetchNextPage });
	const searchData = data?.pages.flatMap((page) => page.result.content) ?? [];

	return (
		<section className="flex flex-col gap-5 items-baseline px-9 py-8 desktop:items-center bg-bg-gray w-full  min-h-[calc(100vh-300px)] desktop:min-h-[calc(100vh-260px)]">
			<section className="w-full max-w-maxw grid grid-cols-3  gap-4 max-desktop:grid-cols-2 max-tablet:grid-cols-1">
				{searchData.length === 0 ? <EmptySearch keyword={keyword} /> : searchData.map((bill) => <IssueCard key={bill.billId} {...bill} />)}

				<div ref={sensorRef} className="flex  w-full items-center justify-center col-span-3 max-desktop:col-span-2 max-tablet:col-span-1">
					{!isLoading && hasNextPage && (
						<div
							className="w-6 h-6 border-2 border-t-transparent border-inverse-primary-main rounded-full animate-spin"
							role="status"
							aria-label="로딩 중"
						/>
					)}
				</div>
			</section>
		</section>
	);
};

export default SearchData;
