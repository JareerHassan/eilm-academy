import AboutFourV2 from "@/components/AboutFourV2";
import BrandTwo from "@/components/BrandTwo";
import Breadcrumb from "@/components/Breadcrumb";
import CounterThreeV2 from "@/components/CounterThreeV2";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import PopularTeacherOne from "@/components/PopularTeacherOne";
import ReviewOne from "@/components/ReviewOne";
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
      <Breadcrumb title={"About Us 04"} />

      {/* AboutFourV2 */}
      <AboutFourV2 />

      {/* CounterThree */}
      <CounterThreeV2 />

      {/* PopularTeacherOne */}
      <PopularTeacherOne />

      {/* ReviewOne */}
      <ReviewOne />

      {/* BrandTwo */}
      <BrandTwo />

      {/* FooterThree */}
      <FooterThree />
    </>
  );
};

export default page;
