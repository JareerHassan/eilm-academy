import Link from "next/link";

const FacultyOne = () => {
  return (
    <section className='faculty pb-120 bg-main-25'>
      <div className='container'>
        <div className='section-heading text-center'>
          <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
            <span className='text-main-600 text-2xl d-flex'>
              <i className='ph-bold ph-book-open' />
            </span>
            <h5 className='text-main-600 mb-0'>
              Explore Faculty of E-ILM-Academy
            </h5>
          </div>
          <h2 className='mb-24 wow bounceIn'>Top Islamic Faculty</h2>
          <p className=' wow bounceInUp'>
            Join our esteemed faculty offering authentic Islamic knowledge, Qur’an studies, Hadith, Fiqh, and modern Islamic sciences.
          </p>
        </div>

        <div className='row gy-4'>
          {/* Faculty 1 */}
          <div className='col-lg-4 col-md-6' data-aos='fade-up' data-aos-duration={200}>
            <div className='scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
              <div className='course-item__thumb rounded-12 overflow-hidden position-relative'>
                <Link href='/course-details' className='w-100 h-100'>
                  <img
                    src='assets/images/thumbs/faculty-img1.webp'
                    alt='Faculty Image'
                    className='scale-hover-item__img rounded-12 cover-img transition-2'
                    style={{ width: "100%", height: "250px", objectFit: "cover", display: "block" }}
                  />
                </Link>
              </div>
              <div className='pt-32 pb-24 px-16 position-relative'>
                <span className='text-up py-12 px-24 rounded-8 bg-main-three-600 text-white fw-medium'>
                  Admission Open
                </span>
                <div className='flex-between gap-8 flex-wrap mb-16'>
                  <Link
                    href='/course'
                    className='py-8 px-20 rounded-8 flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white'
                  >
                    <span className='text-xl d-flex'>
                      Qur’an & Hadith
                      <i className='ph-bold ph-squares-four' />
                    </span>
                  </Link>
                  <div className='flex-align gap-4'>
                    <span className='text-2xl fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-lg text-neutral-700'>
                      4.9
                      <span className='text-neutral-100'>(1.2k)</span>
                    </span>
                  </div>
                </div>
                <h4 className='mb-28'>
                  <Link href='/course-details' className='link text-line-2'>
                    Faculty of Qur’an and Sunnah Studies
                  </Link>
                </h4>
                <ul className='check-list'>
                  <li className='flex-align gap-8'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md'>Library</span>
                  </li>
                  <li className='flex-align gap-8'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md'>Online Classes</span>
                  </li>
                  <li className='flex-align gap-8'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md'>Prayer Hall</span>
                  </li>
                  <li className='flex-align gap-8'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md'>Hostel</span>
                  </li>
                </ul>
                <div className='flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                  <Link
                    href='/contact'
                    className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                    tabIndex={0}
                  >
                    Apply Now
                    <i className='ph ph-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Faculty 2 */}
          <div className='col-lg-4 col-md-6' data-aos='fade-up' data-aos-duration={400}>
            <div className='scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
              <div className='course-item__thumb rounded-12 overflow-hidden position-relative'>
                <Link href='/course-details' className='w-100 h-100'>
                  <img
                    src='assets/images/thumbs/faculty-img2.webp'
                    alt='Faculty Image'
                    className='scale-hover-item__img rounded-12 cover-img transition-2'
                    style={{ width: "100%", height: "250px", objectFit: "cover", display: "block" }}
                  />
                </Link>
              </div>
              <div className='pt-32 pb-24 px-16 position-relative'>
                <span className='text-up py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium'>
                  Admission Open
                </span>
                <div className='flex-between gap-8 flex-wrap mb-16'>
                  <Link
                    href='/course'
                    className='py-8 px-20 rounded-8 flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white'
                  >
                    <span className='text-xl d-flex'>
                      Fiqh & Islamic Law
                      <i className='ph-bold ph-squares-four' />
                    </span>
                  </Link>
                  <div className='flex-align gap-4'>
                    <span className='text-2xl fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-lg text-neutral-700'>
                      4.8
                      <span className='text-neutral-100'>(950)</span>
                    </span>
                  </div>
                </div>
                <h4 className='mb-28'>
                  <Link href='/course-details' className='link text-line-2'>
                    Faculty of Islamic Law & Jurisprudence
                  </Link>
                </h4>
                <ul className='check-list'>
                  <li className='flex-align gap-8'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md'>Library</span>
                  </li>
                  <li className='flex-align gap-8'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md'>Online Classes</span>
                  </li>
                  <li className='flex-align gap-8'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md'>Prayer Hall</span>
                  </li>
                  <li className='flex-align gap-8'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md'>Hostel</span>
                  </li>
                </ul>
                <div className='flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                  <Link
                    href='/contact'
                    className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                    tabIndex={0}
                  >
                    Apply Now
                    <i className='ph ph-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>



              {/* Faculty 2 */}
          <div className='col-lg-4 col-md-6' data-aos='fade-up' data-aos-duration={400}>
            <div className='scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
              <div className='course-item__thumb rounded-12 overflow-hidden position-relative'>
                <Link href='/course-details' className='w-100 h-100'>
                  <img
                    src='assets/images/thumbs/faculty-img2.webp'
                    alt='Faculty Image'
                    className='scale-hover-item__img rounded-12 cover-img transition-2'
                    style={{ width: "100%", height: "250px", objectFit: "cover", display: "block" }}
                  />
                </Link>
              </div>
              <div className='pt-32 pb-24 px-16 position-relative'>
                <span className='text-up py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium'>
                  Admission Open
                </span>
                <div className='flex-between gap-8 flex-wrap mb-16'>
                  <Link
                    href='/course'
                    className='py-8 px-20 rounded-8 flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white'
                  >
                    <span className='text-xl d-flex'>
                      Fiqh & Islamic Law
                      <i className='ph-bold ph-squares-four' />
                    </span>
                  </Link>
                  <div className='flex-align gap-4'>
                    <span className='text-2xl fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-lg text-neutral-700'>
                      4.8
                      <span className='text-neutral-100'>(950)</span>
                    </span>
                  </div>
                </div>
                <h4 className='mb-28'>
                  <Link href='/course-details' className='link text-line-2'>
                    Faculty of Islamic Law & Jurisprudence
                  </Link>
                </h4>
                <ul className='check-list'>
                  <li className='flex-align gap-8'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md'>Library</span>
                  </li>
                  <li className='flex-align gap-8'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md'>Online Classes</span>
                  </li>
                  <li className='flex-align gap-8'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md'>Prayer Hall</span>
                  </li>
                  <li className='flex-align gap-8'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md'>Hostel</span>
                  </li>
                </ul>
                <div className='flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                  <Link
                    href='/contact'
                    className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                    tabIndex={0}
                  >
                    Apply Now
                    <i className='ph ph-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Add more faculties similarly as needed, following the Islamic courses structure */}
        </div>

     
      </div>
    </section>
  );
};

export default FacultyOne;
