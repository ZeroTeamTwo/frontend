'use client';

import { usePathname } from 'next/navigation';
import { FOOTER_HIDDEN_PATH_LIST } from '@/features/layout/const';
import Footer from '@/features/layout/Footer';

const FooterWrapper = () => {
	const pathname = usePathname();
	const isHidden = FOOTER_HIDDEN_PATH_LIST.some((path) => pathname.startsWith(path));

	if (isHidden) return null;

	return <Footer />;
};

export default FooterWrapper;
