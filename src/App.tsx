import { Outlet } from "react-router-dom"
import SideNavigation from "./components/SideNavigation/SideNavigation"

function App() {
  return (
    <div className="flex relative">
      <div className="w-60 fixed top-0 left-0 h-screen z-50">
        <SideNavigation/>
      </div>
      <div className="flex-1 ml-60"> 
        <Outlet />
      </div>
    </div>
  )
}

export default App
