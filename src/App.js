// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Context
import { ThemeProvider } from "./context/ThemeContext";

// Pages
import Home from "./pages/Home";
import StudentLogin from "./pages/studentpages/StudentLogin";
import StudentRegister from "./pages/studentpages/StudentRegister";
import Dashboard from "./pages/studentpages/Dashboard";
import AdminLogin from "./pages/adminpages/AdminLogin";
import AdminRegister from "./pages/adminpages/AdminRegister";
import AdminDashboard from "./pages/adminpages/AdminDashboard";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import EnrollmentPage from "./pages/EnrollmentPage";
import DayCourse from "./pages/studentpages/DayCourse";
import ProtectedCourse from "./components/ProtectedCourse";

// Course data
import courses from "./data/courses";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="/student/login" element={<StudentLogin setUser={setUser} />} />
          <Route path="/student/register" element={<StudentRegister />} />
          <Route path="/admin/login" element={<AdminLogin setUser={setUser} />} />
          <Route path="/admin/register" element={<AdminRegister />} />

          {/* Courses */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/enroll/:id" element={<EnrollmentPage />} />

          {/* Protected Student Dashboard */}
          <Route path="/dashboard" element={<Dashboard user={user} />} />

          {/* Admin Dashboard */}
          <Route path="/admin/dashboard" element={<AdminDashboard user={user} />} />

          {/* Dynamic day routes for each course */}
          {courses.map(course => {
            const totalDays = course.days || 5; // default 5 days if not defined
            return Array.from({ length: totalDays }).map((_, index) => {
              const dayNumber = index + 1;
              return (
                <Route
                  key={`${course.id}-day${dayNumber}`}
                  path={`/course/${course.id}/day${dayNumber}`}
                  element={
                    <ProtectedCourse>
                      <DayCourse />
                    </ProtectedCourse>
                  }
                />
              );
            });
          })}

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/courses" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
