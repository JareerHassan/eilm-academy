"use client";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";
import Link from "next/link";

// React Icons imports (Feather icons for clean look)
import { FiBookOpen, FiArrowRight, FiLogIn, FiDownload, FiArrowRightCircle } from "react-icons/fi";

const BannerThree = () => {
  const sliderRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let WOW;
    if (typeof window !== "undefined") {
      WOW = require("wowjs");
      const wowInstance = new WOW.WOW({ live: false });
      wowInstance.init();
    }
  }, []);

  const handleBeforeChange = () => {
    if (typeof document !== "undefined") {
      const wowElements = document.querySelectorAll(".wow");
      wowElements.forEach((el) => {
        el.style.visibility = "hidden";
        el.classList.remove("animated");
      });
    }
  };

  const handleAfterChange = () => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs");
      const wowInstance = new WOW.WOW({ live: false });
      wowInstance.init();

      const wowElements = document.querySelectorAll(".wow");
      wowElements.forEach((el) => {
        el.style.visibility = "visible";
      });
    }
  };

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 900,
    dots: false,
    pauseOnHover: true,
    arrows: false,
    draggable: true,
    infinite: true,
    fade: true,

    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 7000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 7000,
        },
      },
    ],
  };

  return (
    <section className="banner-three position-relative responsive-arrow overflow-hidden">
      <div className="d-none d-lg-block">
        <button
          type="button"
          id="banner-three-prev"
          onClick={() => sliderRef.current.slickPrev()}
          className="slick-arrow-prev slick-arrow flex-center rounded-circle bg-white text-main-600 hover-border-main-600 sm:text-lg text-2xl hover-bg-main-600 hover-text-white transition-1 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 position-absolute ms-4 md:ms-8 lg:ms-16 inset-inline-start-0 top-50 translate-middle-y z-3"
        >
          <i className="ph-bold ph-arrow-left" />
        </button>
        <button
          type="button"
          id="banner-three-next"
          onClick={() => sliderRef.current.slickNext()}
          className="slick-arrow-next slick-arrow flex-center rounded-circle bg-white text-main-600 hover-border-main-600 sm:text-lg text-2xl hover-bg-main-600 hover-text-white transition-1 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 position-absolute me-4 md:me-8 lg:me-16 inset-inline-end-0 top-50 translate-middle-y z-3"
        >
          <i className="ph-bold ph-arrow-right" />
        </button>
      </div>

      <Slider ref={sliderRef} {...settings} className="banner-three__slider">
        {/* SLIDE 1 – Authentic Islamic Learning */}
        <div>
          <div
            className="banner-three__item background-img bg-img linear-overlay position-relative"
            style={{
              backgroundImage: `url("/assets/images/thumbs/banner-three-img1.webp")`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 col-xl-8 col-xxl-6 col-lg-10 z-1">
                  <div className="banner-content pe-md-4">
                    <div className="flex-align gap-8 mb-16 wow bounceInDown">
                      <span className="text-yellow-600 text-2xl d-flex">
                        <FiBookOpen /> {/* Replaced ph-book-open with react-icons */}
                      </span>
                      <h5 className="text-yellow-600 mb-0 fw-medium">
                        Eilm Academy
                      </h5>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:display2 mb-24 text-white fw-medium wow bounceInLeft">
                      Authentic Islamic Learning{" "}
                      <span
                        className="text-yellow-600 wow bounceInRight"
                        data-wow-duration="2s"
                        data-wow-delay=".5s"
                      >
                        – From Basics to Scholarship
                      </span>
                    </h1>
                    <p className="text-white wow bounceInDown" style={{ lineHeight: "1.6", whiteSpace: "normal" }}>
                      Online education in Qur’an, Hadith, Hanafi Fiqh, Arabic, and Complete Dars-e-Nizami. Structured classes with qualified scholars — learn from the comfort of your home.
                    </p>
                    <ul className="text-white list-unstyled mt-3 wow bounceInDown">
                      <li>🔹 Live & Recorded Classes</li>
                      <li>🔹 Structured Levels (Beginner to Advanced)</li>
                      <li>🔹 Separate Programs for Brothers & Sisters</li>
                      <li>🔹 Certificate Courses</li>
                    </ul>
                    <div className="mt-4 mb-3 text-white fw-bold wow bounceInDown">Admissions Open</div>
                  </div>
                  <div className="buttons-wrapper flex-align flex-wrap gap-24 mt-40">
                    <Link
                      href="/apply"
                      className="btn btn-main rounded-pill flex-align gap-8 wow bounceInLeft"
                      data-wow-duration="1s"
                      data-wow-delay=".5s"
                    >
                      Apply Now
                      <FiArrowRight className="text-lg" />
                    </Link>
                    <Link
                      href="/course"
                      className="btn btn-outline-light rounded-pill flex-align gap-8 wow bounceInRight hover:bg-white hover:text-main-600 transition-all"
                      data-wow-duration="1s"
                      data-wow-delay=".5s"
                    >
                      <FiBookOpen className="text-lg" />
                      Explore Courses
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 2 – Structured Islamic Education */}
        <div>
          <div
            className="banner-three__item background-img bg-img linear-overlay position-relative"
            style={{
              backgroundImage: `url("/assets/images/thumbs/banner-three-img2.webp")`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 col-xl-8 col-xxl-6 col-lg-10 z-1">
                  <div className="banner-content pe-md-4">
                    <div className="flex-align gap-8 mb-16 wow bounceInDown">
                      <span className="text-yellow-600 text-2xl d-flex">
                        <FiBookOpen />
                      </span>
                      <h5 className="text-yellow-600 mb-0 fw-medium">
                        Learn Qur’an, Hadith & Fiqh with Qualified Scholars
                      </h5>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:display2 mb-24 text-white fw-medium wow bounceInLeft">
                      Structured Islamic{" "}
                      <span
                        className="text-yellow-600 wow bounceInRight"
                        data-wow-duration="2s"
                        data-wow-delay=".5s"
                      >
                        Education
                      </span>
                    </h1>
                    <p className="text-white wow bounceInDown" style={{ lineHeight: "1.6", whiteSpace: "normal" }}>
                      A complete step-by-step curriculum designed to build strong Islamic foundations and advanced scholarship. From Qur’an Nazra and Tajweed to Tafsir, Hadith, and Fiqh specialization — everything structured in progressive levels.
                    </p>
                    <ul className="text-white list-unstyled mt-3 wow bounceInDown">
                      <li>🔹 Beginner, Intermediate & Advanced Tracks</li>
                      <li>🔹 Weekly Live Interactive Classes</li>
                      <li>🔹 Revision & Recorded Access</li>
                      <li>🔹 Authentic Hanafi Scholarship</li>
                    </ul>
                  </div>
                  <div className="buttons-wrapper flex-align flex-wrap gap-24 mt-40">
                    <Link
                      href="/programs"
                      className="btn btn-main rounded-pill flex-align gap-8 wow bounceInLeft"
                      data-wow-duration="1s"
                      data-wow-delay=".5s"
                    >
                      View Programs
                      <FiArrowRight className="text-lg" />
                    </Link>
                    <Link
                      href="/join"
                      className="btn btn-outline-light rounded-pill flex-align gap-8 wow bounceInRight hover:bg-white hover:text-main-600 transition-all"
                      data-wow-duration="1s"
                      data-wow-delay=".5s"
                    >
                      <FiArrowRightCircle className="text-lg" />
                      Join Today
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 3 – Complete Online Dars-e-Nizami */}
        <div>
          <div
            className="banner-three__item background-img bg-img linear-overlay position-relative"
            style={{
              backgroundImage: `url("/assets/images/thumbs/banner-three-img3.webp")`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 col-xl-8 col-xxl-6 col-lg-10 z-1">
                  <div className="banner-content pe-md-4">
                    <div className="flex-align gap-8 mb-16 wow bounceInDown">
                      <span className="text-yellow-600 text-2xl d-flex">
                        <FiBookOpen />
                      </span>
                      <h5 className="text-yellow-600 mb-0 fw-medium">
                        Become an Alim / Alimah through Structured Online Learning
                      </h5>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:display2 mb-24 text-white fw-medium wow bounceInLeft">
                      Complete Online{" "}
                      <span
                        className="text-yellow-600 wow bounceInRight"
                        data-wow-duration="2s"
                        data-wow-delay=".5s"
                      >
                        Dars-e-Nizami
                      </span>
                    </h1>
                    <p className="text-white wow bounceInDown" style={{ lineHeight: "1.6", whiteSpace: "normal" }}>
                      Enroll in our complete Online Dars-e-Nizami Program covering Arabic grammar, Usul al-Fiqh, Hadith sciences, Tafsir, and classical Islamic texts. Designed for serious students seeking deep knowledge with spiritual development.
                    </p>
                    <ul className="text-white list-unstyled mt-3 wow bounceInDown">
                      <li>🔹 Traditional Curriculum</li>
                      <li>🔹 Scholarly Guidance</li>
                      <li>🔹 Separate Classes for Brothers & Sisters</li>
                      <li>🔹 Certificate Upon Completion</li>
                    </ul>
                  </div>
                  <div className="buttons-wrapper flex-align flex-wrap gap-24 mt-40">
                    <Link
                      href="/dars-e-nizami"
                      className="btn btn-main rounded-pill flex-align gap-8 wow bounceInLeft"
                      data-wow-duration="1s"
                      data-wow-delay=".5s"
                    >
                      Apply for Dars-e-Nizami
                      <FiLogIn className="text-lg" />
                    </Link>
                    <Link
                      href="/prospectus"
                      className="btn btn-outline-light rounded-pill flex-align gap-8 wow bounceInRight hover:bg-white hover:text-main-600 transition-all"
                      data-wow-duration="1s"
                      data-wow-delay=".5s"
                    >
                      <FiDownload className="text-lg" />
                      Download Prospectus
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="kDvSVHghxr8"
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />
    </section>
  );
};

export default BannerThree;