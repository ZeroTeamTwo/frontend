'use server';

import { authorizedFetcher } from '@/shared/api/fetcher';
import { IssueCardProps } from '@/shared/components/IssueCard';

export const getLatestBills = async (): Promise<IssueCardProps[]> => {
	const response = await authorizedFetcher<IssueCardProps[]>('/api/bills/popular?page=0&size=6');

	return response;
};
