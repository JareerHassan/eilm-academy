import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import CourseGridView from "@/components/CourseGridView";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";
import FacultyOne from "@/components/FacultyOne";


export const metadata = {
  title: "Islamic Courses Online – Qur’an, Tafseer & Dars-e-Nizami | Eilm Academy",
  description:
    "Explore Islamic courses online at Eilm Academy: Qur’an & Tajweed, Tafseer, Hadith, Hanafi Fiqh, Arabic & Dars-e-Nizami. Enroll in structured levels.",

  keywords: [
    "Islamic courses online",
    "Islamic studies courses online",
    "Quran course online",
    "Tajweed course online",
    "Tafseer course online",
    "Hadith course online",
    "Hanafi Fiqh course online",
    "Arabic language course online",
    "Dars-e-Nizami course online",
    "Seerat un Nabi course online",
    "Ilm-e-Deen course online"
  ],

  metadataBase: new URL("https://eilmacademy.com"),

  alternates: {
    canonical: "/course",
  },

  openGraph: {
    title: "Online Islamic Courses – Qur’an, Tafseer & Dars-e-Nizami | Eilm Academy",
    description:
      "Enroll in structured Islamic studies courses online with qualified scholars. Quran, Tajweed, Hadith, Fiqh, Arabic & Dars-e-Nizami.",
    url: "https://eilmacademy.com/course",
    siteName: "Eilm Academy",
    images: [
      {
        url: "https://eilmacademy.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Islamic Courses Online Eilm Academy",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online Islamic Courses – Qur’an, Tafseer & Dars-e-Nizami | Eilm Academy",
    description:
      "Join Islamic courses online with certificate. Quran, Tajweed, Tafseer, Hadith and Arabic programs available.",
    images: ["https://eilmacademy.com/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* =========================
   ✅ SCHEMA MARKUP (COURSES)
========================= */

const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Islamic Courses Online",
  url: "https://eilmacademy.com/course",
  description:
    "Browse Islamic courses online including Quran, Tajweed, Tafseer, Hadith, Hanafi Fiqh, Arabic and Dars-e-Nizami.",

  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Course",
        position: 1,
        name: "Online Quran Course with Tajweed",
        description:
          "Learn Quran recitation with Tajweed rules under qualified scholars."
      },
      {
        "@type": "Course",
        position: 2,
        name: "Hanafi Fiqh Course Online",
        description:
          "Structured Islamic jurisprudence course based on Hanafi methodology."
      },
      {
        "@type": "Course",
        position: 3,
        name: "Tafseer and Hadith Course",
        description:
          "Comprehensive study of Quranic interpretation and Hadith sciences."
      },
      {
        "@type": "Course",
        position: 4,
        name: "Arabic Language Course Online",
        description:
          "Learn Arabic language for understanding Quran and Islamic texts."
      },
      {
        "@type": "Course",
        position: 5,
        name: "Dars-e-Nizami Online Program",
        description:
          "Complete Alim / Alimah Islamic studies curriculum online."
      }
    ]
  }
};

const page = () => {
  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />

      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Courses"} />

      {/* CourseGridView */}
      {/* <CourseGridView /> */}
   <FacultyOne />
      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterThree />  
        </>
  );
};

export default page;
