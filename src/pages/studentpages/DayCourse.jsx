// src/pages/studentpages/DayCourse.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

export default function DayCourse() {
  const { id } = useParams();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Course Day 1</h2>
      <p className="mb-4 text-gray-700">
        Welcome to Day 1 of Course #{id}. Here you will learn the fundamentals and get started with the course content.
      </p>

      <div className="bg-white p-6 rounded-xl shadow mb-4">
        <h3 className="text-xl font-semibold mb-2">Today's Lesson</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Introduction to the course</li>
          <li>Understanding the objectives</li>
          <li>Getting started with basic exercises</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow mb-4">
        <h3 className="text-xl font-semibold mb-2">Resources</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li><a href="#" className="text-blue-600 hover:underline">PDF: Course Syllabus</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Video: Introduction</a></li>
        </ul>
      </div>

      <Link
        to={`/courses/${id}`}
        className="inline-block mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
      >
        Back to Course Details
      </Link>
    </div>
  );
}
