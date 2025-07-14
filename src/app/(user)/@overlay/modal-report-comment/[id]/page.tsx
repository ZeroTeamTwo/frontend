'use client';

import { use } from 'react';
import Modal from '@/shared/components/Modal';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = use(params);

	return (
		<Modal>
			<div className="flex flex-col items-center w-full px-6 desktop:px-0 py-[42px] max-w-[335px] desktop:max-w-[320px] desktop:pt-[143px]  gap-6 desktop:gap-[48px] ">
				{id}의 댓글 신고하기
			</div>
		</Modal>
	);
}
