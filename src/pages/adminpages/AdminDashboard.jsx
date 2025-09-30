// src/pages/adminpages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Toolbar from "../../components/Toolbar";
import { useTheme } from "../../context/ThemeContext";
import AttendanceChart from "../../components/Charts/AttendanceChart";
import PerformanceChart from "../../components/Charts/PerformanceChart";
import ProgressCard from "../../components/Charts/ProgressCard";

function AdminDashboard({ user }) {
  const { darkMode } = useTheme();
  const [toolbarStats, setToolbarStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchMetrics = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:8000/dashboard/metrics?role=admin&user_id=${user.id}`
        );
        const data = await res.json();

        setToolbarStats({
          totalLeads: data.total_leads,
          overallEnrolled: data.overall_enrolled,
          coursesTaken: data.courses_taken,
          availableCourses: data.available_courses,
        });        
      } catch (error) {
        console.error("Error fetching metrics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, [user]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!toolbarStats) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        Failed to load data
      </div>
    );
  }

  // Example chart data (replace with API later)
  const progressOverview = [
    { name: "Completed", value: 120 },
    { name: "In Progress", value: 80 },
    { name: "Not Started", value: 50 },
  ];

  const enrollmentData = [
    { name: "Course A", value: 40 },
    { name: "Course B", value: 25 },
    { name: "Course C", value: 20 },
    { name: "Course D", value: 15 },
  ];

  const studentPerformance = [
    { test: "Average Score", score: 75 },
    { test: "High Achievers", score: 20 },
    { test: "Low Achievers", score: 5 },
  ];

  return (
    <div
      className={`flex h-screen ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Toolbar */}
        <div className="p-4">
          <Toolbar stats={toolbarStats} />
        </div>

        {/* Dashboard Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <h2 className="text-2xl font-bold">Admin Dashboard 📊</h2>

          {/* Top Row - Student Progress + Enrollment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`shadow-lg rounded-2xl p-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <ProgressCard data={progressOverview} />
            </div>
            <div className={`shadow-lg rounded-2xl p-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <AttendanceChart data={enrollmentData} />
            </div>
          </div>

          {/* Performance Overview */}
          <div className={`shadow-lg rounded-2xl p-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <PerformanceChart data={studentPerformance} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
