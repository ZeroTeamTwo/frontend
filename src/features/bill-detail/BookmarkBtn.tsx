'use client';

import { useEffect } from 'react';
import { toggleScrapped } from '@/shared/api/bill';
import BookmarkIcon from '@/shared/icon/Bookmark';
import { useRouter } from 'next/navigation';
import { MODAL_PATH } from '@/shared/const/url';
import useToast from '@/shared/hooks/useToast';
import { useBookmarkStore } from '@/shared/store/useBookmarkStore';

const BookmarkBtn = ({ id, isScrapped }: { id: string; isScrapped: boolean }) => {
	const router = useRouter();
	const { showSuccess, showError } = useToast();

	const isBookmarked = useBookmarkStore((state) => state.bookmarkMap[id]);
	const { initBookmark, toggleBookmark } = useBookmarkStore();

	useEffect(() => {
		initBookmark(id, isScrapped);
	}, [id, isScrapped, initBookmark]);

	const handleToggle = async (id: string) => {
		const res = await toggleScrapped(id);
		switch (res.status) {
			case 'success':
				toggleBookmark(id);
				if (!isBookmarked) {
					showSuccess('법안을 북마크에 저장했어요.');
				}
				break;
			case 'relogin':
				router.push(MODAL_PATH.login, { scroll: false });
				break;
			default:
				showError('서버 에러가 발생했습니다.');
		}
	};

	return (
		<button onClick={() => handleToggle(id)} className="flex gap-1 items-center">
			<BookmarkIcon isChecked={isBookmarked} className="my-0.5" />
			<span className={`${isBookmarked ? 'text-primary-main-normal' : 'text-label-alternative'} typo-body2-normal font-bold`}>북마크</span>
		</button>
	);
};

export default BookmarkBtn;
