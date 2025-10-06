import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000"; // backend URL

function SessionCourse() {
  const { courseId, sessionId } = useParams();

  const [session, setSession] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [assessmentAnswers, setAssessmentAnswers] = useState({});

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        // Fetch all sessions for this coursea
        console.log(`Fetching sessions for courseId=${courseId}...`);
        const res = await axios.get(`${BASE_URL}/courses/${courseId}/sessions`);
        const sessions = Array.isArray(res.data) ? res.data : [];
        console.log("Sessions received from backend:", sessions);

        // Find session for this week
        const currentSession = sessions.find(
          (s) => parseInt(s.week, 10) === parseInt(sessionId, 10)
        );

        if (!currentSession) {
          console.warn("Session not found for sessionId:", sessionId);
          setSession(null);
          setLoading(false);
          return;
        }

        setSession(currentSession);

        // Fetch quizzes for this session
        try {
          const quizRes = await axios.get(`${BASE_URL}/sessions/${currentSession.id}/quizzes/`);
          setQuizzes(Array.isArray(quizRes.data) ? quizRes.data : []);
          console.log("Quizzes received:", quizRes.data);
        } catch (quizErr) {
          console.error("Error fetching quizzes:", quizErr);
          setQuizzes([]);
        }
      } catch (err) {
        console.error("Error fetching sessions:", err);
        setSession(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSessionData();
  }, [courseId, sessionId]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!session) return <div className="p-6 text-red-600">Session not found.</div>;

  // Quiz handlers
  const handleQuizChange = (qIndex, option) => {
    setQuizAnswers((prev) => ({ ...prev, [qIndex]: option }));
  };
  const submitQuiz = () => {
    let score = 0;
    quizzes.forEach((q, i) => {
      if (quizAnswers[i] === q.correct_answer || quizAnswers[i] === q.answer) score++;
    });
    alert(`You scored ${score} / ${quizzes.length}`);
  };

  // Assessment handlers
  const handleAssessmentChange = (aIndex, value) => {
    setAssessmentAnswers((prev) => ({ ...prev, [aIndex]: value }));
  };
  const submitAssessments = () => alert("Assessment submitted!");

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 ml-64">
        <Header />
        <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Week {session.week}</h2>

          {/* Session contents */}
          {session.contents?.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contents</h3>
              {session.contents.map((c, idx) => (
                <div key={`content-${session.id}-${idx}`} className="p-3 border rounded bg-gray-50">
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
                <div key={`quiz-${idx}`} className="mb-4">
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

          {/* Assessments */}
          {session.assessment?.length > 0 && (
            <div className="p-6 border rounded bg-green-50">
              <h3 className="text-xl font-semibold mb-3">Assessment</h3>
              {session.assessment.map((a, idx) => (
                <div key={`assessment-${idx}`} className="mb-4">
                  <p className="mb-2">{a.question}</p>
                  <textarea
                    className="border p-2 rounded w-full mb-3"
                    rows={4}
                    value={assessmentAnswers[idx] || ""}
                    onChange={(e) => handleAssessmentChange(idx, e.target.value)}
                    placeholder="Write your answer here..."
                  />
                </div>
              ))}
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
