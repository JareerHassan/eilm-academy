"use client";

import React, { useState } from "react";
import axios from "axios";
import { ENDPOINTS } from "@/http/endpoints";

const ApplyForAdmission = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    city: "",
    country: "",
    address: "",
    educationalQualification: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]?.trim()) newErrors[key] = "Required";
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSubmitMessage("");

    try {
      await axios.post(ENDPOINTS.applyaddmision, formData);

      setSubmitSuccess(true);
      setSubmitMessage("Application submitted successfully!");
      setFormData({
        studentName: "",
        email: "",
        phone: "",
        gender: "",
        dateOfBirth: "",
        city: "",
        country: "",
        address: "",
        educationalQualification: "",
      });
    } catch (error) {
      setSubmitSuccess(false);
      setSubmitMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    height: "48px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    padding: "10px 14px",
    fontSize: "15px"
  };

  const labelStyle = {
    fontWeight: 600,
    marginBottom: "6px"
  };

  return (
    <section style={{ padding: "60px 0" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            <div style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              padding: "40px"
            }}>



              <form onSubmit={handleSubmit}>

                {submitMessage && (
                  <div className={`alert ${submitSuccess ? "alert-success" : "alert-danger"}`}>
                    {submitMessage}
                  </div>
                )}

                <div className="row g-3">

                  <div className="col-12">
                    <label style={labelStyle}>Student Name</label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      style={inputStyle}
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-6">
                    <label style={labelStyle}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={inputStyle}
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-6">
                    <label style={labelStyle}>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={inputStyle}
                      className="form-control"
                    />
                  </div>

                  <div className="col-12">
                    <label style={labelStyle}>Gender</label>

                    <div style={{
                      display: "flex",
                      gap: "12px",
                      marginTop: "6px"
                    }}>

                      {["Male", "Female"].map((g) => {
                        const isSelected = formData.gender === g;

                        return (
                          <label
                            key={g}
                            style={{
                              flex: 1,
                              cursor: "pointer",
                              padding: "12px 0",
                              textAlign: "center",
                              borderRadius: "8px",
                              border: isSelected ? "2px solid #002366" : "1px solid #ddd",
                              background: isSelected ? "#002366" : "#fff",
                              color: isSelected ? "#fff" : "#333",
                              fontWeight: 600,
                              transition: "0.2s"
                            }}
                          >
                            <input
                              type="radio"
                              name="gender"
                              value={g}
                              checked={isSelected}
                              onChange={handleRadioChange}
                              style={{ display: "none" }}
                            />
                            {g}
                          </label>
                        );
                      })}

                    </div>

                    {errors.gender && (
                      <div style={{ color: "red", fontSize: "13px", marginTop: "5px" }}>
                        {errors.gender}
                      </div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label style={labelStyle}>Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      style={inputStyle}
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-6">
                    <label style={labelStyle}>City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      style={inputStyle}
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-6">
                    <label style={labelStyle}>Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      style={inputStyle}
                      className="form-control"
                    />
                  </div>

                  <div className="col-12">
                    <label style={labelStyle}>Educational Qualification</label>
                    <input
                      type="text"
                      name="educationalQualification"
                      value={formData.educationalQualification}
                      onChange={handleChange}
                      style={inputStyle}
                      className="form-control"
                    />
                  </div>

                  <div className="col-12">
                    <label style={labelStyle}>Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="form-control"
                      style={{ ...inputStyle, height: "90px" }}
                    />
                  </div>


                  <div className="col-12 ">
                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        width: "100%",
                        height: "50px",
                        borderRadius: "8px",
                        background: "#002366",
                        border: "none",
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "600",
                        marginTop: '20px'

                      }}
                    >
                      {loading ? "Submitting..." : "Submit Application"}
                    </button>
                  </div>

                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyForAdmission;
