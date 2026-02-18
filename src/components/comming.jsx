"use client";
import React, { useEffect, useState } from "react";

export default function ComingSoon() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 576);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const wrapperStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f7f9",
    backgroundImage: "radial-gradient(#d1d9e0 0.5px, transparent 0.5px)",
    backgroundSize: "20px 20px",
    padding: isMobile ? "18px" : "32px",
    fontFamily: "'Inter', system-ui, sans-serif",
  };

  const cardStyle = {
    maxWidth: "720px",
    width: "100%",
    padding: isMobile ? "46px 22px" : "76px 56px",
    borderRadius: "20px",
    background: "#ffffff",
    boxShadow: "0 28px 70px rgba(0,0,0,0.07)",
    border: "1px solid #eaeef2",
    textAlign: "center",
    position: "relative",
  };

  const accentBar = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "6px",
    borderTopLeftRadius: "26px",
    borderTopRightRadius: "26px",
    background: "linear-gradient(90deg, #000060, #0090D0)",
  };

  const logoStyle = {
    width: isMobile ? "80px" : "110px",
    marginBottom: "20px",
  };

  const titleStyle = {
    color: "#0f172a",
    fontSize: isMobile ? "1.9rem" : "2.6rem",
    lineHeight: 1.2,
    marginBottom: "12px",
  };

  const descPrimary = {
    color: "#374151",
    fontSize: isMobile ? "0.95rem" : "1.1rem",
    marginBottom: "8px",
  };

  const descSecondary = {
    color: "#374151",
    lineHeight: 1.7,
    marginBottom: isMobile ? "26px" : "34px",
    maxWidth: "520px",
    marginInline: "auto",
    fontSize: isMobile ? "0.92rem" : "1rem",
  };

  const primaryBtn = {
    background: "linear-gradient(135deg, #000060, #0090D0)",
    border: "none",
    color: "#fff",
    borderRadius: "999px",
    width: isMobile ? "100%" : "auto",   // ⬅ full width on mobile
    minWidth: isMobile ? "unset" : "200px",
    padding: isMobile ? "12px 18px" : "14px 26px",
    fontWeight: 600,
    letterSpacing: "0.3px",
    boxShadow: "0 10px 24px rgba(0, 144, 208, 0.25)",
  };

  const secondaryBtn = {
     background: "linear-gradient(135deg, #000060, #0090D0)",
    borderRadius: "999px",
    width: isMobile ? "100%" : "auto",   // ⬅ full width on mobile
    minWidth: isMobile ? "unset" : "200px",
    padding: isMobile ? "12px 18px" : "14px 26px",
    color: "#0f172a",
    border: "1.5px solid #d1d5db",
    fontWeight: 600,
     boxShadow: "0 10px 24px rgba(0, 144, 208, 0.25)",
  };

  const trustRow = {
    marginTop: isMobile ? "24px" : "30px",
    paddingTop: "22px",
    borderTop: "1px solid #eef2f6",
    color: "#374151",
    fontSize: isMobile ? "12px" : "14px",
  };

  return (
    <div style={wrapperStyle}>
      <div className="container d-flex justify-content-center">
        <div style={cardStyle}>
          <div style={accentBar}></div>

          <img
            src="/assets/images/logo/logo3.png"
            alt="E-Ilm Academy"
            style={logoStyle}
          />

          <h1 className="fw-bold" style={titleStyle}>
            Coming Soon
          </h1>

          <p style={descPrimary}>
            Our digital campus is under development.
          </p>

          <p style={descSecondary}>
            Authentic Islamic courses, qualified teachers, and a structured
            learning environment designed for the modern learner.
          </p>

          <div
            className="d-flex justify-content-center flex-wrap"
            style={{ gap: isMobile ? "12px" : "12px" }}
          >
            <a
              href="https://wa.me/923155090055"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={primaryBtn}
            >
              WhatsApp Contact
            </a>

            <a
              href="mailto:Eilmacademy@gmail.com"
              className="btn"
              style={secondaryBtn}
            >
              Email Us
            </a>
          </div>

          <div style={trustRow}>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <span>Qualified Scholars</span>
              <span>Structured Curriculum</span>
              <span>Online Learning</span>
            </div>

            <p className="small mb-0 mt-3">
              © {new Date().getFullYear()} <strong>E-ILM ACADEMY</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
