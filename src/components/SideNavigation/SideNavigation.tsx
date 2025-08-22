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

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer hover:bg-[#2e2e2e] px-4 py-3 transition"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3 text-sm">
          {icon}
          <span className="poppins-regular text-md">{label}</span>
        </div>
        {children ? (open ? <IoIosArrowDown /> : <IoIosArrowForward />) : null}
      </div>
      {open && children && <div className="ml-8">{children}</div>}
    </div>
  );
};

const SideNavigation: React.FC = () => {
  return (
    <div className="w-full h-screen foreground-primary text-white border-r border-[#464646] overflow-y-auto">
      <section className="flex foreground-primary text-white px-6 py-4 shadow-md justify-between border-b border-b-[#464646] ">
        <section className="flex items-center gap-4 w-5xl">   
            <h1 className='poppins-semibold text-lg'>BUILT DIFFERENT</h1>
        </section>
    </section>

      <div className="text-xs text-gray-500 uppercase px-6 mt-4 mb-2">Workspace</div>
      <SidebarItem label="Dashboard" icon={<FaHome />} />
      <SidebarItem label="My Wallet" icon={<FaWallet />} />

      <div className="text-xs text-purple-400 uppercase px-6 mt-4 mb-2">Apps</div>
      <SidebarItem label="Users" icon={<FaUsers />}>
        <div className="text-sm py-1">User List</div>
        <div className="text-sm py-1">User Settings</div>
      </SidebarItem>
      <SidebarItem label="My Project's" icon={<FaCogs />} />
      <SidebarItem label="My Calendar" icon={<FaCalendarAlt />} />
      <SidebarItem label="Inbox" icon={<FaInbox />} />
      <SidebarItem label="Chat" icon={<FaComments />} />
      <SidebarItem label="Blog Article" icon={<FaFileAlt />} />
      <SidebarItem label="File Manager" icon={<FaFolderOpen />} />
      <SidebarItem label="Todo List" icon={<FaTasks />} />

      {/* Plugins */}
      <div className="text-xs text-pink-400 uppercase px-6 mt-4 mb-2">Plugins</div>
      <SidebarItem label="Bootstrap UI" icon={<FaCogs />} />
      <SidebarItem label="Font icon" icon={<FaFont />} />
      <SidebarItem label="Charts" icon={<FaChartBar />}>
        <div className="text-sm py-1">Line Chart</div>
        <div className="text-sm py-1">Pie Chart</div>
      </SidebarItem>
      <SidebarItem label="Datatables" icon={<FaTable />} />
      <SidebarItem label="Flatpickr" icon={<FaCalendarAlt />} />
      <SidebarItem label="Inputmask" icon={<FaFont />} />
      <SidebarItem label="Jsvectormap" icon={<FaChartBar />} />
      <SidebarItem label="Sortablejs" icon={<FaCogs />} />
    </div>
  );
};

export default SideNavigation;
