import { LIKERT_OPTION_LIST } from '../const';

interface LikertScaleProps {
	selectedValue: number | null;
	onSelect: (value: number) => void;
}

const LikertScale = ({ selectedValue, onSelect }: LikertScaleProps) => {
	return (
		<div className="flex w-full max-w-[450px] items-center justify-between">
			{LIKERT_OPTION_LIST.map((option) => (
				<button key={option.value} type="button" className="flex flex-col items-center gap-1 overflow-hidden" onClick={() => onSelect(option.value)}>
					<div className="flex size-[70px] items-center justify-center">
						<div
							className={`rounded-full border-2 transition-all duration-200 ${
								selectedValue === option.value
									? 'border-[#00D5A2] bg-[rgba(0,213,162,0.4)]'
									: 'border-line-solid-alternative bg-[rgba(255,255,255,0.2)]'
							}`}
							style={{ width: option.size, height: option.size }}
						/>
					</div>
					<span className="flex h-[48px] w-[74px] flex-col items-center justify-center typo-label1-normal desktop:typo-body1-normal font-bold text-line-solid-alternative text-center whitespace-pre-line">
						{option.label}
					</span>
				</button>
			))}
		</div>
	);
};

export default LikertScale;
