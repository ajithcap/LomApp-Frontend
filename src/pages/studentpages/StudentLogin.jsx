// src/pages/studentpages/StudentLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api";

function StudentLogin({ setUser }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!form.email || !form.password) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);
    try {
      const response = await loginUser(form);
      const user = response.user || response;
      if (!user?.id) throw new Error("Invalid login response from server");

      localStorage.setItem("user", JSON.stringify(user));
      setUser?.(user);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      const msg =
        err.response?.data?.message ||
        err.response?.data ||
        err.message ||
        "Login failed";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-purple-50">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md overflow-hidden"
      >
        {/* Glow background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-purple-200 opacity-20 blur-3xl"></div>

        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Student Login
          </h2>

          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <div className="space-y-4">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => navigate("/student/register")}
            >
              Register
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default StudentLogin;
