import React from 'react';

const DetailProcess = () => {
	return (
		<section className="flex flex-col w-full px-1 py-5 gap-5 desktop:px-9 desktop:py-8">
			<h3 className="typo-heading2 font-bold text-label-normal desktop:typo-heading1">법안 처리 상황</h3>
			<div className="flex flex-col gap-9">
				{/* TODO: */}
				<div className=" bg-bg-gray text-center align-middle px-5 py-4 rounded-[12px]">제안된 법안을 상임 위원회에 보냈어요</div>
				<div className="h-[64px] bg-accent-bg-blue">처리영역</div>
			</div>
		</section>
	);
};

export default DetailProcess;
