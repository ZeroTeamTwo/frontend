'use client';

import Comment from '@/shared/components/Comment';
import React from 'react';
import AddComment from './AddComment';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getBillComments } from './api/server';
import { QUERY_KEYS } from '@/shared/const/reactQuery';
import { useBillComment } from './hooks/useBillComment';
import InfinityScrollSpinner from '@/shared/components/InfinityScrollSpinner';
import ErrorIndicator from '@/shared/components/ErrorIndicator';

interface CommentListType {
	billId: string | number;
	nickname: string;
}

const DetailCommentList = ({ billId, nickname }: CommentListType) => {
	const { data, fetchNextPage, hasNextPage, isFetching, isError } = useInfiniteQuery({
		queryKey: [QUERY_KEYS.billComments, billId],
		queryFn: ({ pageParam }) => getBillComments({ id: billId, page: pageParam }),
		initialPageParam: 0,
		getNextPageParam: (lastPage) => {
			if (!lastPage.result.comments.last) {
				return lastPage.result.comments.pageNumber + 1;
			}
			return undefined;
		},
		gcTime: 60 * 1000,
		staleTime: 50 * 1000,
	});

	const { deleteComment, editComment, likeComment } = useBillComment(billId);
	const commentList = data?.pages.flatMap((page) => page.result.comments.content) ?? [];

	return (
		<section className="flex flex-col w-full px-1 py-5 gap-[15px] desktop:px-12 desktop::py-8">
			<header className="flex typo-heading2 font-bold text-label-normal desktop:typo-heading1 gap-2">
				댓글 <p className="typo-heading2 desktop:typo-heading1 text-label-alternative">{commentList.length}</p>
			</header>
			<AddComment id={billId} />
			<ul className="flex flex-col gap-[15px] desktop:gap-5">
				{commentList.map((comment) => {
					return (
						<Comment
							key={comment.commentId}
							{...comment}
							isWriter={comment.nickname === nickname}
							editFn={(newContent: string) => {
								editComment.mutate({ id: comment.commentId, content: newContent });
							}}
							reportFn={() => {}}
							deleteFn={() => {
								deleteComment.mutate({ id: comment.commentId });
							}}
							likeFn={() => {
								likeComment.mutate({ id: comment.commentId });
							}}
						/>
					);
				})}
				<div className="flex items-center justify-center w-full">
					{isError && <ErrorIndicator retiralFn={fetchNextPage} />}
					{!isError && hasNextPage && <InfinityScrollSpinner isFetching={isFetching} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />}{' '}
				</div>
			</ul>
		</section>
	);
};

export default DetailCommentList;
