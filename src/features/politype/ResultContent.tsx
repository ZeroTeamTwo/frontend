'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SolidBtn } from '@/shared/components/SolidBtn';
import { usePolitypeResult } from './hooks/usePolitypeResult';
import { derivePolitypeResult } from './util/politypeScore';
import { CHANGE_LABEL, VALUE_LABEL } from './const';

interface ScoreBarProps {
	title: string;
	score: number;
	leftLabel: string;
	rightLabel: string;
	reversed?: boolean;
}

const ScoreBar = ({ title, score, leftLabel, rightLabel, reversed = false }: ScoreBarProps) => {
	// 3점 기준 중앙에서 양방향으로 뻗는 게이지
	// deviation: -2~+2 범위, fillPct: 0~50%
	const deviation = score - 3;
	const fillPct = (Math.abs(deviation) / 2) * 50;
	// reversed면 방향 반전 (가치 본능: high=진보=왼쪽)
	const goesRight = reversed ? deviation < 0 : deviation > 0;

	return (
		<div className="flex flex-col gap-5 w-full">
			<p className="typo-heading1 font-semibold text-line-solid-alternative drop-shadow-[0_0_8px_rgba(0,0,0,0.08)]">{title}</p>
			<div className="flex flex-col gap-2 w-full">
				<div className="relative h-6 w-full overflow-hidden rounded-lg">
					<div className="absolute inset-0 rounded-lg bg-white/30 backdrop-blur-sm" />
					<div
						className="absolute top-[2px] h-5 rounded-md bg-[#00d5a2] backdrop-blur-sm transition-all duration-700 ease-out"
						style={goesRight ? { left: '50%', width: `${fillPct}%` } : { left: `${50 - fillPct}%`, width: `${fillPct}%` }}
					/>
				</div>
				<div className="flex justify-between typo-headline1 font-semibold text-line-solid-alternative">
					<span>{leftLabel}</span>
					<span>{rightLabel}</span>
				</div>
			</div>
		</div>
	);
};

