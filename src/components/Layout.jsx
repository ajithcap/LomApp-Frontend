import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex">
      {/* Sidebar fixed on the left */}
      <div className="fixed top-0 left-0 h-screen w-64 bg-gray-800">
        <Sidebar />
      </div>

      {/* Main content shifted right */}
      <div className="ml-64 flex-1 min-h-screen bg-gray-100 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
