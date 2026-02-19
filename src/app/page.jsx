import AboutThree from "@/components/AboutThree";
import BannerThree from "@/components/BannerThree";
import BlogTwo from "@/components/BlogTwo";
import BrandTwo from "@/components/BrandTwo";
import ChooseUsTwo from "@/components/ChooseUsTwo";
import CounterTwo from "@/components/CounterTwo";
import EventOne from "@/components/EventOne";
import FacultyOne from "@/components/FacultyOne";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import InfoTwo from "@/components/InfoTwo";
import TestimonialsThree from "@/components/TestimonialsThree";
import VideoOne from "@/components/VideoOne";
import Animation from "@/helper/Animation";
import InstructorOne from "@/components/InstructorOne";

export const metadata = {
  title: "E-ILM-ACADEMY",
  description:
  "Eilm Academy is a global online Islamic learning platform that provides authentic and structured education in the Qur'an, Hadith, Hanafi Fiqh, Arabic, and Tajweed. Gain knowledge from qualified scholars through live and recorded classes from the comfort of your home."
};

const page = () => {
  return (
    <>
      {/* HeaderOne */}
      <HeaderOne />

      {/* Animation */}
      <Animation />

      {/* BannerThree */}
      <BannerThree />

      {/* InfoTwo */}
      <InfoTwo />

      {/* AboutThree */}
      <AboutThree />

      {/* FacultyOne */}
      <FacultyOne />

   
      {/* InstructorOne */}
      <InstructorOne />

      
      {/* ChooseUsTwo */}
      <ChooseUsTwo />

      {/* VideoOne */}
      <VideoOne />

      {/* CounterTwo */}
      <CounterTwo />



      {/* EventOne */}
      <EventOne />


      {/* TestimonialsThree */}
      <TestimonialsThree />


      {/* BlogTwo */}
      {/* <BlogTwo /> */}

      {/* BrandTwo */}
      {/* <BrandTwo /> */}

      {/* FooterThree */}
      <FooterThree />
    </>
  );
};
export default page;
