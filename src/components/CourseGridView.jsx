"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaBookOpen, FaInfoCircle, FaArrowRight, FaTag, FaCalendarAlt, FaDownload } from "react-icons/fa";
import { useRouter } from "next/navigation";
import jsPDF from "jspdf";
import { ENDPOINTS } from "@/http/endpoints";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const router = useRouter();
  const mainColor = "#1e88e5";
  const accentColor = "gray";

  useEffect(() => {
    const fetchCourseAndLessons = async () => {
      try {
        const courseRes = await axios.get(ENDPOINTS.courses);
        setCourses(courseRes.data);
      } catch (err) {
        console.error("Error fetching course or lessons:", err);
      }
    };
    fetchCourseAndLessons();
  }, []);

  const generatePDF = (course) => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.setTextColor(mainColor);
    doc.text(course.title, 20, 20);
    doc.setFontSize(12);
    doc.setTextColor("#333");
    doc.text(`Category: ${course.category}`, 20, 30);
    doc.text(`Description: ${course.description}`, 20, 40);

    let y = 50;
    if (course.contents && course.contents.length > 0) {
      course.contents.forEach((item, idx) => {
        if (item.type === "text") {
          doc.text(`${idx + 1}. ${item.value}`, 20, y);
          y += 10;
        }
      });
    }
    doc.save(`${course.title}.pdf`);
  };

  return (
    <div
      className="container-fluid "
      style={{
        padding:"40px 20px",
        overflow: "hidden",
      }}
    >
  

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-3">
        {courses.map((course) => (
          <div key={course._id} className="col animate__animated animate__zoomIn"
           style={{ 
            animationDelay: `${courses.indexOf(course) * 0.1}s`,
           
            
            }}>
            <div
              className="card h-100 border-0"
              style={{
                background: "linear-gradient(180deg, #ffffff, #f5f7fa)",
                borderRadius: "20px",
                overflow: "hidden",
                transition: "transform 0.4s ease,  0.4s ease",
                cursor: "pointer",
                 padding:"20px"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05) translateY(-12px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1) translateY(0)";
              }}
            >
              <div
                className="card-body d-flex flex-column p-4"
                onClick={() => router.push(`/course-details/${course._id}`)}
              >
                <h2
                  className="card-title d-flex align-items-center gap-2 mb-3"
                  style={{ fontSize: "1.6rem", color: mainColor, fontWeight: 700 }}
                >
                  <FaBookOpen style={{ color: accentColor }} /> {course.title}
                </h2>
                <p
                  className="card-text text-muted mb-3"
                  style={{ fontSize: "0.95rem", lineHeight: 1.7, maxHeight: "4.8em", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  <FaInfoCircle style={{ color: mainColor, marginRight: "8px" }} /> {course.description}
                </p>
                <p
                  className="card-text mb-3"
                  style={{ fontSize: "0.9rem", color: accentColor, fontWeight: 500 }}
                >
                  <FaTag className="me-2" /> {course.category}
                </p>
                <div className="mb-4">
                  <p className="text-muted small mb-1">
                    <FaCalendarAlt style={{ color: mainColor, marginRight: "6px" }} /> Created: {new Date(course.createdAt).toLocaleDateString()}
                  </p>
                  <p className="text-muted small">
                    <FaCalendarAlt style={{ color: mainColor, marginRight: "6px" }} /> Updated: {new Date(course.updatedAt).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    generatePDF(course);
                  }}
                  className="btn mt-auto w-100"
                  style={{
                    background: `linear-gradient(90deg, ${mainColor}, ${accentColor})`,
                    color: "#fff",
                    borderRadius: "10px",
                    padding: "12px",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    transition: "background 0.3s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `linear-gradient(90deg, ${accentColor}, ${mainColor})`;
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `linear-gradient(90deg, ${mainColor}, ${accentColor})`;
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <FaDownload /> Download PDF
                </button>
              </div>
              <div className="card-footer bg-transparent border-0 pb-3 px-4">
                <a
                  href="/apply-admission"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/apply-admission");
                  }}
                  className="text-decoration-none d-flex align-items-center gap-2"
                  style={{
                    color: mainColor,
                    fontWeight: 600,
                    fontSize: "1rem",
                    transition: "color 0.3s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = accentColor;
                    e.currentTarget.style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = mainColor;
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  Enroll Now <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}