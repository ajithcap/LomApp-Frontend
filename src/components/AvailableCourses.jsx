// src/pages/studentpages/AvailableCourses.jsx
import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard"; // same folder
import { getAllCourses, checkEnrollment } from "../api"; // one folder up


export default function AvailableCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);

      try {
        // Get logged-in user
        const stored = localStorage.getItem("user");
        if (!stored) throw new Error("No user found in localStorage");

        const parsed = JSON.parse(stored);
        const user = parsed.user || parsed;
        if (!user?.id) throw new Error("Invalid user ID");

        // Fetch all courses
        const allCourses = await getAllCourses();

        // Optional: mark enrolled courses
        const coursesWithEnroll = await Promise.all(
          allCourses.map(async (course) => {
            const res = await checkEnrollment(user.id, course.id);
            return { ...course, enrolled: res.enrolled };
          })
        );

        setCourses(coursesWithEnroll);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading)
    return <div className="text-center mt-20 text-gray-600">Loading courses...</div>;

  if (!courses.length)
    return (
      <div className="text-center mt-20 text-gray-500">
        No courses available.
      </div>
    );

  return (
    <div className="p-6 max-w-6xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Courses</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
