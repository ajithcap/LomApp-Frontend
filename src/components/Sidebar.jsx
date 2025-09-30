// src/components/Sidebar.jsx
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); 
  };

  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white flex flex-col p-5">
      {/* Logo / App Name */}
      <h1 className="text-2xl font-bold mb-8">LomApp</h1>

      {/* Sidebar Menu */}
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard" className="hover:bg-gray-700 px-3 py-2 rounded-md transition">
          Dashboard
        </Link>
        <Link to="/courses" className="hover:bg-gray-700 px-3 py-2 rounded-md transition">
          Courses
        </Link>
        <Link to="/profile" className="hover:bg-gray-700 px-3 py-2 rounded-md transition">
          Profile
        </Link>
        <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md transition">
          About Us
        </Link>
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-auto bg-red-600 px-3 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
