import { RefreshTokenError } from '@/shared/const/error';
import { getRecommenedBills } from './api';
import Content from './Content';
import ContentHeader from './ContentHeader';
import { redirect } from 'next/navigation';

const RecommendBills = async () => {
	try {
		const response = await getRecommenedBills();
		const { nickname, keywords, bills } = response;

		return (
			<Content data={bills.content}>
				<ContentHeader
					title={nickname ? `${nickname}님이 관심있는` : '당신을 위한 법안'}
					keywordList={nickname ? keywords : null}
					link="/issue"
					isLoginRequired={!nickname}
				/>
			</Content>
		);
	} catch (err) {
		if (err instanceof RefreshTokenError) {
			redirect('/modal-login');
		}
		return (
			<div className="w-full flex justify-center items-center h-[100px] text-center text-red-500">
				서버가 원활하지 않습니다. 잠시 후 다시 시도해주세요.
			</div>
		);
	}
};

export default RecommendBills;
