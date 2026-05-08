interface VoteChipProps {
	type: 'pros' | 'cons';
}

const VoteChip = ({ type }: VoteChipProps) => {
	const isPros = type === 'pros';

	return (
		<div
			className={`flex items-center px-[4px] py-[1px] rounded-[4px]
	  		${isPros ? 'bg-[var(--color-violet-99)]' : 'bg-[var(--color-emerald-99)]'}`}
		>
			<p
				className={`typo-caption2 
				${isPros ? 'text-primary-main-heavy' : 'text-primary-sub-heavy'}`}
			>
				{isPros ? '지지' : '반대'}
			</p>
		</div>
	);
};

export default VoteChip;
