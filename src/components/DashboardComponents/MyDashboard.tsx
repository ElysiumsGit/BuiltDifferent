import { FaUserCircle } from 'react-icons/fa';
import Button from '../Button/Button';
import BarChart from '../BarCharts/BarChart';

const MyDashboard = () => {
  return (
    <div className="foreground-primary border border-gray-700 text-white p-6 rounded-lg flex justify-between items-center">
      <section className='poppins-regular'>
        <p>Welcome back!</p>
        <h1 className="text-3xl font-bold mb-4">My Dashboard</h1>
        <div className='flex gap-4 items-center'>
          <FaUserCircle size={40}/>
          <div>
            <p className="text-cyan-400 text-4xl font-semibold">Hello, John Carlo!</p>
            <p className="text-sm text-gray-300">abierajc@builtdif.com</p>
          </div>
        </div>
        <div className='mt-8 ml-13'>
          <p>"Power up your web app with our sleek Built Different dashboard template.</p>
        </div>
      </section>

      <div className="flex flex-col gap-6 poppins-regular">
        <div>
          <p className="text-gray-400">FY 2020 <span className="text-xs text-gray-500">↓0.0%</span></p>
          <p className="text-lg font-bold">$7.9 K</p>
        </div>
        <div>
          <p className="text-gray-400">FY 2021 <span className="text-xs text-green-400">▲12.0%</span></p>
          <p className="text-lg font-bold">$15.0 K</p>
        </div>
        <div>
          <p className="text-gray-400">FY 2022 <span className="text-xs text-red-400">▼3.4%</span></p>
          <p className="text-lg font-bold">$12.8 K</p>
        </div>
        <div className='w-36'>
          <Button>View Reports</Button>
        </div>
      </div>
      <div className='w-[600px] h-[300px]'>
        <BarChart/>
      </div>
    </div>
  );
};

export default MyDashboard;
