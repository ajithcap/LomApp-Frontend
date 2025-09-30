// src/pages/Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [activeRole, setActiveRole] = useState("student");
  const navigate = useNavigate();

  // Role glow colors
  const roleGlow = {
    student: "rgba(59,130,246,0.4)", // Blue
    admin: "rgba(139,92,246,0.4)",   // Purple
  };

  // Card lighter glow colors
  const cardGlow = {
    student: "rgba(147,197,253,0.3)", // Light blue
    admin: "rgba(203,164,255,0.3)",   // Light purple
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F5F7FA] to-[#E4E7EB] flex flex-col items-center justify-center px-6">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 text-center drop-shadow-md">
        Welcome to <span className="text-blue-600">LMS Portal</span>
      </h1>
      <p className="text-gray-700 text-lg md:text-xl mb-10 text-center max-w-xl">
        A professional learning management system for students and admins. Choose your role to get started.
      </p>

      {/* Role Switch */}
      <div className="flex space-x-6 mb-12">
        {/* Student Button */}
        <button
          onClick={() => setActiveRole("student")}
          className={`px-6 py-2 rounded-lg font-medium transition transform ${
            activeRole === "student"
              ? `bg-blue-500 text-white shadow-[0_0_15px_${roleGlow.student}] scale-105`
              : "bg-white text-blue-500 border border-blue-500 hover:bg-blue-100"
          }`}
        >
          Student
        </button>

        {/* Admin Button */}
        <button
          onClick={() => setActiveRole("admin")}
          className={`px-6 py-2 rounded-lg font-medium transition transform ${
            activeRole === "admin"
              ? `bg-purple-500 text-white shadow-[0_0_15px_${roleGlow.admin}] scale-105`
              : "bg-white text-purple-500 border border-purple-500 hover:bg-purple-100"
          }`}
        >
          Admin
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-8">
        {["Login", "Register"].map((action) => (
          <div
            key={action}
            onClick={() =>
              navigate(
                activeRole === "student"
                  ? `/student/${action.toLowerCase()}`
                  : `/admin/${action.toLowerCase()}`
              )
            }
            className={`rounded-2xl p-10 text-center shadow-2xl transition-all w-96 relative overflow-hidden cursor-pointer hover:scale-105`}
          >
            {/* Lighter Glow Background */}
            <div
              className={`absolute inset-0 blur-2xl opacity-30`}
              style={{
                backgroundColor:
                  activeRole === "student" ? cardGlow.student : cardGlow.admin,
              }}
            ></div>

            {/* Foreground Card */}
            <div className="relative z-10">
              <h2
                className={`text-3xl font-extrabold mb-4 tracking-wide uppercase drop-shadow-md ${
                  activeRole === "student" ? "text-blue-700" : "text-purple-700"
                }`}
              >
                {action}
              </h2>
              <p className="text-gray-600 mb-6">
                {activeRole === "student"
                  ? action === "Login"
                    ? "Access your courses and dashboard"
                    : "Create your learning account"
                  : action === "Login"
                  ? "Manage students, faculty, and reports"
                  : "Add new admins and faculty"}
              </p>
              <button
                className={`px-6 py-2 rounded-lg font-semibold text-white transition shadow-md ${
                  activeRole === "student"
                    ? "bg-blue-600 hover:bg-blue-700 shadow-[0_0_8px_rgba(59,130,246,0.3)]"
                    : "bg-purple-600 hover:bg-purple-700 shadow-[0_0_8px_rgba(139,92,246,0.3)]"
                }`}
              >
                {activeRole} {action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
