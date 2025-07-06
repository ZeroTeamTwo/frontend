import { QUERY_KEYS } from '@/shared/const/reactQuery';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBillComment, editBillComment, likeBillComment } from '../api/server';
import { useHandleError } from '@/shared/hooks/useHandleError';

export const useBillComment = () => {
	const queryClient = useQueryClient();
	const { handleErrorByName } = useHandleError();
	const deleteComment = useMutation({
		mutationFn: ({ id }: { id: number | string }) => deleteBillComment(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.billComments] });
		},
		onError: (err) => {
			handleErrorByName(err, '댓글 삭제');
		},
	});

	const editComment = useMutation({
		mutationFn: ({ id, content }: { id: number | string; content: string }) => editBillComment(id, content),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.billComments] });
		},
		onError: (err) => {
			handleErrorByName(err, '댓글 수정');
		},
	});

	const likeComment = useMutation({
		mutationFn: ({ id }: { id: number | string }) => likeBillComment(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.billComments] });
		},
		onError: (err) => {
			handleErrorByName(err, '댓글 좋아요');
		},
	});

	return { deleteComment, editComment, likeComment };
};
