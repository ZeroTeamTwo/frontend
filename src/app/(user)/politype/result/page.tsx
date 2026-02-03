import ResultContent from '@/features/politype/ResultContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: '정치성향검사 - 결과',
	description: '나의 정치 성향 검사 결과를 확인해보세요.',
};

export default function ResultPage() {
	return <ResultContent />;
}
