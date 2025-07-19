'use client';

import { useState } from 'react';
import { toggleScrapped } from '@/shared/api/bill';
import BookmarkIcon from '@/shared/icon/Bookmark';
import { useRouter } from 'next/navigation';
import { MODAL_PATH } from '@/shared/const/url';

const BookmarkBtn = ({ id, isScrapped }: { id: string; isScrapped: boolean }) => {
	const [isBookmarked, setIsBookmarked] = useState<boolean>(isScrapped);

	const router = useRouter();
	const toggleBookmark = async (id: string) => {
		const res = await toggleScrapped(id);
		switch (res.status) {
			case 'success':
				setIsBookmarked((prev) => !prev);
				break;
			case 'relogin':
				router.push(MODAL_PATH.login, { scroll: false });
				break;
			default:
				alert('서버 에러가 발생했습니다.');
		}
	};

	return (
		<button onClick={() => toggleBookmark(id)} className="flex gap-1 items-center align-middle">
			<BookmarkIcon isChecked={isBookmarked} className="my-0.5" />
			<span className={`${isBookmarked ? 'text-primary-main-normal' : 'text-label-alternative/61'}`}>북마크</span>
		</button>
	);
};

export default BookmarkBtn;
