import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api";

function StudentRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (pwd) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(pwd);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !contactNumber) {
      setError("All fields are required");
      return;
    }
    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters, include letters and numbers.");
      return;
    }

    try {
      await registerUser({ name, email, password, contact_number: contactNumber });
      alert("Registration successful!");
      navigate("/student/login");
    } catch (err) {
      setError(err.response?.data?.detail || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-purple-50">
      <form onSubmit={handleRegister} className="relative bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-purple-200 opacity-20 blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Student Register</h2>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-3 border mb-4 rounded-xl" />
          <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-3 border mb-4 rounded-xl" />
          <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full p-3 border mb-4 rounded-xl" />
          <input placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required className="w-full p-3 border mb-4 rounded-xl" />

          <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl">Register</button>

          <div className="mt-4 text-center">
            <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/student/login")}>Login</span> | 
            <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/")}> Home</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default StudentRegister;
