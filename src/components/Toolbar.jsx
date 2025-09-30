// src/components/Toolbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Toolbar({ stats }) {
  const navigate = useNavigate();

  const statItems = [
    { label: "Total Leads", value: stats?.total_leads ?? 0 },
    { label: "Overall Enrolled", value: stats?.overall_enrolled ?? 0 },
    { label: "Courses Taken", value: stats?.courses_taken ?? 0 },
    { label: "Available Courses", value: stats?.available_courses ?? 0 },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6 flex gap-6 justify-between">
      {/* Normal Stats */}
      {statItems.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-gray-50 px-6 py-3 rounded-md shadow-sm"
        >
          <span className="text-xl font-bold text-blue-600">{stat.value}</span>
          <span className="text-gray-600">{stat.label}</span>
        </div>
      ))}

      {/* Faculty View Button */}
      <div
        onClick={() => navigate("/faculty-view")}
        className="flex flex-col items-center bg-yellow-100 px-6 py-3 rounded-md shadow-sm cursor-pointer hover:bg-yellow-200 transition"
      >
        <span className="text-lg font-semibold text-yellow-800">Faculty View</span>
        <span className="text-gray-600 text-sm">View latest updates</span>
      </div>
    </div>
  );
}

export default Toolbar;
