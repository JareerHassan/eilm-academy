import Breadcrumb from "@/components/Breadcrumb";
import CourseDetails from "@/components/CourseDetails";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Online Tafseer Course – Learn Quran | Eilm Academy",
  description:
    "Join the online Tafseer course at Eilm Academy and study Qur’an explanation through authentic classical sources. Structured levels, live classes, and scholar guidance.",

  keywords: [
    "online Tafseer course",
    "Tafsir course online",
    "Quran Tafseer classes online",
    "learn Tafseer online",
    "Quran explanation course",
    "online Quran interpretation course",
    "structured Tafseer program",
    "Islamic Tafsir studies",
    "Tafseer Ibn Kathir course",
    "advanced Tafseer course",
    "Quran commentary course online"
  ],

  metadataBase: new URL("https://eilmacademy.com"),

  alternates: {
    canonical: "/course-details/Tafseer",
  },

  openGraph: {
    title: "Online Tafseer Course – Learn Quran | Eilm Academy",
    description:
      "Study Quran Tafseer online with structured lessons, scholar guidance and live classes.",
    url: "https://eilmacademy.com/course-details/Tafseer",
    siteName: "Eilm Academy",
    images: [
      {
        url: "https://eilmacademy.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Online Tafseer Course",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online Tafseer Course – Learn Quran",
    description:
      "Join structured Quran Tafseer classes online with scholars.",
    images: ["https://eilmacademy.com/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* =========================
   ✅ SCHEMA MARKUP (COURSE PAGE)
========================= */

const tafseerCourseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Online Tafseer Course",
  description:
    "Comprehensive Quran Tafseer course based on authentic classical sources with structured levels and scholar guidance.",

  provider: {
    "@type": "EducationalOrganization",
    name: "Eilm Academy",
    url: "https://eilmacademy.com",
    logo: "https://eilmacademy.com/logo.png"
  },

  educationalLevel: "Beginner to Advanced",
  courseMode: "Online",
  teaches: [
    "Quran Tafseer",
    "Quran interpretation",
    "Islamic studies",
    "Classical Tafsir methodology"
  ]
};


const page = () => {
  return (
    <>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tafseerCourseSchema) }}
      />
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Courses Details"} />

      {/* CourseDetails */}
      <CourseDetails />

      {/* CertificateOne */}
      {/* <CertificateOne /> */}

      {/* FooterOne */}
      <FooterThree />
    </>
  );
};

export default page;
