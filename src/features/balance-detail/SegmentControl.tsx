interface SegmentControlProps {
	selected: string; // '찬성유형' | '반대유형'
	onChange: (value: string) => void;
}

const SegmentControl = ({ selected, onChange }: SegmentControlProps) => {
	return (
		<div className="h-[38px] flex gap-[2px] p-[2px] rounded-full bg-fill-alternative">
			{/* 찬성유형 버튼 */}
			<button
				onClick={() => onChange('찬성유형')}
				className={`flex-1 rounded-full transition-all ${selected === '찬성유형' ? 'bg-[var(--color-violet-95)]' : 'bg-transparent'}`}
			>
				<p className={`typo-body2-normal ${selected === '찬성유형' ? 'text-primary-main-heavy' : 'text-label-assistive'}`}>찬성유형</p>
			</button>

			{/* 반대유형 버튼 */}
			<button
				onClick={() => onChange('반대유형')}
				className={`flex-1 rounded-full transition-all ${selected === '반대유형' ? 'bg-[var(--color-emerald-95)]' : 'bg-transparent'}`}
			>
				<p className={`typo-body2-normal ${selected === '반대유형' ? 'text-primary-sub-heavy' : 'text-label-assistive'}`}>반대유형</p>
			</button>
		</div>
	);
};

export default SegmentControl;
