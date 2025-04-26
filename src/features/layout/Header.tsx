import React from 'react';

const Header = () => {
	return (
		<div className="w-full px-5 mx-auto flex justify-center">
			<div className="flex justify-between items-center sticky top-0 w-full max-w-maxw bg-red-90 h-16">
				<div className="font-medium">로고</div>
				<div className="font-bold">네브바</div>
				<div className="">유저프로필</div>
			</div>
		</div>
	);
};

export default Header;
