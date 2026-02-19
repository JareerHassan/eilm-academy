import AboutFour from "@/components/AboutFour";
import BannerFour from "@/components/BannerFour";
import CertificateThree from "@/components/CertificateThree";
import CounterThree from "@/components/CounterThree";
import FooterThree from "@/components/FooterThree";
import FreeTrailOne from "@/components/FreeTrailOne";
import HeaderOne from "@/components/HeaderOne";
import HowItWorkOne from "@/components/HowItWorkOne";
import PopularTeacherOne from "@/components/PopularTeacherOne";
import ReviewOne from "@/components/ReviewOne";
import SpecialistOne from "@/components/SpecialistOne";
import TuitionTypesOne from "@/components/TuitionTypesOne";
import WorkProcessOne from "@/components/WorkProcessOne";
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

      {/* BannerFour */}
      <BannerFour />

      {/* TuitionTypesOne */}
      <TuitionTypesOne />

      {/* AboutFour */}
      <AboutFour />

      {/* CounterThree */}
      <CounterThree />

      {/* PopularTeacherOne */}
      <PopularTeacherOne />

      {/* WorkProcessOne */}
      <WorkProcessOne />

      {/* FreeTrailOne */}
      <FreeTrailOne />

      {/* SpecialistOne */}
      <SpecialistOne />

      {/* ReviewOne */}
      <ReviewOne />

      {/* HowItWorkOne */}
      <HowItWorkOne />

      {/* CertificateThree */}
      <CertificateThree />

      {/* FooterOne */}
      <FooterThree />
    </>
  );
};

export default page;
