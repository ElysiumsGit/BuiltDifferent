import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import SideNavigation from '../components/SideNavigation/SideNavigation'

const Dashboard = () => {
  return (
    <div>
      <div className="w-60 fixed left-0 h-screen">
        <SideNavigation />
      </div>

      <div className="sticky top-0 z-50 bg-[#1e1e1e] ml-60">
        <Header />
        {/* <BreadCrumbs /> */}
      </div>

      <div className="ml-60">
        <Outlet />
      </div>
    </div>
  );
};


export default Dashboard
