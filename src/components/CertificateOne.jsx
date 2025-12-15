const CertificateOne = () => {
  return (
    <div className='certificate mb-90'>
      <div className='container container--lg'>
        <div className='certificate-box px-16 bg-main-600 rounded-16'>
          <div className='container'>
            <div className='position-relative py-80'>
              <div className='row align-items-center'>

                {/* LEFT CONTENT */}
                <div className='col-xl-6'>
                  <div className='certificate__content'>
                    <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                      <span className='w-8 h-8 bg-white rounded-circle' />
                      <h5 className='text-white mb-0'>
                        E-Ilm Academy Certificates
                      </h5>
                    </div>

                    <h2 className='text-white mb-40 fw-medium wow bounceIn'>
                      Earn a Professional Skills Certificate From
                      <br /> E-Ilm Academy
                    </h2>

                    <a
                      href='/courses'
                      className='btn btn-white rounded-pill flex-align d-inline-flex gap-8 hover-bg-main-800 wow bounceInUp'
                    >
                      Start Learning Now
                      <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                    </a>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className='col-xl-6 d-xl-block d-none'>
                  <div
                    className='certificate__thumb'
                    data-aos='fade-up-left'
                  >
                    <img
                      src='assets/images/thumbs/banner-three-img3.webp'
                      alt='certificate'
                      data-tilt=''
                      data-tilt-max={7}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                      data-tilt-full-page-listening=''
                      style={{height:'438px', width:'350px'}}
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateOne;
