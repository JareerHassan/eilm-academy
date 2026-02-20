import BootstrapInit from "@/helper/BootstrapInit";
import RouteScrollToTop from "@/helper/RouteScrollToTop";
import LoadPhosphorIcons from "@/helper/LoadPhosphorIcons";
import "./font.css";
import "./globals.scss";

export const metadata = {
  title: "Online Islamic Courses – Qur’an, Fiqh & Dars-e-Nizami | Eilm Academy",
  description:
    "Online Islamic courses by Eilm Academy: Qur’an, Tajweed, Hadith, Hanafi Fiqh, Arabic & Dars-e-Nizami. Learn live or recorded with qualified scholars.",
  keywords: [
    "online Islamic courses",
    "Islamic courses online",
    "Hanafi Fiqh course online",
    "learn Arabic online for Quran",
    "online Dars-e-Nizami",
    "Alim course online",
    "Islamic academy online",
    "Islamic studies online",
    "online Quran classes",
    "online Tajweed course",
    "online Hadith course"
  ],

  metadataBase: new URL("https://eilmacademy.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Online Islamic Courses – Qur’an, Fiqh & Dars-e-Nizami | Eilm Academy",
    description:
      "Structured Islamic education online: Qur’an, Hadith, Hanafi Fiqh, Arabic & Tajweed. Live & recorded classes with scholars.",
    url: "https://eilmacademy.com",
    siteName: "Eilm Academy",
    images: [
      {
        url: "https://eilmacademy.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Eilm Academy Online Islamic Courses",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online Islamic Courses – Qur’an, Fiqh & Dars-e-Nizami | Eilm Academy",
    description:
      "Join online Islamic courses with scholars. Quran, Hadith, Fiqh, Arabic & Dars-e-Nizami.",
    images: ["https://eilmacademy.com/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* =========================
   ✅ SCHEMA MARKUP (JSON-LD)
========================= */

const schemaData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Eilm Academy",
  url: "https://eilmacademy.com",
  logo: "https://eilmacademy.com/logo.png",
  description:
    "Eilm Academy provides online Islamic courses including Quran, Tajweed, Hadith, Hanafi Fiqh, Arabic and Dars-e-Nizami through live and recorded classes.",

  offers: {
    "@type": "Offer",
    category: "Online Islamic Courses",
    availability: "https://schema.org/InStock"
  },
  hasCourse: [
    {
      "@type": "Course",
      name: "Online Quran Course with Tajweed",
      description: "Learn Quran recitation with Tajweed from qualified scholars."
    },
    {
      "@type": "Course",
      name: "Hanafi Fiqh Course Online",
      description: "Structured Hanafi jurisprudence course for Islamic studies students."
    },
    {
      "@type": "Course",
      name: "Online Dars-e-Nizami Program",
      description: "Complete Alim / Alimah Islamic studies program online."
    }
  ]
};


export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
         <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
        <BootstrapInit />
        <LoadPhosphorIcons />

        <RouteScrollToTop />
        {children}
      </body>
    </html>
  );
}
