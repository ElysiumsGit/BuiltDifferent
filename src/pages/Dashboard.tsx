import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs'
import Card from '../components/DashboardComponents/Card'
import MyDashboard from '../components/DashboardComponents/MyDashboard'
import Header from '../components/Header/Header'

const Dashboard = () => {
  return (
    <div>
        <Header/>
        <div className='w-full h-[1px] bg-[#464646]'></div>
        <BreadCrumbs/>
        <div className='w-full h-[1px] bg-[#464646]'></div>
        <div className='background-primary h-screen p-6 flex flex-col gap-6'>
          <MyDashboard/>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-4'>   
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
    </div>
  )
}

export default Dashboard