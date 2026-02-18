"use client";
import StudentSidebar from "@/components/StudentSidebar";
import { FaBookOpen, FaIdBadge, FaEnvelope, FaPhone } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function StudentHome() {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth <= 768 ? "mobile" : "desktop");
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bgPath = "/assets/images/bg-card.jpeg";
  const userImg = "https://res.cloudinary.com/dx0naofle/image/upload/v1771302680/wmremove-transformed_ac503y.png"; // Placeholder Image

  return (
    <div className="layout-wrapper">
      <StudentSidebar />

      <main className="main-viewport">
        <div className="content-container">
          {/* Page Heading */}
          <div className="page-header">
            <div>
              <h1>Student Dashboard</h1>
              <p>Welcome back! Continue your learning journey with Eilm Academy.</p>
            </div>
          </div>

          {/* Main Card Section */}
          <section
            className="tafseer-hero-section"
            style={{
              backgroundImage: `url("${bgPath}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="tafseer-card-overlay">

              <div className="tafseer-header">
                {/* <div className="quran-icon-blue">
                  <FaBookOpen />
                </div> */}
                <div className="title-stack">
                  <h2>Join Tafseer Class</h2>
                  <span>Live Online Session</span>
                </div>
              </div>
              <p className="tafseer-description">
                Learn the deeper meaning of the Qur’an with expert scholars in interactive online sessions.
              </p>
              <a href="https://meet.google.com/cmb-rjxq-ibd" target="_blank" rel="noopener noreferrer" className="btn-join-now">
                Join Now
              </a>
            </div>
          </section>

          {/* User Profile Info Card */}
          <section className="user-profile-card">
            <div className="profile-image-wrapper">
              <img src={userImg} alt="User Profile" className="profile-img" />
            </div>

            <div className="profile-details">
              <div className="info-group">
                <FaIdBadge className="info-icon" />
                <div className="text-stack">
                  <label>Full Name</label>
                  <p className='text-black fw-bold hover-text-main-600 '>Ustad Mufti Inamullah</p>
                </div>
              </div>

              <div className="info-group">
                <FaEnvelope className="info-icon" />
                <div className="text-stack">
                  <label>Email Address</label>
                  <a
                    href='mailto:Eilmacademy@gmail.com'
                    className='text-black fw-bold hover-text-main-600 '
                    aria-label='Email us at Eilmacademy@gmail.com'
                  >
                    Eilmacademy@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-group">
                <FaPhone className="info-icon" />
                <div className="text-stack">
                  <label>Contact Number</label>
                  <a
                    href="tel:+923155090055"
                    className="text-black fw-bold hover-text-main-600 "
                    aria-label="Call us at 03155090055"
                  >
                    +92 315 5090055
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <style jsx>{`
        .layout-wrapper { 
          display: flex; 
          min-height: 100vh; 
          font-family: 'Inter', sans-serif; 
          background: #f0f4fd;
          overflow-x: hidden;
        }

        .main-viewport { 
          flex: 1; 
          padding: 40px; 
          margin-left: ${screenSize === "mobile" ? "0" : "260px"}; 
          transition: margin 0.3s ease-in-out, padding 0.3s; 
        }

        .content-container { 
          max-width: 1200px; 
          margin: 0 auto; 
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 30px; /* Hero aur Profile card ke beech gap */
        }

        /* Hero Styles */
        .tafseer-hero-section {
          width: 100%;
          height: 500px;
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 2px solid white;
        }

        .tafseer-card-overlay {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 20px;
          width: 90%;
          max-width: 600px;
        }

        .tafseer-header { display: flex; align-items: center; gap: 20px; margin-bottom: 20px; }
        .quran-icon-blue { font-size: 40px; color: #3b82f6; background: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 50%; }
        .title-stack h2 { font-size: 32px; color: #2563eb; margin: 0; font-weight: 800; }
        .title-stack span { color: #60a5fa; font-size: 18px; font-weight: 500; }
        .tafseer-description { color: #475569; font-size: 17px; line-height: 1.5; margin-bottom: 25px; }
        .btn-join-now { display: inline-block; background: #3b82f6; color: white; padding: 14px 40px; border-radius: 15px; font-size: 18px; font-weight: 700; text-decoration: none; transition: 0.3s; }
        .btn-join-now:hover { background: #2563eb; transform: translateY(-2px); }

        /* Profile Card Styles */
        .user-profile-card {
          background: white;
          border-radius: 30px;
          padding: 30px;
          display: flex;
          align-items: center;
          gap: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0,0,0,0.02);
        }

        .profile-image-wrapper {
          flex-shrink: 0;
        }

        .profile-img {
          width: 120px;
          height: 120px;
          border-radius: 25px;
          object-fit: cover;
          border: 4px solid #f0f4fd;
        }

        .profile-details {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          flex: 1;
        }

        .info-group {
          display: flex;
          align-items: center;
          gap: 15px;
          min-width: 200px;
        }
          .page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 30px;
}

.page-header h1 {
  font-size: 28px;
  font-weight: 800;
  color: #1e293b;
  margin: 0;
}

.page-header p {
  margin: 4px 0 0 0;
  color: #64748b;
  font-size: 15px;
}

/* Tablet */
@media (max-width: 1024px) {
  .page-header h1 {
    font-size: 24px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    margin-bottom: 5px;
      margin-top: 40px;
  }

  .page-header h1 {
    font-size: 22px;
  }

  .page-header p {
    font-size: 14px;
  }
}


        .info-icon {
          font-size: 24px;
          color: #3b82f6;
          background: #f0f7ff;
          padding: 10px;
          border-radius: 12px;
        }

        .text-stack label {
          display: block;
          font-size: 13px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
          font-weight: 600;
        }

        .text-stack p {
          margin: 0;
          font-size: 16px;
          color: #1e293b;
          font-weight: 600;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .profile-details { gap: 25px; }
          .user-profile-card { gap: 25px; }
        }

        @media (max-width: 768px) {
          .main-viewport { padding: 15px; margin-left: 0; }
          .tafseer-hero-section { height: auto; padding: 40px 10px; border-radius: 24px; }
          
          .user-profile-card { 
            flex-direction: column; 
            text-align: center; 
            padding: 25px;
            gap: 20px;
          }

          .profile-details { 
            flex-direction: column; 
            gap: 20px; 
            width: 100%;
          }

          .info-group {
            justify-content: flex-start;
            background: #f8fafc;
            padding: 15px;
            border-radius: 15px;
            width: 100%;
          }

          .text-stack { text-align: left; }
          
          .profile-img {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </div>
  );
}