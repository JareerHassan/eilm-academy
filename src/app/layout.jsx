import BootstrapInit from "@/helper/BootstrapInit";
import RouteScrollToTop from "@/helper/RouteScrollToTop";
import LoadPhosphorIcons from "@/helper/LoadPhosphorIcons";
import "./font.css";
import "./globals.scss";

export const metadata = {
  title: "E-ILM-ACADEMY",
  description:
  "Eilm Academy is a global online Islamic learning platform that provides authentic and structured education in the Qur'an, Hadith, Hanafi Fiqh, Arabic, and Tajweed. Gain knowledge from qualified scholars through live and recorded classes from the comfort of your home."
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <BootstrapInit />
        <LoadPhosphorIcons />

        <RouteScrollToTop />
        {children}
      </body>
    </html>
  );
}
