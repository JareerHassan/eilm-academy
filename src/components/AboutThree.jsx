"use client";
import Link from "next/link";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const AboutThree = () => {
  return (
    <section className='about-three py-120 position-relative z-1 bg-main-25 overflow-hidden'>
      <div className='position-relative'>
        <div className='container'>
          <div className='row gy-xl-0 gy-5 flex-wrap-reverse align-items-center'>
            <div className='col-xl-6 pe-xl-5'>
              <div className='about-three-thumbs position-relative me-xxl-5'>
                <div className='row gy-4'>
                  <div className='col-sm-8'>
                    <img
                      src='assets/images/thumbs/about-three-img1.webp'
                      alt=''
                      className='about-three-thumbs__one rounded-16 w-100'
                      data-tilt=''
                      data-tilt-max={16}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                    />
                  </div>

                  <div className='col-sm-4'>
                    <div
                      className='rounded-16 text-center py-24 px-2 mb-24'
                      style={{ backgroundColor: "#002366" }}
                      data-tilt=''
                      data-tilt-max={10}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                      data-tilt-transition='1s'
                      data-tilt-full-page-listening=''
                    >
                      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                        {({ isVisible }) => (
                          <h2 className='mb-16 text-white counter'>
                            {isVisible ? <CountUp end={26} /> : null}K
                          </h2>
                        )}
                      </VisibilitySensor>
                      <span className='text-white'>Students Learning at E-ILM-Academy</span>

                      <div className='enrolled-students style-two mt-12'>
                        <img src='assets/images/thumbs/enroll-student-img1.webp' alt='' className='w-32 h-32 rounded-circle object-fit-cove transition-2' />
                        <img src='assets/images/thumbs/enroll-student-img2.webp' alt='' className='w-32 h-32 rounded-circle object-fit-cove transition-2' />
                        <img src='assets/images/thumbs/enroll-student-img3.webp' alt='' className='w-32 h-32 rounded-circle object-fit-cove transition-2' />
                        <img src='assets/images/thumbs/enroll-student-img4.webp' alt='' className='w-32 h-32 rounded-circle object-fit-cove transition-2' />
                        <img src='assets/images/thumbs/enroll-student-img5.webp' alt='' className='w-32 h-32 rounded-circle object-fit-cove transition-2' />
                        <img src='assets/images/thumbs/enroll-student-img6.webp' alt='' className='w-32 h-32 rounded-circle object-fit-cove transition-2' />
                      </div>
                    </div>

                    <img
                      src='assets/images/thumbs/about-three-img2.webp'
                      alt=''
                      className='about-three-thumbs__two rounded-16 w-100'
                      data-tilt=''
                      data-tilt-max={10}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                      data-tilt-full-page-listening=''
                    />
                  </div>

                </div>
              </div>
            </div>

            <div className='col-xl-6'>
              <div className='about-three-content'>
                <div className='mb-40'>
                  <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
                    <span className='text-main-600 text-2xl d-flex'>
                      <i className='ph-bold ph-book-open' />
                    </span>
                    <h5 className='text-main-600 mb-0'>About E-ILM-Academy</h5>
                  </div>

                  <h2 className='mb-24 wow bounceInRight'>
                    Dedicated to Spreading Authentic Islamic Knowledge
                  </h2>

                  <p className='text-neutral-500 text-line-2 wow bounceInUp'>
                    At E-ILM-Academy, our mission is to provide accessible, reliable, and spiritually uplifting Islamic education through modern teaching methods and qualified scholars.
                  </p>
                </div>

                <div className='grid-cols-2'>

                  <div className='flex-align align-items-start gap-20 animation-item' data-aos='fade-up' data-aos-duration={600}>
                    <span className='flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-16 box-shadow-md'>
                      <img src='assets/images/icons/choose-us-icon1.png' className='animate__swing' alt='' />
                    </span>
                    <div className='flex-grow-1'>
                      <h6 className='text-neutral-800 text-xl fw-medium mb-8'>Qur’an Courses</h6>
                      <div className='flex-align gap-8 text-neutral-500'>
                        <i className='d-flex text-lg ph-bold ph-clock' /> Onsite & Online
                      </div>
                    </div>
                  </div>

                  <div className='flex-align align-items-start gap-20 animation-item' data-aos='fade-up' data-aos-duration={800}>
                    <span className='flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-16 box-shadow-md'>
                      <img src='assets/images/icons/choose-us-icon2.png' className='animate__swing' alt='' />
                    </span>
                    <div className='flex-grow-1'>
                      <h6 className='text-neutral-800 text-xl fw-medium mb-8'>Tajweed & Recitation</h6>
                      <div className='flex-align gap-8 text-neutral-500'>
                        <i className='d-flex text-lg ph-bold ph-clock' /> Onsite & Online
                      </div>
                    </div>
                  </div>

                  <div className='flex-align align-items-start gap-20 animation-item' data-aos='fade-up' data-aos-duration={1000}>
                    <span className='flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-16 box-shadow-md'>
                      <img src='assets/images/icons/choose-us-icon3.png' className='animate__swing' alt='' />
                    </span>
                    <div className='flex-grow-1'>
                      <h6 className='text-neutral-800 text-xl fw-medium mb-8'>Hadith & Fiqh Studies</h6>
                      <div className='flex-align gap-8 text-neutral-500'>
                        <i className='d-flex text-lg ph-bold ph-clock' /> Onsite & Online
                      </div>
                    </div>
                  </div>

                  <div className='flex-align align-items-start gap-20 animation-item' data-aos='fade-up' data-aos-duration={1200}>
                    <span className='flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-16 box-shadow-md'>
                      <img src='assets/images/icons/choose-us-icon4.png' className='animate__swing' alt='' />
                    </span>
                    <div className='flex-grow-1'>
                      <h6 className='text-neutral-800 text-xl fw-medium mb-8'>Arabic Language Courses</h6>
                      <div className='flex-align gap-8 text-neutral-500'>
                        <i className='d-flex text-lg ph-bold ph-clock' /> Onsite & Online
                      </div>
                    </div>
                  </div>

                </div>

                <div className='pt-40 border-top border-neutral-50 mt-40 border-dashed border-0'>
                  <Link href='/about' className='btn btn-main rounded-pill flex-align d-inline-flex gap-8'>
                    Learn More
                    <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutThree;
