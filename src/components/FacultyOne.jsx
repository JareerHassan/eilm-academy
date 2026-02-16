"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { ENDPOINTS } from "@/http/endpoints";

const FacultyOne = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(ENDPOINTS.courses);
        setCourses(res.data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };
    fetchCourses();
  }, []);

  // Badge color based on status
  const getBadgeStyle = (course) => {
    return course.title === "Tafseer" ? "bg-main-three-600 text-white" : "bg-neutral-400 text-white";
  };

  return (
    <section className="faculty pb-120 bg-main-25">
      <div className="container">
        <div className="section-heading text-center">
          <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
            <span className="text-main-600 text-2xl d-flex">
              <i className="ph-bold ph-book-open" />
            </span>
            <h5 className="text-main-600 mb-0">
              Explore Faculty of E-ILM-Academy
            </h5>
          </div>
          <h2 className="mb-24 wow bounceIn">Top Islamic Faculty</h2>
          <p className="wow bounceInUp">
            Join our esteemed faculty offering authentic Islamic knowledge, Qur’an studies, Hadith, Fiqh, and modern Islamic sciences.
          </p>
        </div>

        <div className="row gy-4">
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <div
                key={course._id}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration={200 + index * 100}
              >
                <div className="scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                    <Link href={`/course-details/${course._id}`} className="w-100 h-100">
                      <img
                        src={course.image || "assets/images/thumbs/faculty-img1.webp"}
                        alt={course.title}
                        className="scale-hover-item__img rounded-12 cover-img transition-2"
                        style={{ width: "100%", height: "250px", objectFit: "cover", display: "block" }}
                      />
                    </Link>
                  </div>

                  <div className="pt-32 pb-24 px-16 position-relative">
                    {/* Dynamic Status Badge */}
                    <span className={`text-up py-12 px-24 rounded-8 fw-medium ${getBadgeStyle(course)}`}>
                      {course.title === "Tafseer" ? "Admission Open" : "Coming Soon"}
                    </span>

                    <div className="flex-between gap-8 flex-wrap mb-16">
                      <Link
                        href={`/course?category=${course.category}`}
                        className="py-8 px-20 rounded-8 flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white"
                      >
                        <span className="text-xl d-flex">
                          {course.category}
                          <i className="ph-bold ph-squares-four" />
                        </span>
                      </Link>
                      <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="text-lg text-neutral-700">
                          {course.rating || 4.9}
                          <span className="text-neutral-100">({course.reviews || "1k"})</span>
                        </span>
                      </div>
                    </div>

                    <h4 className="mb-28">
                      <Link href={`/course-details/${course._id}`} className="link text-line-2">
                        {course.title}
                      </Link>
                    </h4>

                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      {course.title === "Tafseer" ? (
                        <Link
                          href="/apply-admission"
                          className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                        >
                          Apply Now
                          <i className="ph ph-arrow-right" />
                        </Link>
                      ) : (
                        <span className="flex-align gap-8 text-neutral-600 fw-semibold">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <h3 className="text-main-600">No Courses Found</h3>
              <p className="text-muted">Please check back later.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FacultyOne;
