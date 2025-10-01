// src/pages/studentpages/SessionCourse.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import courses from "../../data/courses";
import { saveProgress } from "../../api";

export default function SessionCourse() {
  const { courseId, sessionId } = useParams();
  const course = courses.find((c) => c.id === Number(courseId));
  const session = course?.syllabus.find((s) => s.week === Number(sessionId));

  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [assessmentText, setAssessmentText] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  if (!course) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold">Course not found</h2>
        <Link to="/courses" className="text-blue-600 hover:underline">
          ← Back to Courses
        </Link>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold">Session not found</h2>
        <Link to={`/courses/${course.id}`} className="text-blue-600 hover:underline">
          ← Back to Course Details
        </Link>
      </div>
    );
  }

  const quiz = session.quiz;
  const assessment = session.assessment;

  const handleQuizSubmit = async () => {
    const stored = localStorage.getItem("user");
    if (!stored) return;
    const user = JSON.parse(stored).user || JSON.parse(stored);

    const score = quizAnswer === quiz?.answer ? 100 : 0;
    setQuizSubmitted(true);

    try {
      await saveProgress({
        user_id: user.id,
        course_id: course.id,
        session_id: session.week,
        completed: true,
        quiz_score: score,
      });
      setStatusMessage(`Quiz submitted! Score: ${score}`);
    } catch (err) {
      setStatusMessage("Error saving quiz progress.");
    }
  };

  const handleAssessmentSubmit = async () => {
    const stored = localStorage.getItem("user");
    if (!stored) return;
    const user = JSON.parse(stored).user || JSON.parse(stored);

    try {
      await saveProgress({
        user_id: user.id,
        course_id: course.id,
        session_id: session.week,
        completed: true,
        assessment_status: "submitted",
        assessment_text: assessmentText,
      });
      setStatusMessage("Assessment submitted successfully!");
    } catch (err) {
      setStatusMessage("Error submitting assessment.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        {course.title} - Session {session.week}
      </h2>

      {/* Study Material */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h3 className="text-xl font-semibold mb-3">Study Material</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          {(session.topics || []).map((topic, idx) => (
            <li key={idx}>{topic}</li>
          ))}
        </ul>
      </div>

      {/* Quiz */}
      {quiz && (
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h3 className="text-xl font-semibold mb-3">Quiz</h3>
          <p className="mb-3">{quiz.question}</p>
          <div className="space-y-2">
            {(quiz.options || []).map((opt, i) => (
              <label key={i} className="block">
                <input
                  type="radio"
                  name="quiz"
                  value={opt}
                  checked={quizAnswer === opt}
                  onChange={() => setQuizAnswer(opt)}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>
          {!quizSubmitted ? (
            <button
              onClick={handleQuizSubmit}
              className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit Quiz
            </button>
          ) : (
            <p className="text-green-600 font-semibold mt-3">{statusMessage}</p>
          )}
        </div>
      )}

      {/* Assessment */}
      {assessment && (
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h3 className="text-xl font-semibold mb-3">Assessment</h3>
          <p className="mb-2">{assessment.question}</p>
          <textarea
            className="border p-2 rounded w-full mb-3"
            rows="4"
            value={assessmentText}
            onChange={(e) => setAssessmentText(e.target.value)}
            placeholder="Write your answer here..."
          />
          <button
            onClick={handleAssessmentSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Submit Assessment
          </button>
        </div>
      )}

      {statusMessage && !quiz && !assessment && (
        <p className="text-green-600 font-semibold mt-3">{statusMessage}</p>
      )}

      <Link
        to={`/courses/${course.id}`}
        className="inline-block mt-6 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
      >
        Back to Course Details
      </Link>
    </div>
  );
}
