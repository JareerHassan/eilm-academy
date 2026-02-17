const InfoTwo = () => {
  return (
    <section className='info-two half-bg'>
      <div className='container'>
        <div className='bg-white box-shadow-md rounded-16 p-16'>
          <div className='row gy-4 justify-content-center'>

            {/* Item 1 */}
            <div className='col-xl-4 col-sm-6' data-aos='fade-up' data-aos-duration={400}>
              <div className='info-two-item flex-align animation-item h-100 gap-28 border border-neutral-30 rounded-12 bg-main-25'>
                <span className='flex-shrink-0'>
                  <img src='assets/images/icons/info-two-icon1.png' className='animate__heartBeat' alt='' />
                </span>
                <div>
                  <h4 className='mb-16'>Qur’an Mastery</h4>
                  <p className='text-neutral-700'>
                    Learn Qur’an through structured lessons with Tajweed and easy-to-follow guidance for every level.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className='col-xl-4 col-sm-6' data-aos='fade-up' data-aos-duration={600}>
              <div className='info-two-item flex-align animation-item h-100 gap-28 border border-neutral-30 rounded-12 bg-main-two-25'>
                <span className='flex-shrink-0'>
                  <img src='assets/images/icons/info-two-icon2.png' className='animate__heartBeat' alt='' />
                </span>
                <div>
                  <h4 className='mb-16'>Hadith Insights</h4>
                  <p className='text-neutral-700'>
                    Explore authentic Hadith with clear explanations, helping students understand and apply teachings in daily life.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className='col-xl-4 col-sm-6' data-aos='fade-up' data-aos-duration={800}>
              <div className='info-two-item flex-align animation-item h-100 gap-28 border border-neutral-30 rounded-12 bg-main-three-25'>
                <span className='flex-shrink-0'>
                  <img src='assets/images/icons/info-two-icon3.png' className='animate__heartBeat' alt='' />
                </span>
                <div>
                  <h4 className='mb-16'>Fiqh & Practices</h4>
                  <p className='text-neutral-700'>
                    Understand Islamic law and practical rituals with structured lessons for a balanced daily religious life.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoTwo;
