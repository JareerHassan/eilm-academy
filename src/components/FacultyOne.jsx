"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
// import axios from "axios";
// import { ENDPOINTS } from "@/http/endpoints";

const FacultyOne = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // API ko comment kiya gaya
    /*
    const fetchCourses = async () => {
      try {
        const res = await axios.get(ENDPOINTS.courses);
        setCourses(res.data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };
    fetchCourses();
    */

    // Sample 3 dynamic courses with slug
    const sampleCourses = [
      {
        _id: "1",
        title: "Tafseer",
        category: "Qur'an",
        status: "Launched",
        imageLink: "https://res.cloudinary.com/dx0naofle/image/upload/v1771492980/Untitled-2-01.jpg_o8quto.jpg",
        slug: "Tafseer",
      },
      {
        _id: "2",
        title: "Fiqh",
        category: "Fiqh",
        status: "Coming Soon",
        imageLink: "https://res.cloudinary.com/dx0naofle/image/upload/v1771492979/Untitled-2-03.jpg_qpffqv.jpg",
        slug: "Fiqh",
      },
      {
        _id: "3",
        title: "Arabic",
        category: "Arabic",
        status: "Coming Soon",
        imageLink: "https://res.cloudinary.com/dx0naofle/image/upload/v1771399360/WhatsApp_Image_2026-02-18_at_12.18.36_PM_1_p0au1l.jpg",
        slug: "Arabic",
      },
    ];

    setCourses(sampleCourses);
  }, []);

  const getBadgeStyle = (course) =>
    ["admission open", "launched", "lunched"].includes(course.status?.toLowerCase())
      ? "bg-main-three-600 text-white"
      : "bg-neutral-400 text-white";

  return (
    <section className="faculty pb-120 bg-main-25">
      <div className="container">
        <div className="section-heading text-center">
          <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
            <span className="text-main-600 text-2xl d-flex">
              <i className="ph-bold ph-book-open" />
            </span>
            <h5 className="text-main-600 mb-0">
              Explore Courses of Eilm Academy
            </h5>
          </div>
          <h2 className="mb-24 wow bounceIn">Islamic Courses Online</h2>
          <p className="wow bounceInUp">
            Discover structured Islamic courses designed for all levels, covering Qur’an recitation, Tajweed, Hadith studies, Hanafi Fiqh, Arabic language, and complete Dars-e-Nizami. Each course is guided by qualified scholars to build authentic knowledge, strong practice, and Islamic character.
          </p>
        </div>

        <div className="row gy-4">
          {courses.map((course, index) => {
            return (
              <div
                key={course._id}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration={200 + index * 100}
              >
                <div className="scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md"> 
                            
                  <div className=" rounded-12 overflow-hidden position-relative" >
                    <Link
                      href={`/course-details/${course.slug}`}
                      style={{
                        aspectRatio: "4 / 3",
                        width: "100%",
                     
                      }}
                    >
                      <img
                        src={course.imageLink}
                        alt={course.title}
                        style={{
                          width: "100%",
                          objectFit: "cover",
                          display: "block",
                          borderRadius: "12px",
                        }}
                      />
                    </Link>
                  </div>

                  <div className="pt-32 pb-24 px-16 position-relative">
                    {/* <span className={`text-up py-12 px-24 rounded-8 fw-medium ${getBadgeStyle(course)}`}>
                      {course.status || "Coming Soon"}
                    </span> */}

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
                    </div>

                    <h4 className="mb-28">
                      <Link
                        href={`/course-details/${course.slug}`}
                        className="link text-line-2"
                      >
                        {course.title}
                      </Link>
                    </h4>

                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      {course.status &&
                      ["admission open", "launched", "lunched"].includes(course.status.toLowerCase()) ? (
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FacultyOne;
