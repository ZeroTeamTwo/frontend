'use client';
import { useState } from 'react';
import { clearAuth } from '../auth/utils/cookie';

const LogoutBtn = ({ isLogin }: { isLogin: boolean }) => {
	const [isStillLogin, setisStillLogin] = useState(isLogin);
	const logout = async () => {
		await clearAuth();
		setisStillLogin(false);
	};

	return (
		<>
			{isStillLogin && (
				<button
					onClick={logout}
					className="absolute bottom-9 ml-10.5 my-3 typo-body1-normal font-regular text-label-alternative  active:text-label-normal"
				>
					로그아웃
				</button>
			)}
		</>
	);
};

export default LogoutBtn;
