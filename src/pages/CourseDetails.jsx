// src/pages/CourseDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";   
import Header from "../components/Header";     
import courses from "../data/courses";   
import { getUserEnrollments } from "../api";

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === parseInt(id, 10));
  const [openWeek, setOpenWeek] = useState(null);
  const [alreadyEnrolled, setAlreadyEnrolled] = useState(false);

  useEffect(() => {
    if (!course) return;

    const stored = localStorage.getItem("user"); // use "user"
    if (!stored) return;

    let parsed;
    try {
      parsed = JSON.parse(stored);
    } catch {
      return;
    }

    const userId = parsed?.id;
    if (!userId) return;

    // Fetch enrolled courses for this user
    getUserEnrollments(userId)
      .then((ids) => setAlreadyEnrolled(ids.includes(course.id)))
      .catch((err) => console.error("Error fetching enrollments:", err));
  }, [course]);

  if (!course) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 ml-56">
          <Header />
          <div className="p-6">
            <h2 className="text-xl font-bold">Course not found!</h2>
            <Link to="/courses" className="text-blue-600 hover:underline">
              ← Back to Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 ml-56">
        <Header />
        <div className="bg-white rounded-lg shadow p-6 max-w-4xl mx-auto">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-56 object-cover rounded mb-4"
            onError={(e) => { e.target.onerror = null; e.target.src = "/images/placeholder.jpg"; }}
          />

          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">{course.title}</h2>
              <p className="text-gray-700 mb-4">{course.description}</p>

              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Instructor:</strong> {course.instructor}</p>
                <p><strong>Duration:</strong> {course.duration}</p>
                <p><strong>Mode:</strong> {course.mode || "N/A"}</p>
                <p><strong>Start date:</strong> {course.startDate || "TBA"}</p>
                <p><strong>Seats:</strong> {course.seats ?? "N/A"}</p>
                <p><strong>Language:</strong> {course.language || "N/A"}</p>
                <p><strong>Fee:</strong> {course.fee}</p>
                <p><strong>Certificate:</strong> {course.certificate ? "Yes" : "No"}</p>
                <p><strong>Rating:</strong> {course.rating ?? "—"} {course.rating ? "⭐" : ""}</p>
              </div>
            </div>

            <div className="flex flex-col items-end space-y-3">
              <button
                onClick={() => navigate(`/enroll/${course.id}`)}
                disabled={alreadyEnrolled}
                className={`px-4 py-2 rounded ${
                  alreadyEnrolled
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {alreadyEnrolled ? "Already Enrolled" : "Enroll Now"}
              </button>
              <Link to="/courses" className="text-gray-600 hover:underline text-sm">Back to list</Link>
            </div>
          </div>

          {/* Syllabus */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3">Syllabus</h3>
            <div className="space-y-2">
              {course.syllabus?.length ? course.syllabus.map((week, idx) => (
                <div key={idx} className="border rounded">
                  <button
                    onClick={() => setOpenWeek(openWeek === idx ? null : idx)}
                    className="w-full text-left px-4 py-2 flex justify-between items-center bg-gray-50"
                  >
                    <span className="font-medium">Week {week.week}</span>
                    <span className="text-sm text-gray-600">{openWeek === idx ? "-" : "+"}</span>
                  </button>
                  {openWeek === idx && (
                    <div className="px-4 py-3 bg-white">
                      <ul className="list-disc pl-5 text-gray-700">
                        {week.topics.map((t, i) => <li key={i}>{t}</li>)}
                      </ul>

                      {/* Link to DayCourse only if user enrolled */}
                      {alreadyEnrolled && (
                        <Link
                          to={`/course/${course.id}/day${week.week}`}
                          className="block mt-2 text-blue-600 hover:underline"
                        >
                          Go to Day {week.week} content
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              )) : <p className="text-gray-500">Syllabus not provided.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
