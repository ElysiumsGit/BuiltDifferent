// SalesRevenueChart.tsx
import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import type { ChartOptions, ChartData } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const SalesRevenueChart: React.FC = () => {
  const data: ChartData<'bar'> = {
    labels: ['USA', 'Poland', 'Germany', 'Russia', 'Australia', 'Great Britain'],
    datasets: [
      {
        label: 'Sales Revenue ($)',
        data: [6425, 5582, 4587, 2520, 1899, 1056],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#D1D5DB', 
        },
        grid: {
          color: '#374151',
        },
      },
      x: {
        ticks: {
          color: '#D1D5DB',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-foreground-primary border border-gray-700 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl text-white mb-4 font-semibold">Sales Revenue</h2>
      <Bar height="190px" data={data} options={options} />
    </div>
  );
};

export default SalesRevenueChart;
