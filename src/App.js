// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

// Context
import { ThemeProvider } from "./context/ThemeContext";

// Components
import Sidebar from "./components/Sidebar";
import ProtectedCourse from "./components/ProtectedCourse";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";
import StudentLogin from "./pages/studentpages/StudentLogin";
import StudentRegister from "./pages/studentpages/StudentRegister";
import Dashboard from "./pages/studentpages/Dashboard";
import AdminLogin from "./pages/adminpages/AdminLogin";
import AdminRegister from "./pages/adminpages/AdminRegister";
import AdminDashboard from "./pages/adminpages/AdminDashboard";
import EnrollmentPage from "./pages/EnrollmentPage";
import SessionCourse from "./pages/studentpages/SessionCourse";
import CoursePage from "./components/CoursePage";
import AvailableCourses from "./components/AvailableCourses";

// ----------------------------------------------------------------------
// Layout Component to implement the Sidebar structure
// ----------------------------------------------------------------------
const MainLayout = ({ children }) => (
  <div className="flex min-h-screen bg-gray-50 font-sans">
    <Sidebar />
    <main className="flex-1 ml-64 p-8">{children}</main>
  </div>
);
// ----------------------------------------------------------------------

function AppContent({ user, setUser }) {
  const location = useLocation();

  // Define which paths require the Sidebar Layout (post-login pages)
  const requiresSidebar = [
    "/dashboard",
    "/admin/dashboard",
    "/courses",
    "/profile",
    "/about",
    "/course/",   // course sessions
    "/enroll",    // enrollment page
  ].some((path) => location.pathname.startsWith(path));

  if (requiresSidebar) {
    return (
      <MainLayout>
        <Routes>
          {/* Pages displayed within MainLayout */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />

          {/* Courses */}
          <Route path="/courses" element={<AvailableCourses />} />
          <Route path="/courses/:courseId" element={<CoursePage />} />
          <Route path="/enroll/:id" element={<EnrollmentPage />} />

          {/* Dashboards */}
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/admin/dashboard" element={<AdminDashboard user={user} />} />

          {/* Course Session */}
          <Route
            path="/course/:courseId/session/:sessionId"
            element={
              <ProtectedCourse>
                <SessionCourse />
              </ProtectedCourse>
            }
          />

          {/* Fallback for unknown authenticated routes */}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </MainLayout>
    );
  }

  // Public routes (no sidebar)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student/login" element={<StudentLogin setUser={setUser} />} />
      <Route path="/student/register" element={<StudentRegister />} />
      <Route path="/admin/login" element={<AdminLogin setUser={setUser} />} />
      <Route path="/admin/register" element={<AdminRegister />} />

      {/* Fallback for unknown public routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <AppContent user={user} setUser={setUser} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
