import { BILL_STATUS_STEP, BillStatus } from '@/shared/const/bill';
import CheckIcon from '@/shared/icon/Check';
import React from 'react';
import { BillDetalProps, BillHistory } from './api/server';

const DetailProcess = ({ history }: Pick<BillDetalProps, 'history'>) => {
	const processBar = (Object.keys(BILL_STATUS_STEP) as BillStatus[]).map((status, i) => {
		return <ProcessItem key={status} status={status} currentStatus={history.length} info={history[i]} />;
	});

	const currentStep = Object.entries(BILL_STATUS_STEP).find(([, value]) => value.step === history.length);

	return (
		<section className="flex flex-col w-full px-1 py-5 gap-5 desktop:px-9 desktop:py-8">
			<h3 className="typo-heading2 font-bold text-label-normal desktop:typo-heading1">법안 처리 상황</h3>
			<div className="flex flex-col gap-9">
				<div className="px-5 py-4 rounded-[12px] typo-body2-normal text-label-normal font-regular text-center align-middle bg-bg-gray desktop:typo-body1-reading">
					{currentStep?.[1].label || ' '}
				</div>
				<div className="flex flex-col desktop:flex-row w-full ">{processBar}</div>
			</div>
		</section>
	);
};

export default DetailProcess;

const ProcessItem = ({ status, currentStatus, info }: { status: BillStatus; currentStatus: number; info?: BillHistory }) => {
	const currentStep = currentStatus;
	const itemStep = BILL_STATUS_STEP[status].step;
	const stepStatus = itemStep > currentStep ? '대기' : itemStep === currentStep ? '현재' : '통과';

	return (
		<div className="relative flex flex-col items-baseline h-[68px] desktop:flex-row desktop:justify-center  desktop:flex-1 desktop:h-auto">
			<div className="flex h-full  items-baseline gap-2 desktop:flex-col desktop:items-center">
				<div
					className={`flex items-center justify-center z-10 w-5 h-5 rounded-full typo-caption1 font-bold text-white ${
						stepStatus === '대기' ? 'bg-line-normal' : 'bg-primary-main-normal'
					}`}
				>
					{stepStatus === '통과' ? <CheckIcon width={14} height={14} strokeWidth={3} /> : itemStep}
				</div>
				<div className="flex flex-col gap-3 desktop:w-full desktop:items-center">
					<span
						className={`flex items-center gap-0.5 typo-label1-normal font-bold ${stepStatus === '현재' ? 'text-label-normal' : 'text-label-alternative'}`}
					>
						{status}
					</span>
					{stepStatus !== '대기' && (
						<span className="typo-caption1 font-regular text-interaction-inactive">{info && info.stepDate + ' ' + info.stepResult} </span>
					)}
				</div>
			</div>
			{status !== '공포' && (
				<div
					className={`absolute top-2.5 left-[9px] h-[68px] w-0.5 ${stepStatus === '통과' ? 'bg-primary-main-normal' : 'bg-line-normal'} desktop:top-[9px] desktop:left-1/2
			desktop:h-0.5 desktop:w-full`}
				/>
			)}
		</div>
	);
};
