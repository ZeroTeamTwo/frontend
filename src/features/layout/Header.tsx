// Global Navigation Bar
import Navibar from './Navibar';
import Link from 'next/link';
import Image from 'next/image';
import { SolidBtn } from '@/shared/components/SolidBtn';
import SearchIcon from '@/shared/icon/Search';
import { CLIENT_NAVI_PATH } from '@/shared/const/url';

const Header = () => {
	return (
		<header className="sticky top-0 w-full px-5 mx-auto flex justify-center bg-white z-20 shadow-xs">
			<div className="flex justify-between items-center top-0 w-full max-w-maxw h-16">
				<Link href="/" className="font-medium">
					<Image
						src="/svgs/logo.svg"
						alt="로고"
						width={120}
						height={22}
						className="w-[97px] h-[17px] min-[960px]:w-[120px] min-[960px]:h-[30px]"
						priority
					/>
				</Link>
				<Navibar />
				<div className="flex gap-5 items-center ">
					<Link href={CLIENT_NAVI_PATH.search.path}>
						<SearchIcon width={24} height={24} />
					</Link>
					<Link href="/modal-login">
						<SolidBtn label="로그인" size="small" />
					</Link>
					<Link href="/mobile-link" className="desktop:hidden cursor-pointer">
						<Image src="/svgs/menu.svg" alt="네비바 열기" width={24} height={24} />
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
