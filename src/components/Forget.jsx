"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Eye, EyeClosed } from "phosphor-react";
import StudentSidebar from "@/components/StudentSidebar";
import { ENDPOINTS } from "@/http/endpoints";

const ForgetPassword = () => {
    const [formData, setFormData] = useState({
        email: "",
        currentPassword: "",
        newPassword: "",
    });
    const [loading, setLoading] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    useEffect(() => {
        const studentId = localStorage.getItem("studentId");
        if (!studentId) return;

        const fetchStudent = async () => {
            try {
                const res = await axios.get(ENDPOINTS.getStudentById(studentId));
                const student = res.data;

                if (student) {
                    setFormData({
                        email: student.email || "",
                        currentPassword: student.password || "",
                        newPassword: "",
                    });
                }
            } catch (err) {
                console.error("Error fetching student data:", err);
            }
        };

        fetchStudent();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Real-time validation for new password
        if (name === "newPassword") {
            if (value.length < 6) {
                setSubmitMessage("Password must be at least 6 characters");
                setSubmitSuccess(false);
            } else {
                setSubmitMessage("");
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitMessage("");

        // Check if new password is at least 6 characters
        if (!formData.currentPassword || !formData.newPassword) {
            setSubmitMessage("Please enter current and new password");
            setSubmitSuccess(false);
            setLoading(false);
            return;
        }

        if (formData.newPassword.length < 6) {
            setSubmitMessage("Password must be at least 6 characters");
            setSubmitSuccess(false);
            setLoading(false);
            return;
        }

        try {
            await axios.put(ENDPOINTS.updateStudentPassword, {
                email: formData.email,
                oldPassword: formData.currentPassword,
                newPassword: formData.newPassword,
            });

            setSubmitSuccess(true);
            setSubmitMessage("Password updated successfully!");
            setFormData((prev) => ({ ...prev, newPassword: "" }));
        } catch (error) {
            setSubmitSuccess(false);
            const msg =
                error?.response?.data?.message ||
                error?.response?.data?.error ||
                error?.message ||
                "Something went wrong.";
            setSubmitMessage(msg);
        } finally {
            setLoading(false);
        }
    };

    const inputStyle = {
        height: "48px",
        borderRadius: "8px",
        border: "1px solid #ddd",
        padding: "10px 14px",
        fontSize: "15px",
    };

    const labelStyle = {
        fontWeight: 600,
        marginBottom: "6px",
    };

    const passwordWrapperStyle = {
        position: "relative",
        display: "flex",
        alignItems: "center",
    };

    const eyeIconStyle = {
        position: "absolute",
        right: "12px",
        cursor: "pointer",
    };

    return (
        <div style={{ display: "flex", overflowX: "hidden" }}>
            <StudentSidebar />

            <div
                style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                    padding: "20px",
                    boxSizing: "border-box",
                }}
            >
                <div
                    style={{
                        maxWidth: "600px",
                        width: "100%",
                        margin: 0,
                        background: "#fff",
                        borderRadius: "12px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                        padding: "40px",
                        boxSizing: "border-box",
                    }}
                >
                    <h3 style={{ marginBottom: "20px", color: "#458EFF" }}>Change Password</h3>

                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: "16px" }}>
                            <label style={labelStyle}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                style={{ ...inputStyle, backgroundColor: "#f5f5f5" }}
                                className="form-control"
                                readOnly
                            />
                        </div>

                        <div style={{ marginBottom: "16px" }}>
                            <label style={labelStyle}>Current Password</label>
                            <div style={passwordWrapperStyle}>
                                <input
                                    type={showCurrentPassword ? "text" : "password"}
                                    name="currentPassword"
                                    value={formData.currentPassword}
                                    style={{ ...inputStyle, flex: 1, backgroundColor: "#f5f5f5" }}
                                    readOnly
                                />
                                <span
                                    style={eyeIconStyle}
                                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                >
                                    {showCurrentPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
                                </span>
                            </div>
                        </div>

                        <div style={{ marginBottom: "16px" }}>
                            <label style={labelStyle}>New Password</label>
                            <div style={passwordWrapperStyle}>
                                <input
                                    type={showNewPassword ? "text" : "password"}
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                    style={inputStyle}
                                    className="form-control"
                                    required
                                />
                                <span
                                    style={eyeIconStyle}
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                >
                                    {showNewPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                width: "100%",
                                height: "50px",
                                borderRadius: "8px",
                                background: "#458EFF",
                                border: "none",
                                color: "#fff",
                                fontSize: "16px",
                                fontWeight: "600",
                                marginTop: "10px",
                            }}
                        >
                            {loading ? "Updating..." : "Update Password"}
                        </button>

                        {submitMessage && (
                            <div
                                style={{
                                    marginTop: "15px",
                                    padding: "12px 16px",
                                    borderRadius: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    backgroundColor: submitSuccess ? "#28a745" : "#dc3545",
                                    color: "#fff",
                                    fontWeight: 600,
                                }}
                            >
                                {submitSuccess && (
                                    <span
                                        style={{
                                            width: "24px",
                                            height: "24px",
                                            borderRadius: "50%",
                                            background: "#fff",
                                            color: "#28a745",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        ✓
                                    </span>
                                )}
                                <span>{submitMessage}</span>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
