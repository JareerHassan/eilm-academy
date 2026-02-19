import AboutOne from "@/components/AboutOne";
import BrandTwo from "@/components/BrandTwo";
import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import ChooseUsOne from "@/components/ChooseUsOne";
import CounterOne from "@/components/CounterOne";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import InstructorOne from "@/components/InstructorOne";
import TestimonialsOne from "@/components/TestimonialsOne";
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
      <Breadcrumb title={"About Us"} />

      {/* AboutOne */}
      <AboutOne />

      {/* InstructorOne */}
      <InstructorOne />

      {/* ChooseUsOne */}
      <ChooseUsOne />

      {/* <CounterOne /> */}

      {/* TestimonialsOne */}
      <TestimonialsOne />

      {/* BrandTwo */}
      {/* <BrandTwo /> */}

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterThree />
    </>
  );
};

export default page;
