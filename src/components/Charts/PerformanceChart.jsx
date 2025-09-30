import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const quizData = [
  { test: "Quiz 1", score: 78 },
  { test: "Quiz 2", score: 85 },
];

const assessmentData = [
  { test: "Assessment 1", score: 92 },
  { test: "Assessment 2", score: 88 },
  { test: "Assessment 3", score: 82 },
  { test: "Assessment 4", score: 91 },
];

function PerformanceChart() {
  const [selected, setSelected] = useState("quiz");
  const data = selected === "quiz" ? quizData : assessmentData;

  return (
    <div className="bg-white p-4 rounded shadow max-w-3xl mx-auto">
      {/* Header + Buttons */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Test Scores</h3>
        <div className="space-x-2">
          <button
            onClick={() => setSelected("quiz")}
            className={`px-3 py-1 rounded ${
              selected === "quiz"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Quizzes
          </button>
          <button
            onClick={() => setSelected("assessment")}
            className={`px-3 py-1 rounded ${
              selected === "assessment"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Assessments
          </button>
        </div>
      </div>

      {/* Chart Container */}
      <div className="w-full h-[220px]"> {/* reduced height */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="test" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="score" fill="#60a5fa" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PerformanceChart;
