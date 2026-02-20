import EilmAcademyDonorPage from "@components/Donor"
import HeaderOne from "@/components/HeaderOne";
import Breadcrumb from "@/components/Breadcrumb";
import FooterThree from "@/components/FooterThree";


export const metadata = {
  title: "Sponsor Islamic Education | Eilm Academy",
  description:
    "Sponsor Islamic education with Eilm Academy support student scholarships, Dars-e-Nizami sponsorship, sisters’ programs and global online access to sacred knowledge.",

  keywords: [
    "sponsor Islamic education",
    "sponsor a student Islamic studies",
    "donate for Quran education",
    "Islamic scholarship donation",
    "sponsor Dars-e-Nizami student",
    "sadaqah for Islamic education",
    "support sisters Islamic education",
    "student scholarship Islamic academy",
    "donate to Islamic academy",
    "fund online Islamic learning"
  ],

  metadataBase: new URL("https://eilmacademy.com"),

  alternates: {
    canonical: "/donation",
  },

  openGraph: {
    title: "Sponsor Islamic Education | Eilm Academy",
    description:
      "Support Quran and Sunnah education by sponsoring students and scholarships online.",
    url: "https://eilmacademy.com/donation",
    siteName: "Eilm Academy",
    images: [
      {
        url: "https://eilmacademy.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Sponsor Islamic Education Eilm Academy",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sponsor Islamic Education | Eilm Academy",
    description:
      "Donate to support Quran, Tajweed, Hadith and Dars-e-Nizami students.",
    images: ["https://eilmacademy.com/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* =========================
   ✅ SCHEMA MARKUP (DONATION PAGE)
========================= */

const donationSchema = {
  "@context": "https://schema.org",
  "@type": "DonateAction",
  name: "Sponsor Islamic Education",
  target: {
    "@type": "EntryPoint",
    urlTemplate: "https://eilmacademy.com/donation"
  },

  recipient: {
    "@type": "EducationalOrganization",
    name: "Eilm Academy",
    url: "https://eilmacademy.com",
    logo: "https://eilmacademy.com/logo.png",
    description:
      "Online Islamic academy providing Quran, Tajweed, Hadith, Hanafi Fiqh, Arabic and Dars-e-Nizami education through qualified scholars."
  },

  description:
    "Sponsor Islamic education by funding scholarships, Dars-e-Nizami students and sisters Islamic education programs."
};



export default function Eilm() {

    return(
      <>
         <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donationSchema) }}
      />
         <HeaderOne />

 <Breadcrumb title={"Donation"} />


        <EilmAcademyDonorPage />

         <FooterThree />
        </>
    )
}