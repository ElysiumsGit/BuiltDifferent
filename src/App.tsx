import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="flex relative">
      <div className="flex-1 ml-60"> 
        <Outlet />
      </div>
    </div>
  )
}

export default App
