"use client";
import Link from "next/link";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const AboutOne = () => {
  return (
    <section className='about py-120 position-relative z-1 mash-bg-main mash-bg-main-two'>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape one animation-scalation'
      />
      <img
        src='assets/images/shapes/shape6.png'
        alt=''
        className='shape four animation-scalation'
      />
      <div className='position-relative'>
        <div className='container'>
          <div className='row gy-xl-0 gy-5 flex-wrap-reverse align-items-center'>

            {/* LEFT IMAGES SECTION */}
            <div className='col-xl-6'>
              <div className='about-thumbs position-relative pe-lg-5'>
                <img
                  src='assets/images/shapes/shape7.png'
                  alt=''
                  className='shape seven animation-scalation'
                />

                <div className='row gy-4'>
                  <div className='col-sm-6'>
                    <img
                      src='assets/images/thumbs/about-three-img1.webp'
                      alt=''
                      className='rounded-12 w-100'
                      data-tilt=''
                      data-tilt-max={15}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                      data-tilt-full-page-listening=''
                    />
                  </div>

                  <div className='col-sm-6'>
                    <div className='flex-align gap-24 mb-24'>
                      <div
                        className='bg-main-600 rounded-12 text-center py-24 px-2 w-50-percent'
                        data-aos='fade-right'
                      >
                        <VisibilitySensor
                          partialVisibility
                          offset={{ bottom: 200 }}
                        >
                          {({ isVisible }) => (
                            <h1 className='mb-0 text-white counter'>
                              {isVisible ? <CountUp end={1} /> : null}K
                            </h1>
                          )}
                        </VisibilitySensor>
                        <span className='text-white'>Students Learning Worldwide</span>

                      </div>

                      <div
                        className='bg-neutral-700 rounded-12 text-center py-24 px-2 w-50-percent'
                        data-aos='fade-left'
                      >
                        <VisibilitySensor
                          partialVisibility
                          offset={{ bottom: 200 }}
                        >
                          {({ isVisible }) => (
                            <h1 className='mb-0 text-white counter'>
                              {isVisible ? <CountUp end={2} /> : null}K
                            </h1>
                          )}
                        </VisibilitySensor>
                        <span className='text-white'>Islamic Learning Resources</span>

                      </div>
                    </div>

                    <img
                      src='assets/images/thumbs/about-three-img2.webp'
                      alt=''
                      className='rounded-12 w-100'
                      data-tilt=''
                      data-tilt-max={20}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                      data-tilt-full-page-listening=''
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT SECTION */}
            <div className='col-xl-6'>
              <div className='about-content'>
                <div className='mb-40'>

                  <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                    <span className='w-8 h-8 bg-main-600 rounded-circle' />
                    <h5 className='text-main-600 mb-0'>About E-Ilm Academy</h5>
                  </div>

                  <h2 className='mb-24 wow bounceIn'>
                    Authentic Islamic Learning for the Modern World
                  </h2>

                  <p className='text-neutral-500  wow bounceInUp'>
                    E-Ilm Academy is an international online Islamic education platform that offers a structured and authentic curriculum covering Qur’an, Hadith, Hanafi Fiqh, Arabic Language, and the Dars-e-Nizami syllabus.
                    Guided by qualified scholars, using modern digital tools and a student-focused learning system, our mission is to make Islamic knowledge accessible to every home.
                  </p>

                </div>

                {/* OUR MISSION */}
                <div
                  className='flex-align align-items-start gap-28 mb-32'
                  data-aos='fade-left'
                  data-aos-duration={200}
                >
                  <span className='w-80 h-80 bg-main-25 border border-neutral-30 flex-center rounded-circle flex-shrink-0'>
                    <img src='assets/images/icons/about-img1.png' alt='' />
                  </span>

                  <div className='flex-grow-1'>
                    <h4 className='text-neutral-500 mb-12'>Our Mission</h4>
                    <p className='text-neutral-500'>
                      To make authentic Islamic knowledge accessible, inspire students to understand the Qur’an and follow Sunnah, and develop strong Islamic character.
                    </p>
                  </div>
                </div>

                {/* OUR VISION */}
                <div
                  className='flex-align align-items-start gap-28 mb-0'
                  data-aos='fade-left'
                  data-aos-duration={400}
                >
                  <span className='w-80 h-80 bg-main-25 border border-neutral-30 flex-center rounded-circle flex-shrink-0'>
                    <img src='assets/images/icons/about-img2.png' alt='' />
                  </span>

                  <div className='flex-grow-1'>
                    <h4 className='text-neutral-500 mb-12'>Our Vision</h4>
                    <p className='text-neutral-500'>
                      To become a global Islamic learning hub where children, adults, and professionals can achieve spiritual and intellectual growth through structured online education.
                    </p>
                  </div>
                </div>

                {/* BOTTOM BUTTON + CEO BLOCK */}
                {/* <div
                  className='flex-align flex-wrap gap-32 pt-40 border-top border-neutral-50 mt-40 border-dashed border-0'
                  data-aos='fade-left'
                  data-aos-duration={600}
                >
                  <div className='flex-align gap-20'>
                    <img
                      src='assets/images/thumbs/enroll-student-img1.webp'
                      alt=''
                      className='w-52 h-52 rounded-circle object-fit-cover flex-shrink-0'
                    />

                    <div className='flex-grow-1'>
                      <span className='mb-4'>
                        <img src='assets/images/thumbs/signature.png' alt='' />
                      </span>
                      <span className='text-sm d-block'>Founder of E-Ilm Academy</span>
                    </div>

                  </div>
                </div> */}

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
