// src/components/CourseCard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkEnrollment } from "../api";

function CourseCard({ course }) {
  const navigate = useNavigate();
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    // Get user from localStorage
    const stored = localStorage.getItem("user"); // using "user" consistently
    if (!stored) return;

    let parsed;
    try {
      parsed = JSON.parse(stored);
    } catch {
      return;
    }

    const userId = parsed?.id;
    if (!userId) return;

    // Validate course ID
    if (typeof course.id !== "number") {
      console.error("Invalid course ID:", course.id);
      return;
    }

    // Check if the user is already enrolled
    checkEnrollment(userId, course.id)
      .then(res => setEnrolled(res.enrolled))
      .catch(err => console.error("Error checking enrollment:", err));
  }, [course.id]);

  return (
    <div className="card hover:shadow-xl transition-transform transform hover:scale-105">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-40 object-cover rounded mb-4"
        onError={(e) => { e.target.onerror = null; e.target.src = "/images/placeholder.jpg"; }}
      />
      <h4 className="font-semibold text-lg mb-1">{course.title}</h4>
      <p className="text-gray-600 mb-2">{course.description}</p>
      <div className="flex justify-between items-center text-sm font-medium">
        <span>{course.fee || "Free"}</span>
        <span>{course.rating ? `${course.rating} ⭐` : "No rating"}</span>
      </div>

      <button
        disabled={enrolled}
        onClick={() => navigate(`/enroll/${course.id}`)}
        className={`mt-2 px-4 py-2 rounded w-full ${
          enrolled
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-green-600 text-white hover:bg-green-700"
        }`}
      >
        {enrolled ? "Already Enrolled" : "Enroll Now"}
      </button>
    </div>
  );
}

export default CourseCard;
