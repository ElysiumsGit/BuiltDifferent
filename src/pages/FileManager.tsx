import { FaStar, FaShareAlt, FaTrash, FaFolder } from "react-icons/fa";

const FileManager = () => {
  const file = [
    { name: "Analytics", color: "text-blue-400" },
    { name: "Assets", color: "text-purple-400" },
    { name: "Marketing", color: "text-purple-300" },
    { name: "New App Design", color: "text-gray-400" },
    { name: "New App Design", color: "text-gray-400" },
    { name: "New App Design", color: "text-gray-400" },
    { name: "New App Design", color: "text-gray-400" },
    { name: "New App Design", color: "text-gray-400" },
    { name: "New App Design", color: "text-gray-400" },
    { name: "New App Design", color: "text-gray-400" },
    { name: "New App Design", color: "text-gray-400" },
  ];

  return (
    <div className="background-primary h-auto p-6 flex flex-col gap-6 text-white">
      <div className="border border-gray-700 w-full rounded-lg p-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 poppins-regular">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold text-cyan-400">
              John Carlo !
            </h2>
            <p className="text-gray-400 text-sm">abierajc0707@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-8">
          <div>
            <p className="text-sm">Google Drive</p>
            <p className="text-gray-400 text-xs">15 GB (Basic Plan)</p>
            <div className="w-32 h-1 bg-gray-700 rounded mt-1">
              <div className="w-10 h-1 bg-blue-500 rounded"></div>
            </div>
          </div>
          <div>
            <p className="text-sm">Dropbox</p>
            <p className="text-gray-400 text-xs">2 GB (Free Plan)</p>
            <div className="w-32 h-1 bg-gray-700 rounded mt-1">
              <div className="w-6 h-1 bg-green-500 rounded"></div>
            </div>
          </div>
          <div>
            <p className="text-sm">FTP Drive</p>
            <p className="text-gray-400 text-xs">30 GB (Regular Plan)</p>
            <div className="w-32 h-1 bg-gray-700 rounded mt-1">
              <div className="w-28 h-1 bg-yellow-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-700 w-full rounded-lg p-6">
        <section className="flex justify-between">
          <div className="flex gap-6 text-sm">
            <button className="flex items-center gap-1">
              <FaStar /> Starred
            </button>
            <button className="flex items-center gap-1">
              <FaShareAlt /> Shared with me
            </button>
            <button className="flex items-center gap-1">
              <FaTrash /> Trash
            </button>
          </div>
          <button className="bg-cyan-500 px-4 py-2 rounded-lg text-sm font-semibold">
            + Create
          </button>
        </section>

        <h3 className="text-lg mb-2">My Folder</h3>
        <p className="text-xs text-gray-400 mb-6">
          Last Update your drive: 11 Aug 2023
        </p>

        <div className="grid grid-cols-5 gap-6">
          {file.map((folder, i) => (
            <div
              key={i}
              className="border border-gray-700 rounded-lg p-4 flex flex-col items-center"
            >
              <FaFolder className={`text-4xl ${folder.color}`} />
              <p className="mt-2">{folder.name}</p>
              <p className="text-xs text-gray-400">215 Files, 50MB</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileManager;
