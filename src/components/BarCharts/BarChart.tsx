import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import type { ChartOptions, ChartData } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart: React.FC = () => {
  const data: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        backgroundColor: '#14b8a6',
        data: [45, 55, 42, 67, 21, 44, 20, 49, 13, 25, 20, 10],
      },
      {
        label: 'Expenses',
        backgroundColor: '#f43f5e', // Tailwind rose-500
        data: [30, 35, 28, 40, 18, 30, 15, 38, 10, 20, 17, 8],
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#ccc',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#aaa',
        },
      },
      y: {
        ticks: {
          color: '#aaa',
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
