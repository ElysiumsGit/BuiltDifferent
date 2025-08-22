import { FiPlus, FiFilter } from "react-icons/fi";
import { MdSlideshow } from "react-icons/md";

const BreadCrumbs = () => {
  return (
    <div className="text-white foreground-primary flex justify-between border-b border-b-[#464646]">
      <nav className="flex items-center gap-2 px-6 py-4 text-sm text-gray-400 poppins-regular">
        <span className="text-teal-400 cursor-pointer  ">Home</span>
        <span>/</span>
        <span className="text-teal-400 cursor-pointer">Pages</span>
        <span>/</span>
        <span className="text-white">Dashboard</span>
      </nav>

      <div className="flex justify-between items-center px-6 py-3">
        <div className="flex items-center gap-6">
          <button className="text-teal-400 hover:text-teal-300">
            <FiPlus size={20} />
          </button>
          <button className="text-teal-400 hover:text-teal-300">
            <FiFilter size={20} />
          </button>
          <div className="h-5 border-l border-gray-500"></div>
          <MdSlideshow size={20} />
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
