'use client';

import { useBillQueryState } from './hooks/useBillQueryState';

const BillContents = () => {
	useBillQueryState();
	return <div>BillContents</div>;
};

export default BillContents;
