"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaHome, FaBook, FaUsers, FaSignOutAlt, FaBars } from "react-icons/fa";
import "@styles/teacherdashboard.css";

export default function TeacherSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("teacherId");
  localStorage.removeItem("user");
};


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
        setIsOpen(false);
      } else {
        setIsMobile(false);
        setIsOpen(true);
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Toggle Button */}
      {isMobile && (
        <button className="toggleBtn" onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </button>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <h2 className="logo">Teacher</h2>
        <ul className="navList">
          <li className="navItem">
            <Link href="/teacher-dashboard" className="navLink" onClick={() => isMobile && setIsOpen(false)}>
              <FaHome /> Home
            </Link>
          </li>
          <li className="navItem">
            <Link href="/teacher-dashboard/students" className="navLink" onClick={() => isMobile && setIsOpen(false)}>
              <FaUsers /> Students
            </Link>
          </li>
          <li className="navItem">
            <Link href="/teacher-dashboard/courses" className="navLink" onClick={() => isMobile && setIsOpen(false)}>
              <FaBook /> Courses
            </Link>
          </li>
   <li className="logout">
  <Link href="/sign-in" className="navLink" onClick={handleLogout}>
    <FaSignOutAlt /> Logout
  </Link>
</li>

        </ul>
      </div>
    </>
  );
}
