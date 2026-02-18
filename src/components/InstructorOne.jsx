"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const InstructorAll = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await axios.get(
          "https://eilmbackend.oxmite.com/api/teachers"
        );
        setInstructors(response.data);
      } catch (error) {
        console.error("Error fetching instructors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstructors();
  }, []);

  if (loading) {
    return <p className="text-center py-20">Loading instructors...</p>;
  }

  return (
    <section className="instructor py-120 position-relative z-1">
      <img
        src="assets/images/shapes/shape2.png"
        alt=""
        className="shape one animation-scalation"
      />
      <img
        src="assets/images/shapes/shape6.png"
        alt=""
        className="shape six animation-scalation"
      />
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="mb-24">Course Instructors</h2>
          <p>
            Join us on this journey of discovery, growth, and transformation.
            Together, let's shape a brighter future
          </p>
        </div>

        <div className="row gy-4">
          {instructors.map((instructor) => (
            <div key={instructor._id} className="col-lg-4 col-sm-6">
              <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                  <div
                   
                    className="w-100 h-100 d-flex align-items-end"
                  >
                    <div
                      className="rounded-12 overflow-hidden position-relative bg-dark-yellow"
                      style={{ width: "100%", height: "400px" }} // fixed height for all images
                    >
                  
                        <img
                          src={
                            instructor.imageLink
                              ? instructor.imageLink
                              : `https://ui-avatars.com/api/?name=${instructor.name}&background=ffd700&color=000`
                          }
                          alt={instructor.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover", // makes image fill container without stretching
                            display: "block",
                          }}
                        />
                    </div>

                  </div>
                </div>
                <div className="p-24 position-relative">
                  <div className="social-infos">
                    <ul className="social-list flex-align flex-column gap-12 mb-12">
                      {/* You can add real links if available */}
                      <li className="social-list__item">
                        <a
                          href="#"
                          className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white"
                        >
                          <i className="ph-bold ph-facebook-logo" />
                        </a>
                      </li>
                      <li className="social-list__item">
                        <a
                          href="#"
                          className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white"
                        >
                          <i className="ph-bold ph-twitter-logo" />
                        </a>
                      </li>
                      <li className="social-list__item">
                        <a
                          href="#"
                          className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white"
                        >
                          <i className="ph-bold ph-instagram-logo" />
                        </a>
                      </li>
                    </ul>
                    <button className="social-infos__button flex-center w-44 h-44 bg-white text-main-600 rounded-circle text-2xl transition-2">
                      <i className="ph-bold ph-plus" />
                    </button>
                  </div>

                  <div>
                    <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                      {/* <Link
                        href={`/instructor-details/${instructor._id}`}
                        className="link text-line-2"
                      > */}
                        {instructor.name}
                      {/* </Link> */}
                    </h4>

                    <div className="flex-between gap-8 flex-wrap mb-16">
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-lightbulb" />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          Instructor
                        </span>
                      </div>
                       <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-users" />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          {instructor.students.length} Students
                        </span>
                      </div>
                      {/* <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-watch" />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          {instructor.courses.length} Course
                        </span>
                      </div> */}
                    </div>

                    <div className="flex-between gap-8 flex-wrap">
                     
                      {/* <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="text-lg text-neutral-700">
                          4.6<span className="text-neutral-100">(2.4k)</span>
                        </span>
                      </div> */}
                    </div>
                  </div>

                  {/* <div className="pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <Link
                      href={`/instructor-details/${instructor._id}`}
                      className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                      tabIndex={0}
                    >
                      View Profile
                      <i className="ph ph-arrow-right" />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorAll;
