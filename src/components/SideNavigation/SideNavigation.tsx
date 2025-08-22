import React, { useState } from "react";
import {
  FaHome,
  FaWallet,
  FaUsers,
  FaCalendarAlt,
  FaInbox,
  FaComments,
  FaFileAlt,
  FaFolderOpen,
  FaTasks,
  FaCogs,
  FaChartBar,
  FaFont,
  FaTable,
} from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import type { SidebarItemProps } from "../../types/TypeTextField";

import { Link } from "react-router-dom";

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon, children, to }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (children) {
      setOpen(!open);
    }
  };

  return (
    <div>
      <Link to={to ?? ""} className="poppins-regular text-md">
      <div
        className={`flex items-center justify-between cursor-pointer hover:bg-[#2e2e2e] px-4 py-3 transition`}
        onClick={handleClick}
      >
        <div className="flex items-center gap-3 text-sm">
          {icon}
            <span className="poppins-regular text-md">{label}</span>
        </div>
        {children ? (open ? <IoIosArrowDown /> : <IoIosArrowForward />) : null}
      </div>
      {open && children && <div className="ml-8">{children}</div>}
      </Link>
    </div>
  );
};

const SideNavigation: React.FC = () => {
  return (
    <div className="w-full h-screen foreground-primary text-white border-r border-[#464646] overflow-y-auto">
      <section className="flex foreground-primary text-white px-6 py-4 shadow-md justify-between border-b border-b-[#464646]">
        <section className="flex items-center gap-4 w-5xl">
          <h1 className="poppins-semibold text-lg">BUILT DIFFERENT</h1>
        </section>
      </section>

      <div className="text-xs text-gray-500 uppercase px-6 mt-4 mb-2">Workspace</div>
      <SidebarItem label="Dashboard" icon={<FaHome />} to="/dashboard" />
      <SidebarItem label="My Wallet" icon={<FaWallet />} to="wallet" />
      <div className="text-xs text-purple-400 uppercase px-6 mt-4 mb-2">Apps</div>
      <SidebarItem label="Users" icon={<FaUsers />}>
        <div className="text-sm py-1">
          <Link to="users/list">User List</Link>
        </div>
        <div className="text-sm py-1">
          <Link to="users/settings">User Settings</Link>
        </div>
      </SidebarItem>
      <SidebarItem label="My Project's" icon={<FaCogs />} to="projects" />
      <SidebarItem label="My Calendar" icon={<FaCalendarAlt />} to="calendar" />
      <SidebarItem label="Inbox" icon={<FaInbox />} to="inbox" />
      <SidebarItem label="Chat" icon={<FaComments />} to="chat" />
      <SidebarItem label="Blog Article" icon={<FaFileAlt />} to="blog" />
      <SidebarItem label="File Manager" icon={<FaFolderOpen />} to="files" />
      <SidebarItem label="Todo List" icon={<FaTasks />} to="todo" />

      {/* Plugins */}
      <div className="text-xs text-pink-400 uppercase px-6 mt-4 mb-2">Plugins</div>
      <SidebarItem label="Bootstrap UI" icon={<FaCogs />} to="plugins/bootstrap" />
      <SidebarItem label="Font icon" icon={<FaFont />} to="plugins/font" />
      <SidebarItem label="Charts" icon={<FaChartBar />}>
        <div className="text-sm py-1">
          <Link to="/plugins/charts/line">Line Chart</Link>
        </div>
        <div className="text-sm py-1">
          <Link to="/plugins/charts/pie">Pie Chart</Link>
        </div>
      </SidebarItem>
      <SidebarItem label="Datatables" icon={<FaTable />} to="plugins/datatables" />
      <SidebarItem label="Flatpickr" icon={<FaCalendarAlt />} to="plugins/flatpickr" />
      <SidebarItem label="Inputmask" icon={<FaFont />} to="plugins/inputmask" />
      <SidebarItem label="Jsvectormap" icon={<FaChartBar />} to="plugins/jsvectormap" />
      <SidebarItem label="Sortablejs" icon={<FaCogs />} to="plugins/sortablejs" />
    </div>
  );
};


export default SideNavigation;
