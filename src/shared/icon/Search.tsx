interface SearchIconProps {
	className?: string;
	width?: number | string;
	height?: number | string;
}

const SearchIcon = ({ className = 'text-[#171719]', width = 18, height = 18 }: SearchIconProps) => {
	return (
		<svg className={className} width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.33327 0.416748C3.51331 0.416748 0.416626 3.51345 0.416626 7.33341C0.416626 11.1534 3.51331 14.2501 7.33327 14.2501C8.85235 14.2501 10.2571 13.7604 11.3981 12.9302L15.3173 16.8494C15.7404 17.2725 16.4263 17.2725 16.8494 16.8494C17.2724 16.4263 17.2724 15.7404 16.8494 15.3174L12.9302 11.3981C13.7602 10.2571 14.2499 8.85242 14.2499 7.33341C14.2499 3.51345 11.1532 0.416748 7.33327 0.416748ZM2.58328 7.33341C2.58328 4.71006 4.70992 2.58341 7.33327 2.58341C9.95661 2.58341 12.0832 4.71006 12.0832 7.33341C12.0832 9.95677 9.95661 12.0834 7.33327 12.0834C4.70992 12.0834 2.58328 9.95677 2.58328 7.33341Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default SearchIcon;
