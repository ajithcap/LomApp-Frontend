import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000"; // Update if backend is deployed

// ---------- STUDENT ----------
export const registerUser = (data) => axios.post(`${BASE_URL}/register/`, data).then(res => res.data);
export const loginUser = (data) => axios.post(`${BASE_URL}/login/`, data).then(res => res.data);

// ---------- ADMIN ----------
export const registerAdmin = (data) => axios.post(`${BASE_URL}/admin/register/`, data).then(res => res.data);
export const loginAdmin = (data) => axios.post(`${BASE_URL}/admin/login/`, data).then(res => res.data);

// ---------- DASHBOARD ----------
export const getDashboardMetrics = async (userId, role) => {
  const res = await axios.get(`${BASE_URL}/dashboard/metrics/`, { params: { user_id: userId, role } });
  return res.data;
};

// ---------- ENROLLMENTS ----------
export const enrollUser = async (enrollmentData) => {
  const res = await axios.post(`${BASE_URL}/enroll/`, enrollmentData);
  return res.data;
};

export const checkEnrollment = async (userId, courseId) => {
  const res = await axios.get(`${BASE_URL}/enroll/check/`, { params: { user_id: userId, course_id: courseId } });
  return res.data; // { enrolled: true/false }
};

export const getUserEnrollments = async (userId) => {
  const res = await axios.get(`${BASE_URL}/enrollments/user/${userId}`);
  return res.data; // array of course IDs
};
