// src/components/CoursePage.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCourseById, checkEnrollment } from "../api";
import ProtectedCourse from "./ProtectedCourse";

export default function CoursePage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const stored = localStorage.getItem("user");
        if (!stored) return;

        let parsed;
        try {
          parsed = JSON.parse(stored);
        } catch {
          console.error("Error parsing user");
          return;
        }

        const user = parsed.user || parsed;
        if (!user?.id) return;

        const courseData = await getCourseById(courseId);
        setCourse(courseData);

        const enrollment = await checkEnrollment(user.id, courseId);
        setEnrolled(enrollment.enrolled);
      } catch (err) {
        console.error("Error fetching course:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  if (loading)
    return <div className="text-center mt-10 text-gray-600">Loading course...</div>;

  if (!course)
    return <div className="text-center mt-10 text-red-600">Course not found.</div>;

  return (
    <ProtectedCourse>
      <div className="p-6 max-w-4xl mx-auto bg-white rounded shadow-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:gap-6 mb-6">
          <img
            src={
              course.image
                ? course.image.startsWith("http")
                  ? course.image
                  : process.env.PUBLIC_URL + course.image
                : "/placeholder.jpg"
            }
            alt={course.title}
            className="w-full md:w-64 h-48 object-cover rounded mb-4 md:mb-0"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <p className="text-gray-700 mb-2">{course.description}</p>
            <div className="text-gray-600 space-y-1">
              <p><strong>Instructor:</strong> {course.instructor || "TBA"}</p>
              <p><strong>Duration:</strong> {course.duration || "TBA"}</p>
              <p><strong>Mode:</strong> {course.mode || "TBA"}</p>
              <p><strong>Fee:</strong> {course.fee || "Free"}</p>
              <p><strong>Start Date:</strong> {course.startDate || "TBA"}</p>
              <p><strong>Seats:</strong> {course.seats ?? "N/A"}</p>
              <p><strong>Language:</strong> {course.language || "N/A"}</p>
              <p><strong>Certificate:</strong> {course.certificate ? "Yes ✅" : "No ❌"}</p>
              <p><strong>Rating:</strong> {course.rating ? `${course.rating} ⭐` : "—"}</p>
            </div>

            <button
              onClick={() => {
                if (enrolled) {
                  const firstWeek = course.syllabus?.[0]?.week || 1;
                  navigate(`/course/${course.id}/session/${firstWeek}`);
                } else {
                  navigate(`/enroll/${course.id}`);
                }
              }}
              className={`mt-4 px-4 py-2 rounded w-full ${
                enrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              {enrolled ? "Start Course" : "Enroll Now"}
            </button>
          </div>
        </div>

        {/* Syllabus */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Syllabus</h2>
          {course.syllabus?.length ? (
            <div className="space-y-3">
              {course.syllabus.map((week) => (
                <div key={week.week} className="p-3 border rounded bg-gray-50">
                  <h3 className="font-semibold mb-1">Week {week.week}</h3>
                  <p className="text-gray-700 mb-1">Topics: {week.topics.join(", ")}</p>
                  {week.quiz && <p className="text-blue-600">Quiz: {week.quiz.question}</p>}
                  {week.assessment && (
                    <p className="text-green-600">Assessment: {week.assessment.question}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Syllabus not provided.</p>
          )}
        </div>

        {/* Learning Outcomes */}
        {course.learningOutcomes?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Learning Outcomes</h2>
            <ul className="list-disc pl-5 text-gray-700">
              {course.learningOutcomes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Prerequisites */}
        {course.prerequisites?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Prerequisites</h2>
            <ul className="list-disc pl-5 text-gray-700">
              {course.prerequisites.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ProtectedCourse>
  );
}
