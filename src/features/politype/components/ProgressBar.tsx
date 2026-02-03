interface ProgressBarProps {
	current: number;
	total: number;
}

const ProgressBar = ({ current, total }: ProgressBarProps) => {
	const progressPercent = (current / total) * 100;

	return (
		<div className="relative h-[24px] w-full overflow-hidden rounded-[8px] backdrop-blur-[6px]">
			<div className="absolute inset-0 rounded-[8px] bg-static-white opacity-30" />
			<div
				className="absolute left-[1%] top-[4px] h-[16px] rounded-[4px] bg-[#00D5A2] backdrop-blur-[6px] transition-all duration-300 ease-out"
				style={{ width: `${Math.max(progressPercent - 2, 0)}%` }}
			/>
		</div>
	);
};

export default ProgressBar;