const ResultInner = () => {
	const router = useRouter();
	const { isValid, scores } = usePolitypeResult();

	if (!isValid || !scores) {
		return (
			<div className="flex flex-col items-center gap-4 py-20">
				<p className="typo-body1-normal text-line-solid-alternative">답변 데이터가 없습니다.</p>
				<SolidBtn label="다시 검사하기" size="medium" onClick={() => router.push('/politype')} className="bg-primary-sub-normal text-label-normal" />
			</div>
		);
	}

	const result = derivePolitypeResult(scores);
	const { animal, actionLabel, imagePath, changeLevel, valueLevel } = result;

	const changeLabelText = CHANGE_LABEL[changeLevel];
	const valueLabelText = VALUE_LABEL[valueLevel];

	return (
		<div className="relative flex flex-col items-center gap-[60px] w-full px-5 py-[104px]">
			{/* 배경 딤 그라데이션 */}
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(37,55,26,0.3)] to-[#25371a]" />

			{/* 섹션 1: 히어로 + 동물 이미지 + 상태창 + 점수바 */}
			<div className="relative z-10 flex flex-col items-center w-full">
				{/* 타이틀 */}
				<div className="flex flex-col gap-2 items-center text-center text-line-solid-alternative drop-shadow-[0_8px_16px_rgba(0,0,0,0.08)] mb-2">
					{/* TODO: 소개 문구 확정 필요 */}
					<p className="typo-headline1 desktop:text-[24px]">{`${changeLabelText} ${valueLabelText}형`}</p>
					<p className="font-bold text-[36px] leading-[1.33] tracking-[-0.04em] desktop:text-[56px]">
						{actionLabel} {animal}
					</p>
				</div>

				{/* 동물 이미지 */}
				<div className="relative w-full aspect-square max-w-[364px]">
					<Image src={imagePath} alt={`${actionLabel} ${animal}`} fill sizes="(max-width: 600px) 100vw, 364px" className="object-contain" priority />
				</div>

				{/* 상태창 (Status Window) */}
				<div className="relative w-full max-w-[360px] overflow-hidden rounded-sm backdrop-blur-md bg-white/10 border border-white/20 px-6 py-8 flex flex-col gap-3 items-center text-center">
					{/* TODO: 동물별 소개 문구 확정 필요 */}
					<p className="typo-heading1 font-semibold text-line-solid-alternative drop-shadow-[0_0_4px_rgba(0,0,0,0.08)]">TODO: 대표 문구</p>
					<p className="typo-body1-normal font-medium text-line-solid-alternative">
						TODO: {actionLabel} {animal} 소개 문구가 들어갈 자리입니다.
					</p>
					<p className="typo-label1-normal font-medium text-[#b8fbeb]">TODO: #해시태그1 #해시태그2 #해시태그3</p>
				</div>

				{/* 점수 섹션 */}
				<div className="flex flex-col gap-9 items-start w-full pt-[58px]">
					{/* 행동 에너지 (참여도) */}
					<ScoreBar title="행동 에너지" score={scores.participation} leftLabel="관망자" rightLabel="행동가" />
					{/* 변화 감각 (변화선호) */}
					<ScoreBar title="변화 감각" score={scores.change} leftLabel="안정파" rightLabel="개혁파" />
					{/* 가치 본능 (가치지향) — 높은 점수 = 진보(왼쪽) → reversed */}
					<ScoreBar title="가치 본능" score={scores.value} leftLabel="진보" rightLabel="보수" reversed />
				</div>
			</div>

			{/* 섹션 2: 궁합 동물 (TODO) */}
			<div className="relative z-10 flex gap-5 items-center w-full">
				{/* TODO: 찰떡궁합 / 어색한 동물 데이터 확정 필요 */}
				<div className="flex flex-1 flex-col gap-3 items-center pt-5 pb-2 rounded-[20px]">
					<div className="flex flex-col gap-1 items-center text-center text-line-solid-alternative">
						<p className="typo-label1-normal desktop:typo-body1-normal">나와 찰떡궁합인 동물 주민</p>
						<p className="font-semibold text-[22px] leading-[1.36] tracking-[-0.02em] desktop:font-bold desktop:text-[28px]">TODO</p>
					</div>
					<div className="relative size-[120px] rounded-full bg-white/10" />
				</div>
				<div className="flex flex-1 flex-col gap-3 items-center pt-5 pb-2 rounded-[20px]">
					<div className="flex flex-col gap-1 items-center text-center text-line-solid-alternative">
						<p className="typo-label1-normal desktop:typo-body1-normal">나와 어색한 동물 주민</p>
						<p className="font-semibold text-[22px] leading-[1.36] tracking-[-0.02em] desktop:font-bold desktop:text-[28px]">TODO</p>
					</div>
					<div className="relative size-[120px] rounded-full bg-white/10" />
				</div>
			</div>

			{/* 섹션 3: 친구 공유 CTA */}
			<div className="relative z-10 flex flex-col gap-10 items-center justify-center w-full px-5 py-6 rounded-[20px] bg-white/25">
				<div className="flex flex-col gap-4 text-center text-white w-full">
					<p className="font-bold text-[22px] leading-[1.36] tracking-[-0.02em] desktop:text-[28px]">친구들과 정치 궁합이 궁금하다면?</p>
					<p className="typo-body1-normal desktop:typo-headline1">
						지금 바로 결과를 공유하고
						<br />
						친구들의 유형을 확인해보세요!
					</p>
				</div>
				<SolidBtn
					label="정치유형검사 테스트 공유하기"
					size="large"
					className="w-full max-w-[400px] bg-primary-sub-heavy text-static-white typo-body2-normal"
				/>
			</div>

			{/* 하단 여백 (CTA 버튼 공간) */}
			<div className="h-[86px] w-full shrink-0" />
		</div>
	);
};

// 하단 고정 CTA 버튼 (viewport 기준 fixed)
const BottomCta = () => (
	<div className="fixed inset-x-0 bottom-0 z-20 flex justify-center bg-gradient-to-t from-[#25371a] to-transparent">
		<div className="flex gap-5 items-center w-full max-w-[600px] px-5 py-5">
			<button type="button" className="flex-1 py-3 rounded-xl typo-body2-normal font-semibold text-static-white bg-label-alternative">
				이미지 저장하기
			</button>
			<button type="button" className="flex-1 py-3 rounded-xl typo-body2-normal font-semibold text-static-black bg-primary-sub-normal">
				결과 공유하기
			</button>
		</div>
	</div>
);

const ResultContent = () => {
	return (
		<div className="relative w-full min-h-[calc(100dvh-64px)]">
			<Suspense>
				<ResultInner />
			</Suspense>
			<BottomCta />
		</div>
	);
};

export default ResultContent;
