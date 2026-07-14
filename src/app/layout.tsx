import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import FloatingActions from "@/components/FloatingActions";

const sansFont = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Choomantar | Raw Beauty of Naggar",
  description: "A Rustic Retreat in Sharan Village, Naggar. Experience traditional architecture, peaceful vibes, and mountain views.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${serifFont.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-sand text-pine">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
