// src/pages/FacultyUpdates.jsx
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

function FacultyUpdates() {
  // Load logged-in user from localStorage
  const user = JSON.parse(localStorage.getItem("user")) || {};

  // Sample updates
  const [updates, setUpdates] = useState([
    { id: 1, date: "2025-08-10", title: "New Course Added", content: "Cloud Computing course is now live!" },
    { id: 2, date: "2025-08-11", title: "Exam Schedule", content: "Midterm exams will start from September 15th." },
    { id: 3, date: "2025-08-12", title: "Maintenance Notice", content: "LMS platform will be down for updates from 2-4 AM." }
  ]);

  // State for new updates (admin only)
  const [newUpdate, setNewUpdate] = useState({ title: "", content: "" });

  const handleAddUpdate = () => {
    if (!newUpdate.title || !newUpdate.content) return;
    const updatedList = [
      ...updates,
      { id: Date.now(), date: new Date().toISOString().split("T")[0], ...newUpdate }
    ];
    setUpdates(updatedList);
    setNewUpdate({ title: "", content: "" });
  };

  const handleDeleteUpdate = (id) => {
    const updatedList = updates.filter((u) => u.id !== id);
    setUpdates(updatedList);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Header />
        <h2 className="text-2xl font-bold mb-4">Faculty Updates</h2>

        {/* Admin Panel to Add Updates */}
        {user.role === "admin" && (
          <div className="mb-6 p-4 bg-gray-50 rounded shadow">
            <h3 className="font-semibold mb-2">Add New Update</h3>
            <input
              type="text"
              placeholder="Title"
              value={newUpdate.title}
              onChange={(e) => setNewUpdate({ ...newUpdate, title: e.target.value })}
              className="border p-2 w-full mb-2 rounded"
            />
            <textarea
              placeholder="Content"
              value={newUpdate.content}
              onChange={(e) => setNewUpdate({ ...newUpdate, content: e.target.value })}
              className="border p-2 w-full mb-2 rounded"
            />
            <button
              onClick={handleAddUpdate}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Add Update
            </button>
          </div>
        )}

        {/* Updates List */}
        <div className="space-y-4">
          {updates.map((update) => (
            <div key={update.id} className="bg-white p-4 rounded-lg shadow-md relative">
              <h3 className="text-lg font-semibold">{update.title}</h3>
              <p className="text-sm text-gray-500">{update.date}</p>
              <p className="mt-2 text-gray-700">{update.content}</p>

              {/* Delete button for admins */}
              {user.role === "admin" && (
                <button
                  onClick={() => handleDeleteUpdate(update.id)}
                  className="absolute top-4 right-4 text-red-600 hover:underline text-sm"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FacultyUpdates;
