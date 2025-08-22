import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import SideNavigation from "../components/SideNavigation/SideNavigation";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="h-16 bg-[#1e1e1e] fixed top-0 left-0 right-0 z-20">
        <Header />
      </header>

      <div className="flex flex-1 pt-16">
        <aside className="w-60 bg-[#1e1e1e] fixed top-16 left-0 bottom-0">
          <SideNavigation />
        </aside>

        <main className="flex-1 ml-60 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
