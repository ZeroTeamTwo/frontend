interface NavBtnProps {
	direction: 'prev' | 'next';
	disabled: boolean;
	onClick: () => void;
}

const NavBtn = ({ direction, disabled, onClick }: NavBtnProps) => {
	return (
		<button
			type="button"
			onClick={onClick}
			disabled={disabled}
			className={`group absolute top-1/2 z-10 flex size-[48px] -translate-y-1/2 items-center justify-center rounded-[12px] backdrop-blur-[32px] transition-colors ${
				direction === 'prev' ? 'left-5' : 'right-5'
			} ${disabled ? 'cursor-not-allowed bg-transparent' : 'bg-transparent hover:bg-[rgba(255,255,255,0.05)] active:bg-[rgba(255,255,255,0.12)]'}`}
		>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={direction === 'next' ? 'rotate-180' : ''}
			>
				<path d="M14.5 17L9.5 12L14.5 7" stroke={disabled ? '#70737C85' : '#FFFFFF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</button>
	);
};

export default NavBtn;
