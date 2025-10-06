// src/pages/CourseDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import axios from "axios";
import { getUserEnrollments } from "../api";

const BASE_URL = "http://127.0.0.1:8000";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [alreadyEnrolled, setAlreadyEnrolled] = useState(false);
  const [openSession, setOpenSession] = useState(null);

  useEffect(() => {
    // Fetch course details
    axios
      .get(`${BASE_URL}/courses/${id}`)
      .then((res) => {
        setCourse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching course:", err);
        setError("Course not found");
        setLoading(false);
      });

    // Check enrollment status
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.id) {
      getUserEnrollments(storedUser.id)
        .then((enrollments) => {
          const enrolledIds = enrollments.map((e) => e.course_id);
          if (enrolledIds.includes(Number(id))) {
            setAlreadyEnrolled(true);
          }
        })
        .catch((err) => console.error("Error checking enrollment:", err));
    }
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;
  if (!course) return <p className="text-center mt-10">No course found.</p>;

  // pick first available session week
  const firstSessionWeek = course.syllabus?.find((s) => s.week)?.week || 1;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 ml-56">
        <Header />
        <div className="bg-white rounded-lg shadow p-6 max-w-4xl mx-auto">
          <img
            src={course.image || "/images/placeholder.jpg"}
            alt={course.title}
            className="w-full h-56 object-cover rounded mb-4"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/placeholder.jpg";
            }}
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
                <p><strong>Fee:</strong> {course.fee || "Free"}</p>
                <p><strong>Certificate:</strong> {course.certificate ? "Yes" : "No"}</p>
                <p><strong>Rating:</strong> {course.rating ?? "—"} ⭐</p>
              </div>
            </div>

            <div className="flex flex-col items-end space-y-3">
              <button
                onClick={() =>
                  navigate(
                    alreadyEnrolled
                      ? `/course/${course.id}/session/${firstSessionWeek}`
                      : `/enroll/${course.id}`
                  )
                }
                className={`px-4 py-2 rounded ${
                  alreadyEnrolled
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {alreadyEnrolled ? "Start Course" : "Enroll Now"}
              </button>
              <Link to="/courses" className="text-gray-600 hover:underline text-sm">
                Back to list
              </Link>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-3">Syllabus</h3>
            <div className="space-y-2">
              {course.syllabus?.length ? (
                course.syllabus.map((session, idx) => (
                  <div key={idx} className="border rounded">
                    <button
                      onClick={() => setOpenSession(openSession === idx ? null : idx)}
                      className="w-full text-left px-4 py-2 flex justify-between items-center bg-gray-50"
                    >
                      <span className="font-medium">
                        Session {session.week ?? idx + 1}
                      </span>
                      <span className="text-sm text-gray-600">
                        {openSession === idx ? "-" : "+"}
                      </span>
                    </button>

                    {openSession === idx && (
                      <div className="px-4 py-3 bg-white">
                        <ul className="list-disc pl-5 text-gray-700">
                          {(session.topics || []).map((t, i) => (
                            <li key={i}>{t}</li>
                          ))}
                        </ul>

                        {session.quiz && (
                          <div className="mt-2 p-2 border rounded bg-gray-50">
                            <strong>Quiz:</strong> {session.quiz.question}
                          </div>
                        )}

                        {session.assessment && (
                          <div className="mt-2 p-2 border rounded bg-gray-50">
                            <strong>Assessment:</strong> {session.assessment.question}
                          </div>
                        )}

                        {alreadyEnrolled && session.week && (
                          <button
                            onClick={() =>
                              navigate(`/course/${course.id}/session/${session.week}`)
                            }
                            className="mt-3 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                          >
                            Start Session {session.week}
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-500">Syllabus not provided.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
