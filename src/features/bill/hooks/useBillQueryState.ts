import { useSearchParams } from 'next/navigation';

export const useBillQueryState = () => {
	const searchParams = useSearchParams();

	const order = searchParams.get('order') ?? '최신순';
	const keywordsParam = searchParams.get('keywords') ?? '';
	const keywords = keywordsParam ? keywordsParam.split(',') : [];

	return { order, keywords };
};
