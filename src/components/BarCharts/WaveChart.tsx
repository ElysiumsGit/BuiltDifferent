import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import type { ChartOptions, ChartData } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#ccc',
        boxWidth: 10,
        boxHeight: 10,
        padding: 20,
      },
    },
  },
  scales: {
    x: {
      ticks: { color: '#999' },
      grid: { display: false },
    },
    y: {
      ticks: { color: '#999' },
      grid: { color: '#222' },
    },
  },
};

const labels = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May',
  'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const data: ChartData<'line'> = {
  labels,
  datasets: [
    {
      label: 'Mobile',
      data: [30, 40, 25, 50, 35, 100, 95, 20, 25, 45, 35, 25],
      borderColor: 'rgba(155, 89, 182, 1)',
      backgroundColor: 'rgba(155, 89, 182, 0.2)',
      fill: true,
      tension: 0.4,
      pointRadius: 0,
    },
    {
      label: 'Web',
      data: [10, 25, 30, 100, 90, 35, 30, 40, 30, 30, 50, 30],
      borderColor: 'rgba(52, 152, 219, 1)',
      backgroundColor: 'rgba(52, 152, 219, 0.2)',
      fill: true,
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

const WaveChart: React.FC = () => {
  return (
    <div className='foreground-primary p-6 h-auto border border-gray-700 rounded-lg'>
      <h3 className='text-white mb-4' >Sales Analytics</h3>
      <Line height="90px" options={options} data={data} />
    </div>
  );
};

export default WaveChart;
