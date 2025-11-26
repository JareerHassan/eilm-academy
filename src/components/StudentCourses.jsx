"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import StudentSidebar from "@/components/StudentSidebar";
import { ENDPOINTS } from "@/http/endpoints";
import "styles/app.css";

export default function StudentCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const studentId = localStorage.getItem("studentId");
        if (!studentId) {
          setError("Student ID not found in localStorage");
          setLoading(false);
          return;
        }

        const response = await axios.get(ENDPOINTS.studentCourses(studentId));
        const coursesData = response.data.courses.map((c) => c.course);
        setCourses(coursesData);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setError("Failed to load courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading)
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );

  if (error)
    return (
      <p style={{ padding: "20px", color: "red", fontWeight: "500" }}>{error}</p>
    );

  return (
    <div className="dashboard">
      <StudentSidebar />
      <div className="content">
        <h1>My Courses</h1>
        <div className="row">
          {courses.length === 0 ? (
            <p>No courses assigned yet.</p>
          ) : (
            courses.map((course) => (
              <div key={course._id} className="course-card">
                {/* Title alag highlight hoga */}
                <h5>{course.title}</h5>

                {/* baaki fields loop se render */}
                <div className="course-details">
                  {Object.entries(course).map(([key, value]) => {
                    if (["_id", "title", "__v"].includes(key)) return null;

                    if (key === "createdAt" || key === "updatedAt") {
                      value = new Date(value).toLocaleString();
                    }

                    return (
                      <p key={key} className="detail-row">
                        <span className="detail-key">{key}:</span>{" "}
                        <span className="detail-value">{String(value)}</span>
                      </p>
                    );
                  })}

                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
