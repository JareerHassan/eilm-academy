"use client";
import { useEffect, useState } from "react";
import TeacherSidebar from "@/components/TeacherSidebar";
import { FaBook, FaClock, FaCalendarAlt } from "react-icons/fa";
import "@styles/TeacherCourses.css";
import api from "@/http/axios";
import { ENDPOINTS } from "@/http/endpoints";

export default function TeacherCourses() {
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch courses with axios instance
  useEffect(() => {
    const teacherId = localStorage.getItem("teacherId");
    if (!teacherId) {
      setError("Teacher not logged in");
      setLoading(false);
      return;
    }

    const fetchCourses = async () => {
      try {
        const res = await api.get(ENDPOINTS.teacherCourses(teacherId));
        setTeacher(res.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="teacher-courses-container">
      {/* Sidebar */}
      <div style={{ flexShrink: 0, width: isMobile ? 0 : "250px" }}>
        <TeacherSidebar />
      </div>

      {/* Main content */}
      <div
        className="teacher-courses-main"
        style={{ marginLeft: isMobile ? 0 : "250px" }}
      >
        <h1 className="teacher-courses-title">My Courses</h1>

        {loading && (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        )}

        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && !error && teacher && teacher.courses.length === 0 && (
          <p>No courses found.</p>
        )}

        <div className="courses-grid">
          {teacher &&
            teacher.courses.map((course) => (
              <div key={course._id} className="course-card">
                {/* Title */}
                <div className="course-title">
                  <FaBook size={24} color="#458EFF" />
                  {course.title}
                </div>

                {/* Description */}
                {course.description && (
                  <p className="course-description">
                    <strong>Description:</strong> {course.description}
                  </p>
                )}

                {/* Duration */}
                {course.duration && (
                  <div className="course-duration">
                    <FaClock size={14} />
                    <span>Duration: {course.duration}</span>
                  </div>
                )}

                {/* CreatedAt */}
                {course.createdAt && (
                  <div className="course-duration">
                    <FaCalendarAlt size={14} />
                    <span>
                      Created: {new Date(course.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                )}

                {/* UpdatedAt */}
                {course.updatedAt && (
                  <div className="course-duration">
                    <FaCalendarAlt size={14} />
                    <span>
                      Updated: {new Date(course.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                )}
              </div>
            ))}
        </div>

      </div>
    </div>
  );
}
