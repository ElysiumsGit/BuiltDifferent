import { FiBell, FiGlobe, FiMoon, FiSettings } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import TextFieldSearch from "../TextField/TextFieldSearch";
import { CgMenuGridO } from "react-icons/cg";

const Header = () => {
  return (
    <header className="flex foreground-primary text-white px-6 py-3 shadow-md justify-between">
      <section className="flex items-center gap-4 w-5xl">   
        <CgMenuGridO size={30}/>
        <TextFieldSearch/>
      </section>
      <section className="flex items-center space-x-6">
        <FiBell size={20} className="icon-color"/>
        <div className="h-5 border-l border-gray-500"></div>
        <FiGlobe size={20} className="icon-color"/>
        <FiMoon size={20} className="icon-color"/>
        <FiSettings size={20} className="icon-color"/>
        <div className="h-5 border-l border-gray-500"></div>
        <div className="flex items-center space-x-2">
          <FaUserCircle size={32} className="text-gray-300" />
          <span className="font-medium">John Carlo Abanes</span>
        </div>
      </section>
    </header>
  );
};

export default Header;
