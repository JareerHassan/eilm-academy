"use client";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";


const ContactInner = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // Success/Error message
  const [showPopup, setShowPopup] = useState(false); // For popup

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_9g82xz4",       // Your EmailJS Service ID
        "template_pdgky6p",      // Your EmailJS Template ID
        formRef.current,         // Form reference
        "ghvhf0-VJcirjrCw5"     // Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setStatus("Message sent successfully ✅");
          setShowPopup(true);      // Show popup after success
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setStatus("Failed to send message ❌");
          setShowPopup(true);      // Show popup even on error
        }
      );
  };

  // Auto close popup after 5 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);


  return (
    <>
      <section className='contact py-120'>
        <div className='container'>
          <div className='section-heading text-center'>
            <div className='flex-align d-inline-flex gap-8 mb-16'>
              <span className='text-main-600 text-2xl d-flex'>
                <i className='ph-bold ph-book' />
              </span>
              <h5 className='text-main-600 mb-0'>Get In Touch</h5>
            </div>
            <h1 className='mb-24'>Contact Eilm Academy </h1>
            <p className=''>
              E-ILM-Academy is dedicated to spreading authentic Islamic knowledge,
              guiding students towards spiritual growth, character building, and
              Quran–Sunnah based learning.
            </p>
          </div>

          <div className='row gy-4'>    
            {/* Office */}
            <div className='col-xl-4 col-md-6 d-flex'>
              <div className='contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600 flex-grow-1'>
                <span className='contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0'>
                  <i className='ph ph-map-pin-line' />
                </span>
                <div className='flex-grow-1'>
                  <h4 className='mb-12'>Main Campus</h4>
                  <p className='text-neutral-500'>Darul Iman, Mumtaz City, Islamabad</p>
                  <Link
                    href='https://maps.app.goo.gl/hACaC7N9ia5sr2Sf9'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-main-600 fw-semibold text-decoration-underline mt-16 d-inline-block'
                  >
                    Find Location
                  </Link>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className='col-xl-4 col-md-6 d-flex'>
              <div className='contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600 flex-grow-1'>
                <span className='contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0'>
                  <i className='ph ph-envelope-open' />
                </span>
                <div className='flex-grow-1'>
                  <h4 className='mb-12'>Email Address</h4>
                  <p className='text-neutral-500'>Eilmacademy@gmail.com</p>
                  <a
                    href='mailto:Eilmacademy@gmail.com'
                    className='text-main-600 fw-semibold text-decoration-underline mt-16 d-inline-block'
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className='col-xl-4 col-md-6 d-flex'>
              <div className='contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600 flex-grow-1'>
                <span className='contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0'>
                  <i className='ph ph-phone-call' />
                </span>
                <div className='flex-grow-1'>
                  <h4 className='mb-12'>Phone Number</h4>
                  <p className='text-neutral-500'>+923155090055</p>
                  <Link
                    href="https://wa.me/923155090055"
                    target="_blank"
                    className='text-main-600 fw-semibold text-decoration-underline mt-16 d-inline-block'
                    aria-label="Chat on WhatsApp"
                  >
                    Contact Us Today!
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FORM SECTION */}
      <section className='contact-form-section py-240 bg-main-25 position-relative z-1'>
        <img
          src='assets/images/bg/wave-bg.png'
          alt=''
          className='position-absolute top-0 start-0 w-100 h-100 z-n1 d-lg-block d-none'
        />

        <div className='container'>
          <div className='row gy-5 align-items-center'>
            <div className='col-xl-7 col-lg-6 pe-lg-5'>
              <div className='mb-40 md-xl-5'>
                <div className='flex-align d-inline-flex gap-8 mb-16'>
                  <span className='text-main-600 text-2xl d-flex'>
                    <i className='ph-bold ph-book' />
                  </span>
                  <h5 className='text-main-600 mb-0'>Contact Us</h5>
                </div>

                <h2 className='mb-24'>
                  Have Questions About Islamic Learning? We Are Here To Guide You
                </h2>

                <p className='text-neutral-500 text-line-3 max-w-636'>
                  E-ILM-Academy is committed to making Islamic knowledge accessible for everyone.
                  From Quran courses to Hadith, Fiqh, and Islamic studies — our mission is to
                  educate, inspire, and help you grow spiritually with authentic guidance.
                </p>
              </div>

              {/* <div className='flex-align gap-40 flex-wrap'>
                <div className='enrolled-students mt-12 '>
                  <img src='assets/images/thumbs/enroll-student-img1.webp' alt='' className='w-48 h-48 rounded-circle object-fit-cover transition-2' />
                  <img src='assets/images/thumbs/enroll-student-img2.webp' alt='' className='w-48 h-48 rounded-circle object-fit-cover transition-2' />
                  <img src='assets/images/thumbs/enroll-student-img3.webp' alt='' className='w-48 h-48 rounded-circle object-fit-cover transition-2' />
                  <img src='assets/images/thumbs/enroll-student-img4.webp' alt='' className='w-48 h-48 rounded-circle object-fit-cover transition-2' />
                  <img src='assets/images/thumbs/enroll-student-img5.webp' alt='' className='w-48 h-48 rounded-circle object-fit-cover transition-2' />
                  <img src='assets/images/thumbs/enroll-student-img6.webp' alt='' className='w-48 h-48 rounded-circle object-fit-cover transition-2' />
                </div>

                <div className=''>
                  <ul className='flex-align gap-4 mb-10'>
                    <li className='text-warning-600 text-2xl d-flex'><i className='ph-fill ph-star' /></li>
                    <li className='text-warning-600 text-2xl d-flex'><i className='ph-fill ph-star' /></li>
                    <li className='text-warning-600 text-2xl d-flex'><i className='ph-fill ph-star' /></li>
                    <li className='text-warning-600 text-2xl d-flex'><i className='ph-fill ph-star' /></li>
                    <li className='text-warning-600 text-2xl d-flex'><i className='ph-fill ph-star-half' /></li>
                  </ul>
                  <span className='text-neutral-700 fw-medium'>
                    2.5k+ reviews (4.95 of 5)
                  </span>
                </div>
              </div> */}
            </div>

            {/* FORM */}
            <div className='col-xl-5 col-lg-6'>
              <div className='p-24 bg-white rounded-12 box-shadow-md'>
                <div className='border border-neutral-30 rounded-8 bg-main-25 p-24'>
                  <form ref={formRef} onSubmit={sendEmail}>
                    <h4 className='mb-0'>Send Us a Message</h4>
                    <span className='d-block border border-neutral-30 my-24 border-dashed' />

                    <div className='mb-24'>
                      <label htmlFor='name' className='text-neutral-700 text-lg fw-medium mb-12'>
                        Name
                      </label>
                      <input type='text' name='name' className='common-input rounded-pill border-transparent focus-border-main-600' placeholder='Enter Name...' required />
                    </div>

                    <div className='mb-24'>
                      <label htmlFor='email' className='text-neutral-700 text-lg fw-medium mb-12'>
                        Email
                      </label>
                      <input type='email' name='email' className='common-input rounded-pill border-transparent focus-border-main-600' placeholder='Enter Email...' required />
                    </div>

                    <div className='mb-24'>
                      <label htmlFor='phone' className='text-neutral-700 text-lg fw-medium mb-12'>
                        Phone
                      </label>
                      <input type='tel' name='phone' className='common-input rounded-pill border-transparent focus-border-main-600' placeholder='Enter Your Number...' required />
                    </div>

                    <div className='mb-24'>
                      <label htmlFor='desc' className='text-neutral-700 text-lg fw-medium mb-12'>
                        Message
                      </label>
                      <textarea name='message' className='common-input rounded-24 border-transparent focus-border-main-600 h-110' placeholder='Enter Your Message...' required />
                    </div>

                    <div className='mb-0'>
                      <button type='submit'
                        disabled={loading} className='btn btn-main rounded-pill flex-center gap-8 mt-40'>
                        {loading ? "Sending..." : "Send Message"}
                        <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                      </button>
                      {showPopup && (
                        <div
                          style={{
                            marginTop: "20px",
                            padding: "10px 20px",
                            background: status.includes("success") ? "#4CAF50" : "#F44336",
                            color: "white",
                            borderRadius: "8px",
                            textAlign: "center",
                            transition: "all 0.3s",
                          }}
                        >
                          {status}

                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInner;
