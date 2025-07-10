import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import useUpdateQueryParam from '@/shared/hooks/useUpdateQueryParam';
import useDebounce from '@/shared/hooks/useDebounce';

// useSearchParams 훅에 의해서 Suspense를 걸어야함 //https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
const useSearch = (debounceDelay: number = 500) => {
	const [searchTerm, setSearchTerm] = useState('');
	const searchParams = useSearchParams();
	const updateQueryParam = useUpdateQueryParam();

	useEffect(() => {
		const initialSearch = searchParams.get('search') || '';
		setSearchTerm(initialSearch);
	}, [searchParams]);

	const debouncedSearchTerm = useDebounce(searchTerm, debounceDelay);

	useEffect(() => {
		updateQueryParam('search', debouncedSearchTerm || null);
	}, [debouncedSearchTerm, updateQueryParam]);

	return { searchTerm, setSearchTerm };
};

export default useSearch;
