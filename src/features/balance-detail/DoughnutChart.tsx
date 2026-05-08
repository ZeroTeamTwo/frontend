import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
	pros: number;
	cons: number;
}

const DoughnutChart = ({ pros, cons }: DoughnutChartProps) => {
	const data = {
		datasets: [
			{
				data: [pros, cons],
				cutout: '55%',
				backgroundColor: ['rgba(101, 65, 242, 1)', 'rgba(0, 213, 162, 1)'],
				borderColor: 'white',
				borderRadius: 5,
				borderWidth: 2,
				hoverBackgroundColor: ['rgba(101, 65, 242, 1)', 'rgba(0, 213, 162, 1)'],
				hoverBorderWidth: 0,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: { display: false },
			tooltip: { enabled: false },
		},
	};

	return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
