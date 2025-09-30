// src/components/Charts/ProgressCard.jsx
import React from "react";

function ProgressCard({ data = [] }) {
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        No progress data
      </div>
    );
  }

  const total = data.reduce((acc, item) => acc + item.value, 0);
  const completed = data.find((d) => d.name === "Completed Modules")?.value || 0;
  const progressPercent = ((completed / total) * 100).toFixed(0);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          {/* Background circle */}
          <path
            className="text-gray-200"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          {/* Progress circle */}
          <path
            className="text-blue-500"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray={`${progressPercent}, 100`}
            fill="none"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-lg">
          {progressPercent}%
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600">Course Progress</p>
    </div>
  );
}

export default ProgressCard;
