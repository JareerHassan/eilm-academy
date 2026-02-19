import Breadcrumb from "@/components/Breadcrumb";
import CartInner from "@/components/CartInner";
import CertificateOne from "@/components/CertificateOne";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
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
      <Breadcrumb title={"Cart List"} />

      {/* CartInner */}
      <CartInner />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterThree />
    </>
  );
};

export default page;
