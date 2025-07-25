import React from 'react';

interface RightIconProps {
	width?: number;
	height?: number;
	className?: string;
}

const RightIcon = ({ width = 7, height = 12, className = 'text-label-alternative' }: RightIconProps) => {
	return (
		<svg width={width} height={height} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path
				d="M0.242264 0.241654C0.00794969 0.475969 0.00794967 0.855868 0.242264 1.09018L5.15133 5.99925L0.242265 10.9083C0.00795015 11.1426 0.00795015 11.5225 0.242265 11.7568C0.476579 11.9912 0.856478 11.9912 1.09079 11.7568L6.42413 6.42352C6.65844 6.1892 6.65844 5.8093 6.42413 5.57499L1.09079 0.241654C0.856478 0.00733934 0.476579 0.00733932 0.242264 0.241654Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default RightIcon;
