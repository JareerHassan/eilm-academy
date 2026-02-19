import AboutTwo from "@/components/AboutTwo";
import BannerTwo from "@/components/BannerTwo";
import CategoryOne from "@/components/CategoryOne";
import CertificateTwo from "@/components/CertificateTwo";
import ExploreCourseTwo from "@/components/ExploreCourseTwo";
import FaqOne from "@/components/FaqOne";
import FeaturesTwo from "@/components/FeaturesTwo";
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
      {/* HeaderOne */}
      <HeaderOne />

      {/* Animation */}
      <Animation />

      {/* BannerTwo */}
      <BannerTwo />

      {/* InfoSectionOne */}
      <InfoSectionOne />

      {/* CategoryOne */}
      <CategoryOne />

      {/* AboutTwo */}
      <AboutTwo />

      {/* FeaturesTwo */}
      <FeaturesTwo />

      {/* CertificateTwo */}
      <CertificateTwo />

      {/* ExploreCourseTwo */}
      <ExploreCourseTwo />

      {/* TestimonialsTwo */}
      <TestimonialsTwo />

      {/* JoinCommunityOne */}
      <JoinCommunityOne />

      {/* FaqOne */}
      <FaqOne />

      {/* FooterTwo */}
    </>
  );
};

export default page;
