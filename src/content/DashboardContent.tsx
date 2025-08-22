import MyDashboard from '../components/DashboardComponents/MyDashboard'
import Card from '../components/DashboardComponents/Card'
import WaveChart from '../components/BarCharts/WaveChart'
import SalesRevenueChart from '../components/BarCharts/SalesRevenue'

const DashboardContent = () => {
  return (
    <div className="background-primary h-auto p-6 flex flex-col gap-6">
        <MyDashboard />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div className="grid grid-cols-1 md:gap-6 md:grid-cols-3">
          <div className="col-span-2 mb-6 md:mb-0">
            <WaveChart />
          </div>
          <div className="col-span-1">
            <SalesRevenueChart />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="border border-gray-700 w-full rounded-lg h-120"></div>
          <div className="border border-gray-700 w-full rounded-lg h-120"></div>
          <div className="border border-gray-700 w-full rounded-lg h-120"></div>
        </div>
    </div>
  )
}

export default DashboardContent