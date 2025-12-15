"use client";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";
import Link from "next/link";
const BannerThree = () => {
  const sliderRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let WOW;
    if (typeof window !== "undefined") {
      WOW = require("wowjs");
      // Set the mobile/tablet threshold higher to potentially disable animations on smaller screens
      // I will keep live: false and let the afterChange/beforeChange manage visibility
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
    autoplaySpeed: 2000,
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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className='banner-three position-relative responsive-arrow overflow-hidden'>
      {/* 1. Improved Arrow Responsiveness: Smaller size and margin on mobile (sm: and md: prefixes added) */}
      <button
        type='button'
        id='banner-three-prev'
        onClick={() => sliderRef.current.slickPrev()}
        // New: Base size for mobile (w-40 h-40), medium (md:w-48 md:h-48), large (lg:w-56 lg:h-56)
        className='slick-arrow-prev slick-arrow flex-center rounded-circle bg-white text-main-600 hover-border-main-600 sm:text-lg text-2xl hover-bg-main-600 hover-text-white transition-1 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 position-absolute ms-4 md:ms-8 lg:ms-16 inset-inline-start-0 top-50 translate-middle-y z-3'
      >
        <i className='ph-bold ph-arrow-left' />
      </button>
      <button
        type='button'
        id='banner-three-next'
        onClick={() => sliderRef.current.slickNext()}
        // New: Base size for mobile (w-40 h-40), medium (md:w-48 md:h-48), large (lg:w-56 lg:h-56)
        className='slick-arrow-next slick-arrow flex-center rounded-circle bg-white text-main-600 hover-border-main-600 sm:text-lg text-2xl hover-bg-main-600 hover-text-white transition-1 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 position-absolute me-4 md:me-8 lg:me-16 inset-inline-end-0 top-50 translate-middle-y z-3'
      >
        <i className='ph-bold ph-arrow-right' />
      </button>
      <Slider ref={sliderRef} {...settings} className='banner-three__slider '>
        <div>
          <div
            className='banner-three__item background-img bg-img linear-overlay position-relative'
            style={{
              backgroundImage: `url(${"/assets/images/thumbs/banner-three-img1.webp"})`,
            }}
          >
            <div className='container'>
              <div className='row'>
                {/* 2. Content Column width adjusted for small screens: Take full width on small screens, then scale down */}
                <div className='col-12 col-xl-8 col-xxl-6 col-lg-10 z-1'>
                  <div className='banner-content pe-md-4'>
                    <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                      <span className='text-yellow-600 text-2xl d-flex'>
                        <i className='ph-bold ph-book-open' />
                      </span>
                      <h5 className='text-yellow-600 mb-0 fw-medium'>
                        Elevate Your Learning
                      </h5>
                    </div>
                    {/* 3. Heading Size Responsiveness: Use a smaller class on mobile (text-4xl) and display2 on larger screens */}
                    <h1 className='text-4xl sm:text-5xl md:display2 mb-24 text-white fw-medium wow bounceInLeft'>
                      Inspiring Faith,{" "}
                      <span
                        className='text-yellow-600 wow bounceInRight'
                        data-wow-duration='2s'
                        data-wow-delay='.5s'
                      >
                        {" "}
                        Enlightening{" "}
                      </span>{" "}
                      Hearts
                    </h1>

                    <p className='text-white text-line-2 wow bounceInDown'>
                      Welcome to E-ILM-Academy, your gateway to authentic Islamic knowledge —
                      guiding students, seekers, and learners toward spiritual growth and understanding.
                    </p>

                  </div>
                  <div className='buttons-wrapper flex-align flex-wrap gap-24 mt-40'>
                    <Link
                      href='/sign-in'
                      className='btn btn-main rounded-pill flex-align gap-8  wow bounceInLeft'
                      data-wow-duration='1s'
                      data-wow-delay='.5s'
                    >
                      Apply Now
                      <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                    </Link>
                    <div
                      className='flex-align gap-16  wow bounceInRight'
                      data-wow-duration='1s'
                      data-wow-delay='.5s'
                    >
                      <span
                        onClick={() => setIsOpen(true)}
                        className='play-button position-relative z-1 w-48 h-48 flex-center bg-main-two-600 text-white rounded-circle text-xl'
                      >
                        <i className='ph-fill ph-play' />
                      </span>
                      <Link
                        href='/course'
                        className='text-white hover-text-decoration-underline hover-text-main-two-600'
                      >
                        See E-ILM-Academy
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className='banner-three__item background-img bg-img linear-overlay position-relative'
            style={{
              backgroundImage: `url(${"/assets/images/thumbs/banner-three-img2.webp"})`,
            }}
          >
            <div className='container'>
              <div className='row'>
                <div className='col-12 col-xl-8 col-xxl-6 col-lg-10 z-1'>
                  <div className='banner-content pe-md-4'>
                    <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                      <span className='text-yellow-600 text-2xl d-flex'>
                        <i className='ph-bold ph-book-open' />
                      </span>
                      <h5 className='text-yellow-600 mb-0 fw-medium'>
                        Elevate Your Learning
                      </h5>
                    </div>
                    {/* 3. Heading Size Responsiveness: Use a smaller class on mobile (text-4xl) and display2 on larger screens */}
                    <h1 className='text-4xl sm:text-5xl md:display2 mb-24 text-white fw-medium wow bounceInLeft'>
                      Inspiring Faith,{" "}
                      <span
                        className='text-yellow-600 wow bounceInRight'
                        data-wow-duration='2s'
                        data-wow-delay='.5s'
                      >
                        {" "}
                        Enlightening{" "}
                      </span>{" "}
                      Hearts
                    </h1>

                    <p className='text-white text-line-2 wow bounceInDown'>
                      Welcome to E-ILM-Academy, your gateway to authentic Islamic knowledge —
                      guiding students, seekers, and learners toward spiritual growth and understanding.
                    </p>

                  </div>
                  <div className='buttons-wrapper flex-align flex-wrap gap-24 mt-40'>
                    <Link
                      href='/sign-in'
                      className='btn btn-main rounded-pill flex-align gap-8  wow bounceInLeft'
                      data-wow-duration='1s'
                      data-wow-delay='.5s'
                    >
                      Apply Now
                      <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                    </Link>
                    <div
                      className='flex-align gap-16  wow bounceInRight'
                      data-wow-duration='1s'
                      data-wow-delay='.5s'
                    >
                      <span
                        onClick={() => setIsOpen(true)}
                        className='play-button position-relative z-1 w-48 h-48 flex-center bg-main-two-600 text-white rounded-circle text-xl'
                      >
                        <i className='ph-fill ph-play' />
                      </span>
                      <Link
                        href='/course'
                        className='text-white hover-text-decoration-underline hover-text-main-two-600'
                      >
                        See E-ILM-Acadmy
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className='banner-three__item background-img bg-img linear-overlay position-relative'
            style={{
              backgroundImage: `url(${"/assets/images/thumbs/banner-three-img3.webp"})`,
            }}
          >
            <div className='container'>
              <div className='row'>
                <div className='col-12 col-xl-8 col-xxl-6 col-lg-10 z-1'>
                  <div className='banner-content pe-md-4'>
                    <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                      <span className='text-yellow-600 text-2xl d-flex'>
                        <i className='ph-bold ph-book-open' />
                      </span>
                      <h5 className='text-yellow-600 mb-0 fw-medium'>
                        Elevate Your Learning
                      </h5>
                    </div>
                    {/* 3. Heading Size Responsiveness: Use a smaller class on mobile (text-4xl) and display2 on larger screens */}
                    <h1 className='text-4xl sm:text-5xl md:display2 mb-24 text-white fw-medium wow bounceInLeft'>
                      Attracting Characters,
                      <span
                        className='text-yellow-600  wow bounceInRight'
                        data-wow-duration='2s'
                        data-wow-delay='.5s'
                      >
                        {" "}
                        Adornment{" "}
                      </span>{" "}
                      Fates
                    </h1>
                    <p className='text-white text-line-2 wow bounceInDown'>
                      Welcome to E-ILM-Acadmy, your gateway to authentic Islamic knowledge —
                      guiding students, seekers, and learners toward spiritual growth and understanding.
                    </p>
                  </div>
                  <div className='buttons-wrapper flex-align flex-wrap gap-24 mt-40'>
                    <Link
                      href='/sign-in'
                      className='btn btn-main rounded-pill flex-align gap-8  wow bounceInLeft'
                      data-wow-duration='1s'
                      data-wow-delay='.5s'
                    >
                      Apply Now
                      <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                    </Link>
                    <div
                      className='flex-align gap-16  wow bounceInRight'
                      data-wow-duration='1s'
                      data-wow-delay='.5s'
                    >
                      <span
                        onClick={() => setIsOpen(true)}
                        className='play-button position-relative z-1 w-48 h-48 flex-center bg-main-two-600 text-white rounded-circle text-xl'
                      >
                        <i className='ph-fill ph-play' />
                      </span>
                      <Link
                        href='/course'
                        className='text-white hover-text-decoration-underline hover-text-main-two-600'
                      >
                        See E-ILM-Academy
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='kDvSVHghxr8'
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />
    </section>
  );
};

export default BannerThree;