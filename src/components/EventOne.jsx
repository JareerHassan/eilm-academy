"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const EventOne = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className='event py-120 overflow-hidden'>
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-lg-8'>
            <div className='section-heading style-left'>
              <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
                <span className='text-main-600 text-2xl d-flex'>
                  <i className='ph-bold ph-book-open' />
                </span>
                <h5 className="text-main-600 mb-0">Upcoming Courses</h5>
              </div>
              <h2 className='mb-24 wow bounceInRight'>
                               Enroll in Our Upcoming Learning Programs

              </h2>
              <p className='text-neutral-500 text-line-4 wow bounceInUp'>
   Explore our upcoming courses designed to enhance your Islamic knowledge,
                language skills, and spiritual growth. Join today and start learning
                with certified instructors.
              </p>
            </div>

            <div className='event-item-wrapper overflow-x-auto scroll-sm scroll-sm-horizontal pb-4'>

              {/* Event 1 */}
              <div
                className='event-item bg-main-25 rounded-12 d-flex align-items-center border border-neutral-20 hover-bg-main-600 hover-border-main-600 hover-text-white transition-1 mb-24'
                style={{ minWidth: "700px", padding: "18px" }}
                data-aos='fade-up-left'
                data-aos-duration={200}
              >
                <div>
                  <h3 className='mb-8 text-main-600'>25</h3>
                  <span className='text-neutral-500'>May, 2026</span>
                </div>

                <span className='border border-neutral-40 border-dashed h-72 mx-16' />

                <div>
                  <div className='flex-between gap-16 flex-wrap mb-12'>
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-700 text-lg d-flex'>
                        <i className='ph-bold ph-clock' />
                      </span>
                      <span className='text-neutral-700 text-lg fw-normal'>
                        10:00 AM to 12:30 PM
                      </span>
                    </div>
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-700 text-lg d-flex'>
                        <i className='ph-bold ph-map-trifold' />
                      </span>
                      <span className='text-neutral-700 text-lg fw-normal'>
                        Islamabad, Pakistan
                      </span>
                    </div>
                  </div>

                  <h4 className='mt-12 mb-0'>Arabic Language Course</h4>
                </div>

                <span className='border border-neutral-40 border-dashed h-72 mx-16' />

                <div className='flex-shrink-0'>
                  <Link
                    href='/coming-soon'
                    className='btn btn-outline-main rounded-pill flex-align d-inline-flex gap-8'
                  >
                     Coming Soon
                    <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                  </Link>
                </div>
              </div>

              {/* Event 2 */}
              <div
                className='event-item bg-main-25 rounded-12 d-flex align-items-center border border-neutral-20 hover-bg-main-600 hover-border-main-600 hover-text-white transition-1 mb-24'
                style={{ minWidth: "700px", padding: "18px" }}
                data-aos='fade-up-left'
                data-aos-duration={400}
              >
                <div>
                  <h3 className='mb-8 text-main-600'>12</h3>
                  <span className='text-neutral-500'>Jun, 2026</span>
                </div>

                <span className='border border-neutral-40 border-dashed h-72 mx-16' />

                <div>
                  <div className='flex-between gap-16 flex-wrap mb-12'>
                    <div className='flex-align gap-8 '>
                      <span className='text-neutral-700 text-lg d-flex'>
                        <i className='ph-bold ph-clock' />
                      </span>
                      <span className='text-neutral-700 text-lg fw-normal'>
                        02:00 PM to 04:30 PM
                      </span>
                    </div>
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-700 text-lg d-flex'>
                        <i className='ph-bold ph-map-trifold' />
                      </span>
                      <span className='text-neutral-700 text-lg fw-normal'>
                        Islamabad, Pakistan
                      </span>
                    </div>
                  </div>

                  <h4 className='mt-12 mb-0'>Ilm-e-Deen Foundation Course</h4>
                </div>

                <span className='border border-neutral-40 border-dashed h-72 mx-16' />

                <div className='flex-shrink-0'>
                  <Link
                       href='/coming-soon'
                    className='btn btn-outline-main rounded-pill flex-align d-inline-flex gap-8'
                  >
                       Coming Soon
                    <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                  </Link>
                </div>
              </div>

              {/* Event 3 */}
              <div
                className='event-item bg-main-25 rounded-12 d-flex align-items-center border border-neutral-20 hover-bg-main-600 hover-border-main-600 hover-text-white transition-1 mb-0'
                style={{ minWidth: "700px", padding: "18px" }}
                data-aos='fade-up-left'
                data-aos-duration={500}
              >
                <div>
                  <h3 className='mb-8 text-main-600'>29</h3>
                  <span className='text-neutral-500'>Jul, 2026</span>
                </div>

                <span className='border border-neutral-40 border-dashed h-72 mx-16' />

                <div>
                  <div className='flex-between gap-16 flex-wrap mb-12'>
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-700 text-lg d-flex'>
                        <i className='ph-bold ph-clock' />
                      </span>
                      <span className='text-neutral-700 text-lg fw-normal'>
                        11:00 AM to 03:00 PM
                      </span>
                    </div>
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-700 text-lg d-flex'>
                        <i className='ph-bold ph-map-trifold' />
                      </span>
                      <span className='text-neutral-700 text-lg fw-normal'>
                        Islamabad, Pakistan
                      </span>
                    </div>
                  </div>

                  <h4 className='mt-12 mb-0'>Seerat un Nabi (SAW) Course</h4>
                </div>

                <span className='border border-neutral-40 border-dashed h-72 mx-16' />

                <div className='flex-shrink-0'>
                  <Link
                      href='/coming-soon'
                    className='btn btn-outline-main rounded-pill flex-align d-inline-flex gap-8'
                  >
                      Coming Soon
                    <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href='/course'
              className='btn btn-outline-main rounded-pill flex-align d-inline-flex gap-8 mt-40'
            >
              See All Courses
              <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
            </Link>
          </div>

          <div className='col-lg-4'>
            <div className='event-video rounded-16 overflow-hidden position-relative h-100 wow bounceIn'>
              <img
                src='assets/images/thumbs/event-video-img.webp'
                className='rounded-16 cover-img'
                alt='Event Video'
                data-tilt=''
                data-tilt-max={8}
                data-tilt-speed={500}
                data-tilt-perspective={5000}
                data-tilt-transition='1s'
                data-tilt-full-page-listening=''
              />

              <span
                onClick={() => setIsOpen(true)}
                className='play-button position-absolute start-50 top-50 translate-middle z-1 w-72 h-72 flex-center bg-main-two-600 text-white rounded-circle text-2xl'
              >
                <i className='ph-fill ph-play' />
              </span>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='hU-WboS7JIQ'
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />
    </section>
  );
};

export default EventOne;
