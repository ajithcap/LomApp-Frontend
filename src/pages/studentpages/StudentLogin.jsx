// src/pages/studentpages/StudentLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api";

function StudentLogin({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const data = await loginUser({ email, password });
      
      // ✅ Store under "loggedInUser" to match EnrollmentPage
      localStorage.setItem("loggedInUser", JSON.stringify(data.user));

      // ✅ Update React state
      setUser(data.user);

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.detail || "Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-purple-50">
      <form
        onSubmit={handleLogin}
        className="relative bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-purple-200 opacity-20 blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Student Login
          </h2>

          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border mb-4 rounded-xl"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border mb-4 rounded-xl"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl"
          >
            Login
          </button>

          <div className="mt-4 text-center">
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/student/register")}
            >
              Register
            </span>{" "}
            |{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default StudentLogin;
