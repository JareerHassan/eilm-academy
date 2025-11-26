"use client";
import { useState, useEffect } from "react";
import { FaHome, FaBook, FaSignOutAlt, FaBars } from "react-icons/fa";
import Link from "next/link";
import styles from "@styles/StudentSidebar.module.css";

export default function StudentSidebar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
        setOpen(false);
      } else {
        setIsMobile(false);
        setOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("studentId");
    localStorage.removeItem("user");
  };


  return (
    <>
      {isMobile && (
        <button
          className={styles.toggleBtn}
          onClick={() => setOpen(!open)}
        >
          <FaBars />
        </button>
      )}

      <div className={`${styles.sidebar} ${!open ? styles.closed : ""}`}>
        <h2 className={styles.logo}>Student</h2>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link
              href="/student-dashboard/home"
              className={styles.navLink}
              onClick={() => isMobile && setOpen(false)}
            >
              <FaHome /> Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/student-dashboard/courses"
              className={styles.navLink}
              onClick={() => isMobile && setOpen(false)}
            >
              <FaBook /> Courses
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.logout}`}>
            <Link href="/sign-in" className={styles.navLink} onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
