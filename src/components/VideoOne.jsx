"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const VideoOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className='video pt-120'>
      <div className='container'>
        <div className='section-heading text-center'>
          <div className='flex-align d-inline-flex gap-8 mb-16'>
            <span className='text-main-600 text-2xl d-flex'>
              <i className='ph-bold ph-book-open' />
            </span>
            <h5 className='text-main-600 mb-0'>Islamic Learning</h5>
          </div>

          <h2 className='mb-24 wow bounceIn'>E-ILM-Academy Highlights</h2>

          <p className='wow bounceInDown'>
            Discover an inspiring environment where Qur’an, Sunnah, and Islamic
            education come to life through authentic learning and spiritual growth.
          </p>
        </div>
      </div>

      <div className='video-img position-relative half-bg'>
        <div className='container wow bounceIn'>
          <img
            src='assets/images/thumbs/video-img.webp'
            className='rounded-12 cover-img'
            alt=''
            data-tilt=''
            data-tilt-max={4}
            data-tilt-speed={500}
            data-tilt-perspective={5000}
            data-tilt-transition='1s'
          />

          <span
            onClick={() => setIsOpen(true)}
            className='play-button position-absolute start-50 top-50 translate-middle z-1 w-72 h-72 flex-center bg-main-two-600 text-white rounded-circle text-2xl'
          >
            <i className='ph-fill ph-play' />
          </span>
        </div>
      </div>

      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='b6WbXIG52yI'
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />
    </section>
  );
};

export default VideoOne;
