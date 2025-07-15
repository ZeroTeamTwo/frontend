import { SocialType } from '@/shared/components/SocialBtn';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { loginUser } from '../api/oauth';

// 인가받은 코드로 BE를 통해 로그인을 하는 훅
export const useLoginWithOauthCode = (code: string | null) => {
	const [isFail, setIsFail] = useState(false);
	const [socialType, setSocialType] = useState<SocialType | null>(null);
	const router = useRouter();

	useEffect(() => {
		if (!code || !socialType) return;

		loginUser(code, socialType)
			.then((user) => {
				if (!user.nickname) {
					router.push('/onboarding');
				} else {
					router.back();
				}
			})
			.catch((e) => {
				console.error(e);
				setIsFail(true);
			});
	}, [code, socialType, router]);

	return { isFail, setSocialType };
};
