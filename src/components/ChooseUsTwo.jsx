import Link from "next/link";

const ChooseUsTwo = () => {
  return (
    <section className='choose-us-two pt-120'>
      <div className='container'>
        <div className='row align-items-end'>
          <div className='col-lg-7 pe-xl-5'>
            <div className='pb-80 mb-lg-5 me-lg-5'>
              <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
                <span className='text-main-600 text-2xl d-flex'>
                  <i className='ph-bold ph-book-open' />
                </span>
                <h5 className='text-main-600 mb-0'>Why Choose E-ILM-Academy</h5>
              </div>
              <h2 className='mb-24 wow bounceIn'>
                Providing Authentic Islamic Knowledge with Modern Learning
              </h2>
              <p className='text-neutral-500 text-line-2 wow bounceInUp'>
                We offer a holistic education that blends traditional Islamic sciences with contemporary knowledge, fostering ethical, spiritual, and intellectual growth.
              </p>
              <p className='text-neutral-500 text-line-2 mt-24 wow bounceInUp'>
                Our courses, seminars, and workshops are designed to nurture understanding, compassion, and wisdom, creating scholars and leaders for tomorrow.
              </p>
              <Link
                href='/about'
                className='btn btn-main rounded-pill flex-align d-inline-flex gap-8 mt-40'
              >
                Read More
                <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
              </Link>
            </div>
          </div>

          <div className='col-lg-5'>
            <div
              className='pt-40 pb-90 px-60 bg-neutral-900 rounded-top-4'
              data-aos='fade-up-left'
            >
              <h4 className='mb-28 pb-28 border-bottom border-top-0 border-start-0 border-end-0 border-opacity-25 border-white border-dashed text-white'>
                Important Links
              </h4>
              <ul>
                <li className='mb-24'>
                  <Link
                    href='/contact'
                    className='flex-align gap-12 text-white hover-text-decoration-underline'
                  >
                    Admission Announcement
                    <i className='text-main-two-600 ph-bold ph-arrow-right d-flex text-xl' />
                  </Link>
                </li>
                <li className='mb-24'>
                  <Link
                    href='/contact'
                    className='flex-align gap-12 text-white hover-text-decoration-underline'
                  >
                    Summer 2025 Enrollment
                    <i className='text-main-two-600 ph-bold ph-arrow-right d-flex text-xl' />
                  </Link>
                </li>
                <li className='mb-24'>
                  <Link
                    href='/contact'
                    className='flex-align gap-12 text-white hover-text-decoration-underline'
                  >
                    Upcoming Islamic Seminar
                    <i className='text-main-two-600 ph-bold ph-arrow-right d-flex text-xl' />
                  </Link>
                </li>
                <li className='mb-24'>
                  <Link
                    href='/contact'
                    className='flex-align gap-12 text-white hover-text-decoration-underline'
                  >
                    Download Syllabus
                    <i className='text-main-two-600 ph-bold ph-arrow-right d-flex text-xl' />
                  </Link>
                </li>
                <li className='mb-24'>
                  <Link
                    href='/contact'
                    className='flex-align gap-12 text-white hover-text-decoration-underline'
                  >
                    Alumni Talks & Events
                    <i className='text-main-two-600 ph-bold ph-arrow-right d-flex text-xl' />
                  </Link>
                </li>
                <li className='mb-0'>
                  <Link
                    href='/contact'
                    className='flex-align gap-12 text-white hover-text-decoration-underline'
                  >
                    Exam Schedules
                    <i className='text-main-two-600 ph-bold ph-arrow-right d-flex text-xl' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsTwo;
