// src/pages/EnrollmentPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { enrollUser, checkEnrollment } from "../api";

function EnrollmentPage() {
  const { id } = useParams(); // course ID from route
  const navigate = useNavigate();

  // States
  const [courseId, setCourseId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [alreadyEnrolled, setAlreadyEnrolled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    contactNumber: "",
    emergencyContact: "",
    address: "",
    priorExperience: "",
    preferredBatch: "",
    studyMode: "",
    referral: "",
    terms: false,
  });

  // Parse courseId safely
  useEffect(() => {
    const cid = Number(id);
    if (!id || isNaN(cid)) return;
    setCourseId(cid);
  }, [id]);

  // Load logged-in user
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) return;

    let parsed;
    try {
      parsed = JSON.parse(stored);
    } catch {
      console.error("Error parsing stored user");
      return;
    }

    const user = parsed.user || parsed;
    const uid = user?.id;
    if (!uid) return;

    setUserId(uid);
    setForm((prev) => ({
      ...prev,
      email: user.email || "",
      firstName: user.name?.split(" ")[0] || "",
      lastName: user.name?.split(" ")[1] || "",
    }));
  }, []);

  // Check if already enrolled
  useEffect(() => {
    if (!userId || !courseId) return;

    checkEnrollment(userId, courseId)
      .then((res) => setAlreadyEnrolled(res.enrolled))
      .catch((err) => {
        console.error("Error checking enrollment:", err);
        setAlreadyEnrolled(false);
      });
  }, [userId, courseId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleEnroll = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (!userId || !courseId) return;
    if (alreadyEnrolled) return;

    const requiredFields = ["firstName", "lastName", "dob", "gender", "studyMode", "terms"];
    for (let field of requiredFields) {
      if (!form[field] || (field === "terms" && !form[field])) {
        setMessage({ type: "error", text: "Please fill all required fields (*)" });
        document.getElementById(field)?.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    const payload = {
      user_id: userId,
      course_id: courseId,
      first_name: form.firstName,
      last_name: form.lastName,
      dob: form.dob,
      gender: form.gender,
      email: form.email,
      contact_number: form.contactNumber,
      emergency_contact: form.emergencyContact,
      address: form.address,
      prior_experience: form.priorExperience,
      preferred_batch: form.preferredBatch,
      study_mode: form.studyMode,
      referral: form.referral,
      terms: form.terms,
    };

    setLoading(true);
    try {
      await enrollUser(payload);
      setAlreadyEnrolled(true);
      alert("Enrollment successful! Redirecting to course...");
      navigate(`/course/${courseId}/day1`); // ✅ go directly to protected course
    } catch (err) {
      const errMsg = err.response?.data
        ? typeof err.response.data === "object"
          ? JSON.stringify(err.response.data, null, 2)
          : err.response.data
        : err.message;
      setMessage({ type: "error", text: errMsg });
    } finally {
      setLoading(false);
    }
  };

  if (alreadyEnrolled) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Already Enrolled</h2>
        <div className="flex flex-col items-center gap-4">
          <p className="text-green-700 font-semibold">You are already enrolled in this course.</p>
          <button
            onClick={() => navigate(`/course/${courseId}/day1`)}
            className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Start Course
          </button>
          <button
            onClick={() => navigate(`/courses`)}
            className="px-6 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Course Enrollment</h2>

      {message && (
        <div className={`p-3 mb-4 rounded transition-all duration-300 whitespace-pre-wrap ${
          message.type === "error" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
        }`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleEnroll} className="space-y-6 bg-white p-6 rounded-xl shadow-lg">
        {/* Personal Info */}
        <h3 className="font-semibold text-lg text-gray-700 border-b pb-2 mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name *" className="border p-2 rounded w-full"/>
          <input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name *" className="border p-2 rounded w-full"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input id="dob" type="date" name="dob" value={form.dob} onChange={handleChange} className="border p-2 rounded w-full"/>
          <select id="gender" name="gender" value={form.gender} onChange={handleChange} className="border p-2 rounded w-full">
            <option value="">Select Gender *</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {/* Contact Info */}
        <input name="contactNumber" value={form.contactNumber} onChange={handleChange} placeholder="Contact Number" className="border p-2 rounded w-full"/>
        <input name="emergencyContact" value={form.emergencyContact} onChange={handleChange} placeholder="Emergency Contact" className="border p-2 rounded w-full"/>
        <textarea name="address" value={form.address} onChange={handleChange} placeholder="Address" className="border p-2 rounded w-full" rows="3"/>
        {/* Course Preferences */}
        <input name="priorExperience" value={form.priorExperience} onChange={handleChange} placeholder="Prior Experience / Qualifications" className="border p-2 rounded w-full"/>
        <select name="preferredBatch" value={form.preferredBatch} onChange={handleChange} className="border p-2 rounded w-full">
          <option value="">Select Batch</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>
        <select id="studyMode" name="studyMode" value={form.studyMode} onChange={handleChange} className="border p-2 rounded w-full">
          <option value="">Select Mode *</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        <input name="referral" value={form.referral} onChange={handleChange} placeholder="How did you hear about us?" className="border p-2 rounded w-full"/>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="terms" name="terms" checked={form.terms} onChange={handleChange}/>
          <label htmlFor="terms" className="text-sm">I agree to the terms & conditions *</label>
        </div>

        {/* Submit / Cancel */}
        <div className="flex gap-3 mt-4">
          <button type="submit" disabled={loading} className={`px-6 py-2 rounded w-full ${loading ? "bg-gray-300 cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700"}`}>
            {loading ? "Submitting..." : "Confirm Enrollment"}
          </button>
          <button type="button" onClick={() => navigate(`/courses`)} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EnrollmentPage;
