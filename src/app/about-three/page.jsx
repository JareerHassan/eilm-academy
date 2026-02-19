import AboutThreeWhiteBG from "@/components/AboutThreeWhiteBG";
import BrandTwo from "@/components/BrandTwo";
import Breadcrumb from "@/components/Breadcrumb";
import CounterOne from "@/components/CounterOne";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import TestimonialsThree from "@/components/TestimonialsThree";
import VideoOneV2 from "@/components/VideoOneV2";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "E-ILM-ACADEMY",
 description:
  "Eilm Academy is a global online Islamic learning platform that provides authentic and structured education in the Qur'an, Hadith, Hanafi Fiqh, Arabic, and Tajweed. Gain knowledge from qualified scholars through live and recorded classes from the comfort of your home."
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"About Us 03"} />

      {/* AboutThreeWhiteBG */}
      <AboutThreeWhiteBG />

      {/* CounterOne */}
      <CounterOne />

      {/* BrandTwo */}
      <BrandTwo />

      {/* VideoOneV2 */}
      <VideoOneV2 />

      {/* TestimonialsThree */}
      <TestimonialsThree />

      {/* FooterThree */}
      <FooterThree />
    </>
  );
};

export default page;
