// src/pages/Courses.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";

function Courses() {
  return (
    <div className="flex h-screen pt-16"> {/* push content below navbar */}
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64 overflow-y-auto">
        <Header />
        <h2 className="text-2xl font-bold mb-6">Available Courses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
