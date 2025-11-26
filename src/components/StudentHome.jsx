"use client";
import StudentSidebar from "@/components/StudentSidebar";
import { FaBook, FaClipboardList, FaTasks, FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import "@styles/StudentHome.css";

export default function StudentHome() {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setScreenSize("mobile");
      else if (window.innerWidth <= 1024) setScreenSize("tablet");
      else setScreenSize("desktop");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const books = [
    { title: "Tafseer Ibn Kathir", author: "Islami Scholar", icon: <FaBook size={28} /> },
    { title: "Sahih Bukhari", author: "Imam Bukhari", icon: <FaClipboardList size={28} /> },
    { title: "Riyadh-us-Saliheen", author: "Imam Nawawi", icon: <FaTasks size={28} /> },
    { title: "Seerat-un-Nabi", author: "Shibli Nomani", icon: <FaUser size={28} /> },
  ];

  return (
    <div className={`dashboard ${screenSize}`}>
      <StudentSidebar />
      <div className="content">
        <h1 className="header">Student Dashboard</h1>
        <div className="card-grid">
          {books.map((book, index) => (
            <div key={index} className="card">
              <div className="card-title">
                {book.icon}
                {book.title}
              </div>
              <div className="card-author">{book.author}</div>
              <button className="card-button">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
