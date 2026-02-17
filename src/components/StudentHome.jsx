"use client";
import StudentSidebar from "@/components/StudentSidebar";
import { FaVideo } from "react-icons/fa";
import { useEffect, useState } from "react";
import "@styles/StudentHome.css";

export default function StudentHome() {
  const [screenSize, setScreenSize] = useState("desktop");
  const [studentName, setStudentName] = useState("Student");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setScreenSize("mobile");
      else if (window.innerWidth <= 1024) setScreenSize("tablet");
      else setScreenSize("desktop");
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // ✅ Helper: email -> Name
    const emailToName = (email) => {
      if (!email) return null;
      return email
        .split("@")[0]
        .replace(/[._-]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
    };

    // ✅ JWT decode helper
    const getEmailFromToken = (token) => {
      try {
        const payload = token.split(".")[1];
        const decoded = JSON.parse(atob(payload));
        return decoded.email || decoded.user?.email || null;
      } catch {
        return null;
      }
    };

    // ✅ Try localStorage user object
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        if (user.name || user.fullName) {
          setStudentName(user.name || user.fullName);
          return;
        }
        if (user.email) {
          setStudentName(emailToName(user.email));
          return;
        }
      } catch {}
    }

    // ✅ Try email key
    const email = localStorage.getItem("email");
    if (email) {
      setStudentName(emailToName(email));
      return;
    }

    // ✅ Try token
    const token = localStorage.getItem("token");
    if (token) {
      const tokenEmail = getEmailFromToken(token);
      if (tokenEmail) setStudentName(emailToName(tokenEmail));
      return;
    }

    // ✅ Fallback
    setStudentName("Student");

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const books = [
    {
      title: "Join Tafseer Class",
      author: "Live Online Session",
      icon: <FaVideo size={28} />,
      link: "https://meet.google.com/cmb-rjxq-ibd",
      isMeeting: true
    }
  ];

  return (
    <div className={`dashboard ${screenSize}`}>
      <StudentSidebar />

      <div className="content">
        {/* ✅ Header with user name */}
        <h1 className="header" style={{ fontSize: "26px", marginBottom: "20px" }}>
          Welcome to your dashboard {studentName}!
        </h1>

        <div className="card-grid">
          {books.map((book, index) => (
            <div key={index} className="card">
              <div className="card-title">
                {book.icon} {book.title}
              </div>

              <div className="card-author">{book.author}</div>

              {book.isMeeting ? (
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-button"
                >
                  Join Now
                </a>
              ) : (
                <button className="card-button">View Details</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
