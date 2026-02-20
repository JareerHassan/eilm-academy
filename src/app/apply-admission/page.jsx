import ApplyForAdmission from "@/components/ApplyForAdmission";
import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Enroll in Online Islamic Courses | Eilm Academy",
  description:
    "Enroll in online Islamic courses at Eilm Academy. Register for Qur’an, Tajweed, Hadith, Hanafi Fiqh, Arabic, and Dars-e-Nizami programs today.",

  keywords: [
    "enroll in online Islamic courses",
    "enroll Islamic courses online",
    "register for Quran classes",
    "join Islamic academy online",
    "Dars-e-Nizami admission online",
    "Islamic studies registration",
    "apply Islamic courses online",
    "Tafseer course enrollment",
    "Arabic course registration"
  ],

  metadataBase: new URL("https://eilmacademy.com"),

  alternates: {
    canonical: "/apply-admission",
  },

  openGraph: {
    title: "Enroll in Online Islamic Courses | Eilm Academy",
    description:
      "Apply for admission in Quran, Tajweed, Tafseer, Hadith, Fiqh, Arabic and Dars-e-Nizami programs.",
    url: "https://eilmacademy.com/apply-admission",
    siteName: "Eilm Academy",
    images: [
      {
        url: "https://eilmacademy.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Enroll in Online Islamic Courses",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Enroll in Online Islamic Courses | Eilm Academy",
    description:
      "Register for Islamic courses online and start structured learning today.",
    images: ["https://eilmacademy.com/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* =========================
   ✅ SCHEMA MARKUP (ENROLLMENT PAGE)
========================= */

const admissionSchema = {
  "@context": "https://schema.org",
  "@type": "RegisterAction",
  name: "Enroll in Online Islamic Courses",
  target: {
    "@type": "EntryPoint",
    urlTemplate: "https://eilmacademy.com/apply-admission"
  },

  object: {
    "@type": "Course",
    name: "Online Islamic Courses",
    description:
      "Structured Islamic education including Quran, Tajweed, Tafseer, Hadith, Hanafi Fiqh, Arabic and Dars-e-Nizami."
  },

  provider: {
    "@type": "EducationalOrganization",
    name: "Eilm Academy",
    url: "https://eilmacademy.com",
    logo: "https://eilmacademy.com/logo.png"
  }
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Apply for admission in Tafseer course"} />

      {/* ApplyForAdmission */}
      <ApplyForAdmission />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterThree />
    </>
  );
};

export default page;
