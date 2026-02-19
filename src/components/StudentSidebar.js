"use client";
import { useState, useEffect } from "react";
import { FaHome, FaBook, FaSignOutAlt, FaBars, FaUser } from "react-icons/fa";
import Link from "next/link";
import styles from "@styles/StudentSidebar.module.css";

export default function StudentSidebar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [studentName, setStudentName] = useState("Student");

  useEffect(() => {
    // ✅ Responsive
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

    // ✅ Helper: email -> name
    const emailToName = (email) => {
      if (!email) return null;
      const base = email.split("@")[0];          // ali.khan
      return base
        .replace(/[._-]/g, " ")                  // ali khan
        .replace(/\b\w/g, (c) => c.toUpperCase()); // Ali Khan
    };

    // ✅ Helper: JWT decode (no library)
    const getEmailFromToken = (token) => {
      try {
        const payload = token.split(".")[1];
        const decoded = JSON.parse(atob(payload));
        return decoded.email || decoded.user?.email || null;
      } catch {
        return null;
      }
    };

    // 1️⃣ Try user object
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        if (user.name || user.fullName) {
          setStudentName(user.name || user.fullName);
          return;
        }
        if (user.email) {
          const n = emailToName(user.email);
          if (n) { setStudentName(n); return; }
        }
      } catch { }
    }

    // 2️⃣ Try direct email key
    const email = localStorage.getItem("email");
    if (email) {
      const n = emailToName(email);
      if (n) { setStudentName(n); return; }
    }

    // 3️⃣ Try token decode
    const token = localStorage.getItem("token");
    if (token) {
      const tokenEmail = getEmailFromToken(token);
      const n = emailToName(tokenEmail);
      if (n) { setStudentName(n); return; }
    }

    // 4️⃣ Fallback
    setStudentName("Student");

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("studentId");
    localStorage.removeItem("user");
    localStorage.removeItem("email");
  };

  return (
    <>
      {isMobile && (
        <button className={styles.toggleBtn} onClick={() => setOpen(!open)}>
          <FaBars />
        </button>
      )}

      <div className={`${styles.sidebar} ${!open ? styles.closed : ""}`}>
        <h4
          style={{
            display: "flex",
            alignItems: "center", // vertical center
            gap: "8px",           // icon aur text ka gap
            fontSize: "18px",
            fontWeight: "600",
            padding: "12px 16px",
            color: "white",
            flexWrap: "wrap",      // text agar lamba ho to next line me aa jaye
            wordBreak: "break-word" // bohot lambi words ko break kar de
          }}
        >
          <span style={{ lineHeight: 1 }}>{studentName}</span>
        </h4>



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

          <li className={styles.navItem}>
            <Link
              href="/student-dashboard/forget-password"
              className={styles.navLink}
              onClick={() => isMobile && setOpen(false)}
            >
              <FaBook /> Forget Password
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
