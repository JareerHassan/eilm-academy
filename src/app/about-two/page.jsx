import AboutTwo from "@/components/AboutTwo";
import Breadcrumb from "@/components/Breadcrumb";
import CertificateTwo from "@/components/CertificateTwo";
import FeaturesTwo from "@/components/FeaturesTwo";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import InfoSectionOne from "@/components/InfoSectionOne";
import JoinCommunityOne from "@/components/JoinCommunityOne";
import TestimonialsTwo from "@/components/TestimonialsTwo";
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
      <Breadcrumb title={"About Us 02"} />

      {/* FeaturesTwo */}
      <FeaturesTwo />

      {/* InfoSectionOne */}
      <InfoSectionOne />

      {/* AboutTwo */}
      <AboutTwo />

      {/* CertificateTwo */}
      <CertificateTwo />

      {/* JoinCommunityOne */}
      <JoinCommunityOne />

      {/* TestimonialsTwo */}
      <TestimonialsTwo />

      {/* FooterThree */}
      <FooterThree />
    </>
  );
};

export default page;
