import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerAdmin } from "../../api";

function AdminRegister() {
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
      await registerAdmin({ name, email, password, contact_number: contactNumber });
      alert("Admin registered successfully!");
      navigate("/admin/login");
    } catch (err) {
      setError(err.response?.data?.detail || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-50 via-purple-100 to-pink-50">
      <form onSubmit={handleRegister} className="relative bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-pink-200 opacity-20 blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Admin Register</h2>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 border mb-4 rounded-xl" required />
          <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border mb-4 rounded-xl" required />
          <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 border mb-4 rounded-xl" required />
          <input placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} className="w-full p-3 border mb-4 rounded-xl" required />

          <button type="submit" className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl">Register</button>

          <div className="mt-4 text-center">
            <span className="text-purple-600 cursor-pointer" onClick={() => navigate("/admin/login")}>Login</span> | 
            <span className="text-purple-600 cursor-pointer" onClick={() => navigate("/")}> Home</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdminRegister;
