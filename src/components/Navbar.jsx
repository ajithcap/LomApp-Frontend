// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white px-6 py-3 shadow-md flex justify-between items-center z-50">
      {/* Logo / Brand */}
      <div className="text-lg font-bold">
        <Link to="/">MyLMS</Link>
      </div>

      {/* Menu Links */}
      <ul className="flex gap-6">
        <li>
          <Link to="/" className="hover:text-gray-200">Home</Link>
        </li>
        <li>
          <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
        </li>
        <li>
          <Link to="/courses" className="hover:text-gray-200">Courses</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-200">About Us</Link>
        </li>
      </ul>

      {/* Right Side (Login/Profile) */}
      <div>
        <Link
          to="/login"
          className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
