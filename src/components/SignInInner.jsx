"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { CaretDown } from "phosphor-react";

import api from "@/http/axios";
import { ENDPOINTS } from "@/http/endpoints";

const SignInInner = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const formRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const syncHeight = () => {
      if (formRef.current && imgRef.current) {
        imgRef.current.style.height = formRef.current.offsetHeight + "px";
      }
    };
    syncHeight();
    window.addEventListener("resize", syncHeight);
    return () => window.removeEventListener("resize", syncHeight);
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Front-end validation
    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password");
      return; // Server call ko rok do
    }

    setLoading(true);

    try {
      const endpoint =
        role === "student"
          ? ENDPOINTS.studentLogin
          : ENDPOINTS.teacherLogin;

      const res = await api.post(endpoint, { email, password });

      if (res.data) {
        localStorage.setItem("token", res.data.token || "");
        localStorage.setItem("user", JSON.stringify(res.data));

        if (role === "student" && res.data.student?.id) {
          localStorage.setItem("studentId", res.data.student.id);
        }
        if (role === "teacher" && res.data.teacher?.id) {
          localStorage.setItem("teacherId", res.data.teacher.id);
        }

        router.push(role === "student" ? "/student-dashboard" : "/teacher-dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="account py-120 position-relative">
      <div className="container">
        <div className="row gy-4 align-items-center">
          {/* Form Column */}
          <div className="col-lg-6">
            <div
              className="bg-main-25 border border-neutral-30 rounded-8 p-32"
              ref={formRef}
              style={{ minHeight: "400px" }}
            >
              <div className="mb-40">
                <h1 className="d-none">Student Login Eilm Academy</h1>
                <h3 className="mb-16 text-neutral-500">Welcome Back!</h3>
                <p className="text-neutral-500">
                  Sign in to your account and join us
                </p>
              </div>

              {error && (
                <div style={{ color: "red", marginBottom: "16px" }}>{error}</div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Role */}
                <div className="mb-24" style={{ position: "relative", maxWidth: "480px", width: "100%" }}>
                  <label htmlFor="role" className="fw-medium text-lg text-neutral-500 mb-16">
                    Select Role
                  </label>
                  <div style={{ position: "relative" }}>
                    <select
                      id="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      style={{
                        display: "block",
                        width: "100%",
                        padding: "14px 48px 14px 24px",
                        border: "1px solid #ccc",
                        borderRadius: "50px",
                        fontSize: "16px",
                        appearance: "none",
                      }}
                    >
                      <option value="student">Student</option>
                      <option value="teacher">Teacher</option>
                    </select>
                    <CaretDown
                      size={20}
                      style={{
                        position: "absolute",
                        right: "16px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-24" style={{ maxWidth: "480px", width: "100%" }}>
                  <label htmlFor="email" className="fw-medium text-lg text-neutral-500 mb-16">
                    Enter Your Email ID
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email..."
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "14px 24px",
                      border: "1px solid #ccc",
                      borderRadius: "50px",
                      fontSize: "16px",
                    }}
                  />
                </div>

                {/* Password */}
                <div className="mb-16" style={{ maxWidth: "480px", width: "100%" }}>
                  <label htmlFor="password" className="fw-medium text-lg text-neutral-500 mb-16">
                    Enter Your Password
                  </label>
                  <div className="position-relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Your Password..."
                      style={{
                        width: "100%",
                        padding: "14px 24px",
                        border: "1px solid #ccc",
                        borderRadius: "50px",
                        fontSize: "16px",
                      }}
                    />
                    <span
                      className={`toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y ph-bold ${passwordVisible ? "ph-eye" : "ph-eye-closed"}`}
                      onClick={togglePasswordVisibility}
                      style={{ cursor: "pointer" }}
                    ></span>
                  </div>
                </div>

                <div className="mt-40">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-main rounded-pill flex-center gap-8 mt-40"
                  >
                    {loading ? "Signing In..." : "Sign In"}
                    <i className="ph-bold ph-arrow-up-right d-flex text-lg" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-lg-6 d-lg-block d-none">
            <div className="account-img" ref={imgRef} style={{ overflow: "hidden" }}>
              <img
                src="assets/images/thumbs/banner-three-img2.webp"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInInner;
