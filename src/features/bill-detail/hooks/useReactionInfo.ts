import { useEffect, useState } from 'react';
import { BillReaction, REACTION_ICON_MAP } from '../const';
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

	const updateReaction = (index: number) => {
		const selectedLabel = REACTION_ICON_MAP[index].label;
		const updated: [number, number, number, number] = [...reactionCounts];

		if (myReaction === selectedLabel) {
			updated[index] -= 1;
			setReactionCounts(updated);
			setMyReaction(null);
			return;
		}

		updated[index] += 1;

		if (myReaction !== null) {
			const prevIndex = REACTION_ICON_MAP.findIndex((item) => item.label === myReaction);
			if (prevIndex !== -1) {
				updated[prevIndex] = Math.max(0, updated[prevIndex] - 1);
			}
		}

		setReactionCounts(updated);
		setMyReaction(selectedLabel);

		// TODO: 서버 전송 로직 추가
	};

	return { reactionCounts, myReaction, setMyReaction, setReactionCounts, updateReaction };
};
