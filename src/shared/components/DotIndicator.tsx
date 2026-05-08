const DotIndicator = ({ totalSteps, currentStep, className = '' }: { totalSteps: number; currentStep: number; className?: string }) => {
	return (
		<div className={`flex justify-center w-full gap-[6px] ${className}`}>
			{Array.from({ length: totalSteps }).map((_, index) => (
				<div
					key={index}
					className={`h-[6px] w-[6px] rounded-full transition duration-150 ${currentStep === index ? 'bg-label-neutral' : 'bg-label-disable'}`}
				></div>
			))}
		</div>
	);
};

export default DotIndicator;
