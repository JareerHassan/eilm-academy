"use client"

import { ENDPOINTS } from '@/http/endpoints';
import React, { useState } from 'react';
import axios from 'axios';

const ApplyForAdmission = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    phone: '',
    gender: '',
    dateOfBirth: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    address: '',
    parentTitle: '',
    parentFullName: '',
    parentRelation: '',
    parentPhone: '',
    parentEmail: '',
    parentJobTitle: '',
    parentAddress: '',
    schoolName: '',
    passingYear: '',
    boardUniversity: '',
    classGrade: ''
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    const requiredFields = [
      { name: 'studentName', label: 'Student Name' },
      { name: 'email', label: 'Email' },
      { name: 'phone', label: 'Phone' },
      { name: 'gender', label: 'Gender' },
      { name: 'dateOfBirth', label: 'Date of Birth' },
      { name: 'city', label: 'City' },
      { name: 'state', label: 'State' },
      { name: 'country', label: 'Country' },
      { name: 'zipCode', label: 'Zip Code' },
      { name: 'parentTitle', label: 'Parent Title' },
      { name: 'parentFullName', label: 'Parent Full Name' },
      { name: 'parentRelation', label: 'Parent Relation' },
      { name: 'parentPhone', label: 'Parent Phone' },
      { name: 'parentEmail', label: 'Parent Email' },
      { name: 'parentJobTitle', label: 'Parent Job Title' },
      { name: 'schoolName', label: 'School Name' },
      { name: 'passingYear', label: 'Passing Year' },
      { name: 'boardUniversity', label: 'Board/University' },
      { name: 'classGrade', label: 'Class Grade' }
    ];

    requiredFields.forEach(field => {
      if (!formData[field.name]?.trim()) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (formData.parentEmail && !emailRegex.test(formData.parentEmail)) {
      newErrors.parentEmail = 'Please enter a valid email address';
    }

    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.parentPhone && !phoneRegex.test(formData.parentPhone)) {
      newErrors.parentPhone = 'Please enter a valid phone number';
    }

    if (formData.passingYear) {
      const year = parseInt(formData.passingYear);
      const currentYear = new Date().getFullYear();
      if (isNaN(year) || year < 1900 || year > currentYear) {
        newErrors.passingYear = 'Please enter a valid year';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setSubmitMessage('');

    try {
      const response = await axios.post(ENDPOINTS.applyaddmision, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setSubmitMessage(`✅ Application submitted successfully! Your Application ID: ${data.data.applicationId}`);
        setFormData({
          studentName: '', email: '', phone: '', gender: '', dateOfBirth: '',
          city: '', state: '', country: '', zipCode: '', address: '',
          parentTitle: '', parentFullName: '', parentRelation: '', parentPhone: '',
          parentEmail: '', parentJobTitle: '', parentAddress: '',
          schoolName: '', passingYear: '', boardUniversity: '', classGrade: ''
        });
        setErrors({});
      } else {
        setSubmitSuccess(false);
        setSubmitMessage(data.message || 'Failed to submit application');
      }
    } catch (error) {
      setSubmitSuccess(false);
      setSubmitMessage('Network error. Please try again.');
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-5 py-lg-7 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4 p-lg-5">
                <form onSubmit={handleSubmit}>
                  {/* Submit Message */}
                  {submitMessage && (
                    <div className={`alert alert-${submitSuccess ? 'success' : 'danger'} alert-dismissible fade show mb-4`} role="alert">
                      {submitMessage}
                      <button type="button" className="btn-close" onClick={() => setSubmitMessage('')} aria-label="Close"></button>
                    </div>
                  )}

                  {/* Personal Information */}
                  <div className="card border-0 shadow-sm mb-4">
                    <div className="card-header bg-primary text-white py-3">
                      <h5 className="card-title mb-0 fw-semibold">
                        <i className="bi bi-person-circle me-2"></i>
                        Personal Information
                      </h5>
                    </div>
                    <div className="card-body p-4">
                      <div className="row g-4">
                        <div className="col-md-6">
                          <label htmlFor="studentName" className="form-label fw-semibold text-dark">
                            Student Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${errors.studentName ? 'is-invalid' : ''}`}
                            id="studentName"
                            name="studentName"
                            value={formData.studentName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                          />
                          {errors.studentName && <div className="invalid-feedback">{errors.studentName}</div>}
                        </div>
                        
                        <div className="col-md-6">
                          <label htmlFor="email" className="form-label fw-semibold text-dark">
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                          />
                          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>

                        <div className="col-12">
                          <label htmlFor="phone" className="form-label fw-semibold text-dark">
                            Phone <span className="text-danger">*</span>
                          </label>
                          <input
                            type="tel"
                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1234567890"
                          />
                          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                        </div>

                        <div className="col-12">
                          <label className="form-label fw-semibold text-dark">
                            Gender <span className="text-danger">*</span>
                          </label>
                          <div className="row g-3">
                            <div className="col-auto">
                              <div className="form-check">
                                <input
                                  className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                                  type="radio"
                                  name="gender"
                                  id="Male"
                                  value="Male"
                                  checked={formData.gender === 'Male'}
                                  onChange={handleRadioChange}
                                />
                                <label className="form-check-label" htmlFor="Male">
                                  Male
                                </label>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="form-check">
                                <input
                                  className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                                  type="radio"
                                  name="gender"
                                  id="Female"
                                  value="Female"
                                  checked={formData.gender === 'Female'}
                                  onChange={handleRadioChange}
                                />
                                <label className="form-check-label" htmlFor="Female">
                                  Female
                                </label>
                              </div>
                            </div>
                          </div>
                          {errors.gender && <div className="invalid-feedback d-block">{errors.gender}</div>}
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="dateOfBirth" className="form-label fw-semibold text-dark">
                            Date of Birth <span className="text-danger">*</span>
                          </label>
                          <input
                            type="date"
                            className={`form-control ${errors.dateOfBirth ? 'is-invalid' : ''}`}
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                          />
                          {errors.dateOfBirth && <div className="invalid-feedback">{errors.dateOfBirth}</div>}
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="city" className="form-label fw-semibold text-dark">
                            City <span className="text-danger">*</span>
                          </label>
                          <select
                            className={`form-select ${errors.city ? 'is-invalid' : ''}`}
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                          >
                            <option value="">Select City</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chandpur">Chandpur</option>
                            <option value="Rajshahi">Rajshahi</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Khulna">Khulna</option>
                          </select>
                          {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                        </div>

                        <div className="col-md-4">
                          <label htmlFor="state" className="form-label fw-semibold text-dark">
                            State <span className="text-danger">*</span>
                          </label>
                          <select
                            className={`form-select ${errors.state ? 'is-invalid' : ''}`}
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                          >
                            <option value="">Select State</option>
                            <option value="Uttara">Uttara</option>
                            <option value="Mirpur">Mirpur</option>
                            <option value="Baddha">Baddha</option>
                            <option value="Gulshan">Gulshan</option>
                            <option value="Banani">Banani</option>
                          </select>
                          {errors.state && <div className="invalid-feedback">{errors.state}</div>}
                        </div>

                        <div className="col-md-4">
                          <label htmlFor="country" className="form-label fw-semibold text-dark">
                            Country <span className="text-danger">*</span>
                          </label>
                          <select
                            className={`form-select ${errors.country ? 'is-invalid' : ''}`}
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                          >
                            <option value="">Select Country</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Australia">Australia</option>
                            <option value="England">England</option>
                          </select>
                          {errors.country && <div className="invalid-feedback">{errors.country}</div>}
                        </div>

                        <div className="col-md-4">
                          <label htmlFor="zipCode" className="form-label fw-semibold text-dark">
                            Zip Code <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${errors.zipCode ? 'is-invalid' : ''}`}
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            placeholder="Enter zip code"
                          />
                          {errors.zipCode && <div className="invalid-feedback">{errors.zipCode}</div>}
                        </div>

                        <div className="col-12">
                          <label htmlFor="address" className="form-label fw-semibold text-dark">
                            Address
                          </label>
                          <textarea
                            className="form-control"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Enter your complete address"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Parent Details */}
                  <div className="card border-0 shadow-sm mb-4">
                    <div className="card-header bg-success text-white py-3">
                      <h5 className="card-title mb-0 fw-semibold">
                        <i className="bi bi-person-heart me-2"></i>
                        Parent/Guardian Details
                      </h5>
                    </div>
                    <div className="card-body p-4">
                      <div className="row g-4">
                        <div className="col-12">
                          <label className="form-label fw-semibold text-dark">
                            Title <span className="text-danger">*</span>
                          </label>
                          <div className="row g-3">
                            {['Mr', 'Mrs', 'Ms', 'Dr'].map((title) => (
                              <div key={title} className="col-auto">
                                <div className="form-check">
                                  <input
                                    className={`form-check-input ${errors.parentTitle ? 'is-invalid' : ''}`}
                                    type="radio"
                                    name="parentTitle"
                                    id={title}
                                    value={title}
                                    checked={formData.parentTitle === title}
                                    onChange={handleRadioChange}
                                  />
                                  <label className="form-check-label" htmlFor={title}>
                                    {title}.
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                          {errors.parentTitle && <div className="invalid-feedback d-block">{errors.parentTitle}</div>}
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="parentFullName" className="form-label fw-semibold text-dark">
                            Full Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${errors.parentFullName ? 'is-invalid' : ''}`}
                            id="parentFullName"
                            name="parentFullName"
                            value={formData.parentFullName}
                            onChange={handleChange}
                            placeholder="Enter full name"
                          />
                          {errors.parentFullName && <div className="invalid-feedback">{errors.parentFullName}</div>}
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="parentRelation" className="form-label fw-semibold text-dark">
                            Relation <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${errors.parentRelation ? 'is-invalid' : ''}`}
                            id="parentRelation"
                            name="parentRelation"
                            value={formData.parentRelation}
                            onChange={handleChange}
                            placeholder="Father/Mother/Guardian"
                          />
                          {errors.parentRelation && <div className="invalid-feedback">{errors.parentRelation}</div>}
                        </div>

                        <div className="col-12">
                          <label htmlFor="parentPhone" className="form-label fw-semibold text-dark">
                            Phone <span className="text-danger">*</span>
                          </label>
                          <input
                            type="tel"
                            className={`form-control ${errors.parentPhone ? 'is-invalid' : ''}`}
                            id="parentPhone"
                            name="parentPhone"
                            value={formData.parentPhone}
                            onChange={handleChange}
                            placeholder="+1234567890"
                          />
                          {errors.parentPhone && <div className="invalid-feedback">{errors.parentPhone}</div>}
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="parentEmail" className="form-label fw-semibold text-dark">
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className={`form-control ${errors.parentEmail ? 'is-invalid' : ''}`}
                            id="parentEmail"
                            name="parentEmail"
                            value={formData.parentEmail}
                            onChange={handleChange}
                            placeholder="Enter email address"
                          />
                          {errors.parentEmail && <div className="invalid-feedback">{errors.parentEmail}</div>}
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="parentJobTitle" className="form-label fw-semibold text-dark">
                            Job Title <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${errors.parentJobTitle ? 'is-invalid' : ''}`}
                            id="parentJobTitle"
                            name="parentJobTitle"
                            value={formData.parentJobTitle}
                            onChange={handleChange}
                            placeholder="Enter job title"
                          />
                          {errors.parentJobTitle && <div className="invalid-feedback">{errors.parentJobTitle}</div>}
                        </div>

                        <div className="col-12">
                          <label htmlFor="parentAddress" className="form-label fw-semibold text-dark">
                            Address
                          </label>
                          <textarea
                            className="form-control"
                            id="parentAddress"
                            name="parentAddress"
                            value={formData.parentAddress}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Enter complete address"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Education Details */}
                  <div className="card border-0 shadow-sm mb-5">
                    <div className="card-header bg-info text-white py-3">
                      <h5 className="card-title mb-0 fw-semibold">
                        <i className="bi bi-mortarboard-fill me-2"></i>
                        Educational Details
                      </h5>
                    </div>
                    <div className="card-body p-4">
                      <div className="row g-4">
                        <div className="col-md-6">
                          <label htmlFor="schoolName" className="form-label fw-semibold text-dark">
                            School/College Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${errors.schoolName ? 'is-invalid' : ''}`}
                            id="schoolName"
                            name="schoolName"
                            value={formData.schoolName}
                            onChange={handleChange}
                            placeholder="Enter school/college name"
                          />
                          {errors.schoolName && <div className="invalid-feedback">{errors.schoolName}</div>}
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="passingYear" className="form-label fw-semibold text-dark">
                            Year of Passing <span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            className={`form-control ${errors.passingYear ? 'is-invalid' : ''}`}
                            id="passingYear"
                            name="passingYear"
                            value={formData.passingYear}
                            onChange={handleChange}
                            placeholder="Enter year"
                            min="1900"
                            max={new Date().getFullYear()}
                          />
                          {errors.passingYear && <div className="invalid-feedback">{errors.passingYear}</div>}
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="boardUniversity" className="form-label fw-semibold text-dark">
                            Board/University <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${errors.boardUniversity ? 'is-invalid' : ''}`}
                            id="boardUniversity"
                            name="boardUniversity"
                            value={formData.boardUniversity}
                            onChange={handleChange}
                            placeholder="Enter board/university name"
                          />
                          {errors.boardUniversity && <div className="invalid-feedback">{errors.boardUniversity}</div>}
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="classGrade" className="form-label fw-semibold text-dark">
                            Class/Grade <span className="text-danger">*</span>
                          </label>
                          <select
                            className={`form-select ${errors.classGrade ? 'is-invalid' : ''}`}
                            id="classGrade"
                            name="classGrade"
                            value={formData.classGrade}
                            onChange={handleChange}
                          >
                            <option value="">Select Grade</option>
                            <option value="1st Class">1st Class</option>
                            <option value="2nd Class">2nd Class</option>
                            <option value="3rd Class">3rd Class</option>
                          </select>
                          {errors.classGrade && <div className="invalid-feedback">{errors.classGrade}</div>}
                        </div>

                        <div className="col-12">
                          <label className="form-label fw-semibold text-dark">
                            Submit Application
                          </label>
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg w-100 py-3 fw-semibold"
                            disabled={loading}
                          >
                            {loading ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Submitting Application...
                              </>
                            ) : (
                              <>
                                <i className="bi bi-check-circle-fill me-2"></i>
                                Submit Application
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyForAdmission;