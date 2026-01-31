import IntroContent from '@/features/politype/IntroContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: '정치성향검사',
	description: '정치의 숲에서 환생 나는 누구? 내 정치 유형을 알아보세요.',
};

export default function PolitypePage() {
	return <IntroContent />;
}
