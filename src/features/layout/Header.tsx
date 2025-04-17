import React from 'react';

const Header = () => {
	return (
		<div className="flex justify-between items-center fixed top-0 w-full max-w-max mx-auto p-4 bg-red-90">
			<div>로고</div>
			<div>네브바</div>
			<div>검색</div>
			<div>링크</div>
		</div>
	);
};

export default Header;
