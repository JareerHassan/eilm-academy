import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import ContactInner from "@/components/ContactInner";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";


export const metadata = {
  title: "Contact Eilm Academy for admissions and course guidance",
  description:
    "Contact Eilm Academy for admissions and course guidance. Get help choosing Qur’an, Tajweed, Hadith, Fiqh, Arabic or Dars-e-Nizami programs—Islamabad campus.",

  keywords: [
    "contact Eilm Academy",
    "Islamic academy contact",
    "Islamic courses admission contact",
    "online Islamic studies support",
    "Quran course inquiry",
    "Dars-e-Nizami admission help",
    "Islamic learning guidance",
    "Islamabad Islamic academy",
    "Islamic institute Islamabad",
    "WhatsApp Islamic academy",
    "speak to Islamic scholar online"
  ],

  metadataBase: new URL("https://eilmacademy.com"),

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Eilm Academy | Admissions & Course Guidance",
    description:
      "Get admissions help and course guidance for Quran, Tajweed, Hadith, Fiqh, Arabic and Dars-e-Nizami programs.",
    url: "https://eilmacademy.com/contact",
    siteName: "Eilm Academy",
    images: [
      {
        url: "https://eilmacademy.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Eilm Academy Islamabad",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Eilm Academy | Admissions & Guidance",
    description:
      "Contact for online Islamic courses enrollment and guidance.",
    images: ["https://eilmacademy.com/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* =========================
   ✅ SCHEMA MARKUP (CONTACT PAGE)
========================= */

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Eilm Academy",
  url: "https://eilmacademy.com/contact",
  description:
    "Contact Eilm Academy for admissions, course guidance and Islamic studies inquiries.",

  mainEntity: {
    "@type": "EducationalOrganization",
    name: "Eilm Academy",
    url: "https://eilmacademy.com",
    logo: "https://eilmacademy.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Admissions & Course Guidance",
      availableLanguage: ["English", "Urdu"],
      areaServed: "PK"
      /* Agar tum phone / WhatsApp add karna chaho:
      telephone: "+92XXXXXXXXXX"
      */
    }
  }
};


const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Contact"} />

      {/* ContactInner */}
      <ContactInner />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterThree />
    </>
  );
};

export default page;
