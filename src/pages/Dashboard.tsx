import SalesRevenueChart from '../components/BarCharts/SalesRevenue'
import WaveChart from '../components/BarCharts/WaveChart'
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs'
import Card from '../components/DashboardComponents/Card'
import MyDashboard from '../components/DashboardComponents/MyDashboard'
import Header from '../components/Header/Header'

const Dashboard = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50 bg-[#1e1e1e]">
        <Header />
        <BreadCrumbs />
      </div>

      <div className="background-primary h-auto p-6 flex flex-col gap-6">
        <MyDashboard />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:gap-6 md:grid-cols-3">
          <div className="col-span-2 mb-6 md:mb-0">
            <WaveChart />
          </div>
          <div className="col-span-1">
            <SalesRevenueChart />
          </div>
        </div>

        {/* Placeholders */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="border border-gray-700 w-full rounded-lg h-120"></div>
          <div className="border border-gray-700 w-full rounded-lg h-120"></div>
          <div className="border border-gray-700 w-full rounded-lg h-120"></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
