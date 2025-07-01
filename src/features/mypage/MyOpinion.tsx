'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getMyReactions } from './api/server';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const MyOpinion = () => {
	const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
		queryKey: ['reactions'],
		queryFn: ({ pageParam }) => getMyReactions({ page: pageParam }),
		initialPageParam: 1,
		getNextPageParam: (lastPage) => {
			if (!lastPage.result.last) {
				return lastPage.result.pageNumber + 1;
			}
			return undefined;
		},
	});

	const sensorRef = useRef(null);
	const isInView = useInView(sensorRef);

	useEffect(() => {
		if (!isFetching && hasNextPage && isInView) {
			fetchNextPage();
		}
	}, [fetchNextPage, hasNextPage, isFetching, isInView]);

	console.log(data);
	return (
		<div className="grid grid-cols-1 ">
			{data?.pages.map(({ result }) => result.content.map((reaction) => <div key={reaction.billId} className="bg-accent-bg-blue" />))}
			<div ref={sensorRef} className="bg-accent-bg-red w-full h-10" />
		</div>
	);
};

export default MyOpinion;
