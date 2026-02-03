import QuestionContent from '@/features/politype/QuestionContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: '정치성향검사 - 문항',
	description: '정치성향검사 문항에 답변해주세요.',
};

export default function QuestionPage() {
	return <QuestionContent />;
}
