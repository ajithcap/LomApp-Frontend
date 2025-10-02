// src/pages/studentpages/SessionCourse.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000"; // Your FastAPI backend URL

function SessionCourse() {
  const { courseId, sessionId } = useParams();
  const navigate = useNavigate();

  const [session, setSession] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [assessmentAnswers, setAssessmentAnswers] = useState({});

  // Fetch session and quizzes
  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        // 1️⃣ Get all sessions of the course
        const res = await axios.get(`${BASE_URL}/courses/${courseId}/sessions/`);
        const currentSession = res.data.find((s) => s.week === parseInt(sessionId, 10));
        if (!currentSession) return;

        setSession(currentSession);

        // 2️⃣ Get quizzes for this session
        const quizRes = await axios.get(`${BASE_URL}/sessions/${currentSession.id}/quizzes/`);
        setQuizzes(quizRes.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSessionData();
  }, [courseId, sessionId]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!session) return <div className="p-6">Session not found.</div>;

  // Handle quiz answer selection
  const handleQuizChange = (qIndex, option) => {
    setQuizAnswers((prev) => ({ ...prev, [qIndex]: option }));
  };

  // Handle assessment input
  const handleAssessmentChange = (aIndex, value) => {
    setAssessmentAnswers((prev) => ({ ...prev, [aIndex]: value }));
  };

  // Check quiz score
  const submitQuiz = () => {
    let score = 0;
    quizzes.forEach((q, i) => {
      if (quizAnswers[i] === q.correct_answer) score++;
    });
    alert(`You scored ${score} / ${quizzes.length}`);
  };

  // Submit assessments (currently just alerts, can be saved to backend)
  const submitAssessments = () => {
    alert("Assessment submitted!");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 ml-64">
        <Header />
        <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Week {session.week}</h2>

          {/* Session Contents */}
          {session.contents?.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contents</h3>
              {session.contents.map((c, idx) => (
                <div key={idx} className="p-3 border rounded bg-gray-50">
                  {c.type === "video" && <video src={c.url} controls className="w-full" />}
                  {c.type === "text" && <p>{c.text || c.body}</p>}
                  {c.type === "code" && (
                    <pre className="bg-gray-200 p-2 rounded overflow-x-auto">
                      <code>{c.code}</code>
                    </pre>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Quizzes */}
          {quizzes.length > 0 && (
            <div className="p-6 border rounded bg-yellow-50">
              <h3 className="text-xl font-semibold mb-3">Quiz</h3>
              {quizzes.map((q, idx) => (
                <div key={idx} className="mb-4">
                  <p className="mb-2">{q.question}</p>
                  <ul className="list-disc pl-5">
                    {q.options.map((opt, i) => (
                      <li key={i}>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name={`quiz-${idx}`}
                            value={opt}
                            checked={quizAnswers[idx] === opt}
                            onChange={() => handleQuizChange(idx, opt)}
                            className="mr-2"
                          />
                          {opt}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <button
                onClick={submitQuiz}
                className="px-4 py-2 mt-3 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Submit Quiz
              </button>
            </div>
          )}

          {/* Assessment */}
          {session.assessment && (
            <div className="p-6 border rounded bg-green-50">
              <h3 className="text-xl font-semibold mb-3">Assessment</h3>
              {Array.isArray(session.assessment) ? (
                session.assessment.map((a, idx) => (
                  <div key={idx} className="mb-4">
                    <p className="mb-2">{a.question}</p>
                    <textarea
                      className="border p-2 rounded w-full mb-3"
                      rows={4}
                      value={assessmentAnswers[idx] || ""}
                      onChange={(e) => handleAssessmentChange(idx, e.target.value)}
                      placeholder="Write your answer here..."
                    />
                  </div>
                ))
              ) : (
                <p>{session.assessment}</p>
              )}
              <button
                onClick={submitAssessments}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Submit Assessment
              </button>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            {parseInt(sessionId, 10) > 1 && (
              <Link
                to={`/course/${courseId}/session/${parseInt(sessionId, 10) - 1}`}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Previous
              </Link>
            )}
            <Link
              to={`/course/${courseId}/session/${parseInt(sessionId, 10) + 1}`}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SessionCourse;
