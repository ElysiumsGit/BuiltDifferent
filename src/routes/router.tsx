import { createBrowserRouter } from "react-router-dom";
import App from "../App"; // Public layout
import Dashboard from "../pages/Dashboard"; // Layout with SideNavigation + Header
import DashboardContent from "../content/DashboardContent";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Login/> },
      { path: "signup", element: <Signup/> },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <DashboardContent/> },
      { path: "wallet", element: <div>Wallet Page</div> },

      { path: "users/list", element: <div>User List Page</div> },
      { path: "users/settings", element: <div>User Settings Page</div> },
      { path: "projects", element: <div>Projects Page</div> },
      { path: "calendar", element: <div>Calendar Page</div> },
      { path: "inbox", element: <div>Inbox Page</div> },
      { path: "chat", element: <div>Chat Page</div> },
      { path: "blog", element: <div>Blog Article Page</div> },
      { path: "files", element: <div>File Manager Page</div> },
      { path: "todo", element: <div>Todo Page</div> },

      { path: "plugins/bootstrap", element: <div>Bootstrap UI Page</div> },
      { path: "plugins/font", element: <div>Font Icon Page</div> },
      { path: "plugins/charts/line", element: <div>Line Chart Page</div> },
      { path: "plugins/charts/pie", element: <div>Pie Chart Page</div> },
      { path: "plugins/datatables", element: <div>Datatables Page</div> },
      { path: "plugins/flatpickr", element: <div>Flatpickr Page</div> },
      { path: "plugins/inputmask", element: <div>Inputmask Page</div> },
      { path: "plugins/jsvectormap", element: <div>Jsvectormap Page</div> },
      { path: "plugins/sortablejs", element: <div>Sortablejs Page</div> },
    ],
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

export default router;
