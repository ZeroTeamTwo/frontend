import { useEffect, useState } from 'react';
import { BillReaction } from '../const';
import { getMyReactions } from '../api/server';

export const useReactionInfo = (id: string) => {
	// 좋아요, 개선필요, 흥미진진, 아쉬워요
	const [reactionCounts, setReactionCounts] = useState<[number, number, number, number]>([0, 0, 0, 0]);
	const [myReaction, setMyReaction] = useState<BillReaction | null>(null);

	useEffect(() => {
		const fetchReactionInfo = async () => {
			const { result } = await getMyReactions(id);
			setReactionCounts([result.likeReactionCount, result.improvementReactionCount, result.excitedReactionCount, result.disappointedReactionCount]);
			setMyReaction(result.userReactionType);
		};

		fetchReactionInfo();
	}, [id]);

	return { reactionCounts, myReaction, setMyReaction, setReactionCounts };
};
