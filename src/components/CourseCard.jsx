// src/components/CourseCard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkEnrollment } from "../api";

function CourseCard({ course }) {
  const navigate = useNavigate();
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) return;

    let user;
    try {
      user = JSON.parse(stored).user || JSON.parse(stored);
    } catch {
      console.error("Error parsing user");
      return;
    }

    const userId = user?.id;
    if (!userId) return;

    checkEnrollment(userId, course.id)
      .then((res) => setEnrolled(res.enrolled))
      .catch((err) => console.error("Check enrollment error:", err));
  }, [course.id]);

  return (
    <div className="card hover:shadow-xl transition-transform transform hover:scale-105">
      {/* Clickable Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-40 object-cover rounded mb-4 cursor-pointer"
        onClick={() => navigate(`/courses/${course.id}`)}
        onError={(e) => { e.target.onerror = null; e.target.src = "/images/placeholder.jpg"; }}
      />

      <h4 className="font-semibold text-lg mb-1">{course.title}</h4>
      <p className="text-gray-600 mb-2">{course.description}</p>
      <div className="flex justify-between items-center text-sm font-medium">
        <span>{course.fee || "Free"}</span>
        <span>{course.rating ? `${course.rating} ⭐` : "No rating"}</span>
      </div>

      <button
  onClick={() => {
    if (enrolled) {
      const firstWeek = course.syllabus?.[0]?.week || 1; // first session
      navigate(`/course/${course.id}/session/${firstWeek}`);
    } else {
      navigate(`/enroll/${course.id}`);
    }
  }}
  className={`mt-2 px-4 py-2 rounded w-full ${
    enrolled
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-green-600 text-white hover:bg-green-700"
  }`}
>
  {enrolled ? "Start Course" : "Enroll Now"}
</button>


    </div>
  );
}

export default CourseCard;
