import { Bodoni_Moda, Plus_Jakarta_Sans, Cormorant_Garamond, Italiana, Poppins } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni-family",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant-family",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const italiana = Italiana({
  variable: "--font-italiana-family",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta-family",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins-family",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Bright Face Barber | 33 Newman Street, London W1",
  description: "Mastering the Art of Grooming in Fitzrovia, London. Traditional hot towel shave, precision haircut, and bespoke beard sculpting.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import SmoothScroll from "@/components/SmoothScroll";
import { FontProvider } from "@/context/FontContext";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function RootLayout({ children }) {
  const fontClasses = `${bodoni.variable} ${cormorant.variable} ${italiana.variable} ${jakarta.variable} ${poppins.variable}`;
  return (
    <html lang="en" className={`${fontClasses}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Italiana&family=Plus+Jakarta+Sans:wght@300..800&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${fontClasses} font-sans antialiased selection:bg-black selection:text-white pb-14 sm:pb-0`}
      >
        <FontProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <MobileStickyCTA />
        </FontProvider>
      </body>
    </html>
  );
}
