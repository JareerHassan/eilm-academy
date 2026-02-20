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
  title: "About Eilm Academy | Online Quran and Sunnah Education",
  description:
    "Eilm Academy provides Quran and Sunnah education online with structured courses in Qur’an, Hadith, Hanafi Fiqh, Arabic & Dars-e-Nizami guided by qualified scholars.",

  keywords: [
    "Quran and Sunnah education",
    "online Islamic courses",
    "Islamic education online",
    "Hanafi Fiqh institute online",
    "Islamic studies academy",
    "Alim course online",
    "Dars-e-Nizami online program",
    "qualified Islamic scholars online",
    "structured Islamic curriculum",
    "Islamic education for beginners to advanced"
  ],

  metadataBase: new URL("https://eilmacademy.com"),

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Eilm Academy | Quran and Sunnah Education Online",
    description:
      "Learn Quran and Sunnah online with qualified scholars. Structured Islamic curriculum for beginners to advanced students.",
    url: "https://eilmacademy.com/about",
    siteName: "Eilm Academy",
    images: [
      {
        url: "https://eilmacademy.com/logo.png",
        width: 1200,
        height: 630,
        alt: "About Eilm Academy Islamic Education",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Eilm Academy | Quran and Sunnah Education",
    description:
      "Online Islamic academy offering structured Quran, Hadith, Fiqh and Dars-e-Nizami education.",
    images: ["https://eilmacademy.com/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* =========================
   ✅ SCHEMA MARKUP (ABOUT PAGE)
========================= */

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Eilm Academy",
  url: "https://eilmacademy.com/about",
  description:
    "Eilm Academy is an online Quran and Sunnah education platform offering structured Islamic courses including Quran, Hadith, Hanafi Fiqh, Arabic and Dars-e-Nizami.",

  mainEntity: {
    "@type": "EducationalOrganization",
    name: "Eilm Academy",
    url: "https://eilmacademy.com",
    logo: "https://eilmacademy.com/logo.png",
    description:
      "Online Islamic academy providing Quran and Sunnah education through qualified scholars and structured curriculum.",
  
    hasCourse: [
      {
        "@type": "Course",
        name: "Dars-e-Nizami Online Program",
        description:
          "Comprehensive Alim / Alimah Islamic studies curriculum based on Quran and Sunnah."
      },
      {
        "@type": "Course",
        name: "Hanafi Fiqh Course Online",
        description:
          "Structured jurisprudence program based on Hanafi methodology."
      }
    ]
  }
};

const page = () => {
  return (
    <>

         <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

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
