import Breadcrumb from "@/components/Breadcrumb";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import SignInInner from "@/components/SignInInner";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Student Login Eilm Academy",
  description:
    "Access your Student Login Eilm Academy to join live classes, watch recorded lectures, submit assignments, and manage your Islamic courses dashboard.",

  keywords: [
    "student login",
    "Eilm Academy login",
    "Islamic courses login",
    "online Islamic academy login",
    "student portal login",
    "Dars-e-Nizami login",
    "Quran course login",
    "access student dashboard",
    "Islamic learning portal login"
  ],

  metadataBase: new URL("https://eilmacademy.com"),

  alternates: {
    canonical: "/sign-in",
  },

  openGraph: {
    title: "Student Login | Eilm Academy",
    description:
      "Login to access your Islamic courses dashboard, live classes and student portal.",
    url: "https://eilmacademy.com/sign-in",
    siteName: "Eilm Academy",
    images: [
      {
        url: "https://eilmacademy.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Eilm Academy Student Login",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Student Login | Eilm Academy",
    description:
      "Access your student dashboard and Islamic courses portal.",
    images: ["https://eilmacademy.com/logo.png"],
  },

  robots: {
    index: false, // login pages ko index nahi karna chahiye
    follow: true,
  },
};

/* =========================
   ✅ SCHEMA MARKUP (LOGIN PAGE)
========================= */

const loginSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Student Login",
  url: "https://eilmacademy.com/sign-in",
  description:
    "Login page for Eilm Academy students to access courses, classes and dashboard.",

  potentialAction: {
    "@type": "LoginAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://eilmacademy.com/sign-in"
    }
  }
};


const page = () => {
  return (
    <>

        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(loginSchema) }}
      />

      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Sign In"} />

      {/* SignInInner */}
      <SignInInner />

      {/* FooterOne */}
      <FooterThree />
    </>
  );
};

export default page;
