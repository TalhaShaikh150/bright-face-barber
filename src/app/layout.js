import { Bodoni_Moda, Plus_Jakarta_Sans, Space_Mono, Cormorant_Garamond, Italiana } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bodoni.variable} ${cormorant.variable} ${italiana.variable} ${jakarta.variable} ${spaceMono.variable} font-sans antialiased selection:bg-black selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
