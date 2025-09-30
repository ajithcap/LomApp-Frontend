// src/pages/studentpages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Toolbar from "../../components/Toolbar";
import AttendanceChart from "../../components/Charts/AttendanceChart";
import ProgressCard from "../../components/Charts/ProgressCard";
import PerformanceChart from "../../components/Charts/PerformanceChart";
import { useTheme } from "../../context/ThemeContext";
import { getDashboardMetrics } from "../../api";

function Dashboard() {
  const { darkMode } = useTheme();
  const [toolbarStats, setToolbarStats] = useState(null);
  const [userName, setUserName] = useState("Student");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stored = localStorage.getItem("user");
        if (!stored) return;

        const user = JSON.parse(stored);
        setUserName(user.name || "Student");

        // ✅ get metrics directly from backend
        const metrics = await getDashboardMetrics(user.id, "student");
        setToolbarStats(metrics);
      } catch (err) {
        console.error("Error loading dashboard:", err);
      }
    };

    fetchData();
  }, []);

  if (!toolbarStats) {
    return <div className="ml-64 p-6">Loading Dashboard...</div>;
  }

  return (
    <div
      className={`flex h-screen ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Header + Toolbar */}
        <div className="sticky top-0 z-30">
          <Header />
          <div
            className="p-4 rounded-b-2xl shadow-md"
            style={{
              background: darkMode
                ? "linear-gradient(90deg, #3A3A3A, #2C2C2C)"
                : "linear-gradient(90deg, #F5D2D2, #F8F7BA, #BDE3C3, #A3CCDA)",
            }}
          >
            <div className="mb-4 text-lg font-semibold">
              Welcome,{" "}
              <span className="text-purple-700 dark:text-yellow-400">
                {userName}
              </span>{" "}
              👋
            </div>
            {/* ✅ Pass API stats directly */}
            <Toolbar stats={toolbarStats} />
          </div>
        </div>

        {/* Dashboard body scrollable */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Top Row - Progress + Attendance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Progress Card */}
            <div
              className="rounded-3xl p-6 shadow-xl transform transition hover:scale-105"
              style={{
                background: darkMode ? "#2F4F4F" : "#F5D2D2",
              }}
            >
              <ProgressCard data={toolbarStats.progressData || []} />
            </div>

            {/* Attendance Chart */}
            <div
              className="rounded-3xl p-6 shadow-xl transform transition hover:scale-105"
              style={{
                background: darkMode ? "#556B2F" : "#F8F7BA",
              }}
            >
              <AttendanceChart data={toolbarStats.attendanceData || []} />
            </div>
          </div>

          {/* Performance Chart */}
          <div
            className="rounded-3xl p-6 shadow-xl transform transition hover:scale-105"
            style={{
              background: darkMode ? "#2E8B57" : "#BDE3C3",
            }}
          >
            <PerformanceChart data={toolbarStats.performanceData || []} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
