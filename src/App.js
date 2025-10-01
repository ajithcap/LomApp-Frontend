// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Context
import { ThemeProvider } from "./context/ThemeContext";


// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs"; // Added About Us page
import Profile from "./pages/Profile"; // Added Profile page
import StudentLogin from "./pages/studentpages/StudentLogin";
import StudentRegister from "./pages/studentpages/StudentRegister";
import Dashboard from "./pages/studentpages/Dashboard";
import AdminLogin from "./pages/adminpages/AdminLogin";
import AdminRegister from "./pages/adminpages/AdminRegister";
import AdminDashboard from "./pages/adminpages/AdminDashboard";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import EnrollmentPage from "./pages/EnrollmentPage";
import SessionCourse from "./pages/studentpages/SessionCourse";
import ProtectedCourse from "./components/ProtectedCourse";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />  {/* About Us route */}
          <Route path="/profile" element={<Profile />} /> {/* Profile route */}
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

          {/* Session route for all courses (dynamic) */}
          <Route
            path="/course/:courseId/session/:sessionId"
            element={
              <ProtectedCourse>
                <SessionCourse />
              </ProtectedCourse>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/courses" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
