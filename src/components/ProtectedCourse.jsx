// src/components/ProtectedCourse.jsx
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { checkEnrollment } from "../api";

export default function ProtectedCourse({ children }) {
  const { id } = useParams();
  const [allowed, setAllowed] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) {
      setAllowed(false);
      return;
    }

    const user = JSON.parse(stored);
    checkEnrollment(user.id, Number(id))
      .then((res) => setAllowed(res.enrolled))
      .catch(() => setAllowed(false));
  }, [id]);

  if (allowed === null) return <div>Loading...</div>;
  if (!allowed) return <Navigate to={`/enroll/${id}`} />;
  return children;
}
