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
    <div className="card hover:shadow-xl transition-transform transform hover:scale-105 bg-white p-4 rounded-xl">
      {/* Image */}
      <img
        src={
          course.image
            ? course.image.startsWith("http")
              ? course.image
              : process.env.PUBLIC_URL + course.image
            : process.env.PUBLIC_URL + "/placeholder.jpg"
        }
        alt={course.title}
        className="w-full h-48 object-cover rounded-t-xl mb-4"
      />

      {/* Title and Description */}
      <h3 className="font-bold text-xl mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-2">{course.description}</p>

      {/* Fee and Rating */}
      <div className="flex justify-between items-center text-sm font-medium mb-2">
        <span>{course.fee ? `₹${course.fee}` : "Free"}</span>
        <span>{course.rating ? `${course.rating} ⭐` : "No rating"}</span>
      </div>

      {/* Syllabus */}
      {course.syllabus && course.syllabus.length > 0 && (
        <div className="mb-2">
          <h4 className="font-semibold text-gray-800">Syllabus:</h4>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {course.syllabus.map((week, idx) => (
              <li key={idx}>
                <strong>Week {week.week}:</strong>{" "}
                {week.topics?.join(", ") || "No topics listed"}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Learning Outcomes */}
      {course.learningOutcomes && course.learningOutcomes.length > 0 && (
        <div className="mb-2">
          <h4 className="font-semibold text-gray-800">Learning Outcomes:</h4>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {course.learningOutcomes.map((lo, idx) => (
              <li key={idx}>{lo}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Enroll / Start button */}
      <button
        onClick={() => {
          if (enrolled) {
            const firstWeek = course.syllabus?.[0]?.week || 1;
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
