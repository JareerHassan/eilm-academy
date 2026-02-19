// src/http/endpoints.js
import { BASE_URL } from "./base-url";

export const ENDPOINTS = {
  // static endpoints
  studentLogin: `${BASE_URL}/auth/login`,
  teacherLogin: `${BASE_URL}/teachers/login`,
  courses: `${BASE_URL}/courses`,
  applyaddmision: `${BASE_URL}/admissions/apply`,

  // dynamic endpoints
  getStudentById: (studentId) => `${BASE_URL}/students/${studentId}`,
  studentCourses: (studentId) => `${BASE_URL}/student-courses/${studentId}/courses`,
  teacherCourses: (teacherId) => `${BASE_URL}/teacher-courses/${teacherId}/courses`,

  // NEW: update password
  updateStudentPassword: `${BASE_URL}/students/password/update-password`,
};
