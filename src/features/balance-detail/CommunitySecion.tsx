import Image from 'next/image';
import FilterDropdown from '../balance/FilterDropdown';
import Comment from './Comment';

const CommunitySecion = () => {
	return (
		<div className="flex flex-col w-full min-h-[488px] px-[20px] py-[24px] bg-bg-elevated-normal rounded-[32px] gap-[16px] desktop:min-h-[490px]">
			<div className="flex gap-[2px]">
				<Image src="/svgs/message.svg" alt="" width={24} height={24} />
				<p className="typo-headline2 font-bold text-label-strong">의견</p>
			</div>
			<input
				type="text"
				placeholder={`${'ㅇㅇㅇ'}님은 어떻게 생각하세요?`}
				className="max-h-[204px] px-[16px] py-[12px] border rounded-[12px] placeholder-label-assistive"
			/>
			<div className="flex w-full justify-end">
				<FilterDropdown queryKey="order" defaultLabel="최신순" options={['최신순', '인기순']} about="정렬" />
			</div>
			<div className="flex flex-col max-h-[650px] overflow-y-scroll scrollbar-hide pt-[16px] pb-[32px] gap-[15px] desktop:max-h-[1022px]">
				<Comment />
				<div className="w-full h-[1px] bg-line-normal-alternative" />
				<Comment />
				<div className="w-full h-[1px] bg-line-normal-alternative" />
				<Comment />
				<div className="w-full h-[1px] bg-line-normal-alternative" />
				<Comment />
				<div className="w-full h-[1px] bg-line-normal-alternative" />
				<Comment />
				<div className="w-full h-[1px] bg-line-normal-alternative" />
				<Comment />
			</div>
		</div>
	);
};

export default CommunitySecion;
