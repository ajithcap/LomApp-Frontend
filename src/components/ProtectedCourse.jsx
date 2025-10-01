// src/components/ProtectedCourse.jsx
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { checkEnrollment } from "../api";

export default function ProtectedCourse({ children }) {
  const { courseId } = useParams(); // ✅ use courseId
  const [allowed, setAllowed] = useState(null);

  useEffect(() => {
    if (!courseId) {
      setAllowed(false);
      return;
    }

    const stored = localStorage.getItem("user");
    if (!stored) {
      setAllowed(false);
      return;
    }

    let user;
    try {
      user = JSON.parse(stored).user || JSON.parse(stored);
    } catch {
      setAllowed(false);
      return;
    }

    const idNum = Number(courseId);
    if (isNaN(idNum)) {
      setAllowed(false);
      return;
    }

    checkEnrollment(user.id, idNum)
      .then((res) => setAllowed(res.enrolled))
      .catch(() => setAllowed(false));
  }, [courseId]);

  if (allowed === null) return <div>Loading...</div>;
  if (!allowed) return <Navigate to={`/enroll/${courseId}`} />; // ✅ use courseId
  return children;
}
