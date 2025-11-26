"use client";
import { useEffect, useState } from "react";
import TeacherSidebar from "@/components/TeacherSidebar";
import axios from "axios";
import "@styles/TeacherStudents.css";

export default function TeacherStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.teacher?.id) {
      setError("No teacher logged in");
      setLoading(false);
      return;
    }

    const teacherId = user.teacher.id;

    axios
      .get(`https://eilmbackend.oxmite.com/api/teacher-students/${teacherId}/students`)
      .then((res) => {
        setStudents(res.data.students || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch students");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return <p style={{ color: "red", padding: "20px" }}>{error}</p>;
  }

  return (
    <div>
      {/* Sidebar */}
      <div style={{ flexShrink: 0, width: isMobile ? 0 : "250px" }}>
        <TeacherSidebar />
      </div>

      {/* Main content */}
      <div
        className="teacher-students-main"
        style={{ marginLeft: isMobile ? 0 : "250px" }}
      >
        <h2 className="teacher-students-title">My Students</h2>

        {students.length === 0 ? (
          <p>No students found</p>
        ) : (
          <div className="students-grid">
            {students.map((student) => (
              <div key={student._id} className="student-card">
                <h3 className="student-name">{student.name}</h3>

                <div className="student-field">
                  <strong>Email:</strong> <span>{student.email}</span>
                </div>
                <div className="student-field">
                  <strong>Password:</strong> <span>{student.password}</span>
                </div>
                <div className="student-field">
                  <strong>Phone:</strong> <span>{student.phone}</span>
                </div>
                <div className="student-field">
                  <strong>City:</strong> <span>{student.city}</span>
                </div>
                <div className="student-field">
                  <strong>Area:</strong> <span>{student.area}</span>
                </div>

                <div className="student-courses">
                  <strong>Courses:</strong>
                  <div className="course-list">
                    {student.courses?.map((c) => (
                      <span key={c._id} className="course-chip">
                        Assigned: {new Date(c.assignedAt).toLocaleDateString()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="student-field">
                  <strong>Created At:</strong>
                  <span>{new Date(student.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="student-field">
                  <strong>__v:</strong> <span>{student.__v}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
