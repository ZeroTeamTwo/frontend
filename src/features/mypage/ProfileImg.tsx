'use client';

import EditIcon from '@/shared/icon/Edit';
import Image from 'next/image';

const ProfileImg = ({ img, nickname }: { img: string; nickname: string }) => {
	return (
		<figure className="relative w-[100px] h-[100px] hover:cursor-pointer">
			<Image
				src={img}
				alt="프로필 이미지"
				width={100}
				height={100}
				className="w-[100px] h-[100px] rounded-full object-cover object-center"
				draggable={false}
				sizes="100vw"
				priority
			/>

			{/* 우측 하단 아이콘 자리 */}
			<div className="absolute bottom-1 right-1 w-6 h-6 bg-white rounded-full border border-line-normal flex items-center justify-center shadow-sm">
				<EditIcon />
			</div>

			<figcaption className="sr-only">{nickname}님의 프로필 사진</figcaption>
		</figure>
	);
};

export default ProfileImg;
