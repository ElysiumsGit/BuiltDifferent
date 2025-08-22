// router.tsx
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import App from "../App";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   
    children: [
      {
        index: true,  
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "*",
        element: <div>Not Found</div>
      }
    ]
  }
]);

export default router;
