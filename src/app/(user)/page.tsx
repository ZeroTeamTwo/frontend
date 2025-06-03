import Image from 'next/image';
import Confetti from '@/features/event-home/Confetti';
import HuboCard from '@/features/event-home/HuboCard';
import MobileHubo from '@/features/event-home/MobileHubo';
import { EventPerson } from '@/features/event/const/data';
import Link from 'next/link';

export default function Home() {
	const HUBO: EventPerson[] = ['이재명', '김문수', '이준석'];
	const PRESEDENT = '이재명';
	return (
		<div className="relative flex flex-col items-center w-full max-desktop:py-8 ">
			<div className="flex flex-col items-center gap-3  w-full max-w-maxw desktop:pt-13 desktop:gap-10 desktop:pb-8 ">
				<h1 className="flex flex-col py-4 gap-3 text-center items-center desktop:py-9 desktop:gap-5">
					<span className="typo-display2 font-bold">득표율 49%</span>
					<span className="typo-body1-normal text-label-alternative desktop:typo-heading1 desktop:font-regular ">
						{PRESEDENT} 대통령님, 당선 축하합니다.
					</span>
				</h1>
				<div className="flex  flex-col w-full items-center max-w-maxw">
					<Image src="/images/event/당선.png" alt="당선" width={1200} height={453} className="max-desktop:hidden" />
					<div className="desktop:hidden flex flex-col items-center w-full">
						<div className="flex w-full h-[252px] items-center justify-center bg-[radial-gradient(104.19%_104.19%_at_51.5%_45.03%,_#A9E1FF_0%,_#00A6FF_100%)] overflow-hidden">
							<Image
								src="/images/event/당선-모바일.png"
								alt="당선모바일"
								width={375}
								height={252}
								className="max-w-[375px] w-full object-contain desktop:hidden"
							/>
						</div>
						<div className="flex flex-col items-center gap-1 p-5">
							<span className="typo-headline1 font-regular text-label-neutral text-center">제 21대 대통령</span>
							<p className="typo-title2 font-bold text-label-normal text-center">
								{PRESEDENT} 정부 정치 법안 이야기
								<br />
								<span className="text-primary-main-normal">그래이픽</span>에서
							</p>
							<Link
								href="https://tally.so/r/wQWzY7"
								target="_blank"
								className="w-[320px] h-[46px] text-center px-7 py-3 rounded-[12px] bg-primary-main-normal mt-5 text-white typo-body2-normal desktop:hidden"
							>
								그래이픽이란?
							</Link>
						</div>
					</div>
				</div>
				<Link
					href="https://tally.so/r/wQWzY7"
					target="_blank"
					className="w-[320px] h-[46px] text-center px-7 py-3 rounded-[12px] bg-primary-main-normal text-white typo-body2-normal max-desktop:hidden"
				>
					그래이픽이란?
				</Link>
			</div>
			{/* 당선효과 */}
			<Confetti />

			<section className="flex flex-col py-8 gap-6 max-w-maxw w-full items-center desktop:gap-10">
				<header className="flex flex-col items-center py-4 gap-3 dekstop:py-9 desktop:gap-5">
					<h2 className="typo-heading1 font-bold desktop:typo-display2">2025년 대선 후보</h2>
					<p className="typo-body1-normal text-label-alternative text-center desktop:typo-heading1 desktop:font-regular">
						각 후보의 상세한 공약과 정책 자료를 확인하고,
						<br />
						여러분의 가치관에 맞는 후보를 찾아보세요.
					</p>
				</header>
				<div className="w-full max-desktop:hidden grid grid-cols-3 gap-5">
					{HUBO.map((name, i) => (
						<HuboCard key={name + i} name={name} />
					))}
				</div>
				<div className="flex flex-col w-full items-center">
					{HUBO.map((name, i) => (
						<MobileHubo key={name + i} name={name} />
					))}
				</div>
			</section>
		</div>
	);
}

/* TODO: 대선 끝나고 복구	
import Content from '@/features/home/Content';
import ContentHeader from '@/features/home/ContentHeader';

export default function Home() {
	return (
		<>
			<div className="w-full h-[250px] flex items-center justify-center  max-w-maxw bg-primary-main-strong">배너 </div>
			<div className="w-full flex flex-col flex-1 gap-16 desktop:gap-12 items-center px-9 py-12 bg-bg-gray ">
				<Content>
					<ContentHeader title="누구님이 관심있는" keywordList={['정치', '피그마', '회의']} link="/issue" />
				</Content>
				<Content>
					<ContentHeader title="당신을 위한 법안" isLoginRequired link="/issue" />
				</Content>
			</div>
		</>
	);
}

*/
