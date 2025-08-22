import { FaUserCircle } from "react-icons/fa";
import Button from "../Button/Button";
import BarChart from "../BarCharts/BarChart";

const MyDashboard = () => {
  return (
    <div className="foreground-primary border border-gray-700 text-white p-6 rounded-lg flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
      <section className="poppins-regular flex-1">
        <p>Welcome back!</p>
        <h1 className="text-2xl lg:text-3xl font-bold mb-4">My Dashboard</h1>

        <div className="flex gap-4 items-center flex-wrap">
          <FaUserCircle size={40} />
          <div>
            <p className="text-cyan-400 text-2xl lg:text-4xl font-semibold">
              Hello, John Carlo!
            </p>
            <p className="text-sm text-gray-300">abierajc@builtdif.com</p>
          </div>
        </div>

        <div className="mt-6 lg:mt-8 lg:ml-8">
          <p className="text-sm lg:text-base">
            "Power up your web app with our sleek Built Different dashboard
            template."
          </p>
        </div>
      </section>

      {/* Right Section (Chart) */}
      <div className="w-full lg:w-[600px] h-[250px] lg:h-[300px]">
        <BarChart />
      </div>
    </div>
  );
};

export default MyDashboard;
