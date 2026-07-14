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
  title: "Choomantar Mudhouse | Rustic Retreat in Naggar, Himachal",
  description: "Experience the raw beauty of Naggar at Choomantar Mudhouse. A rustic, traditional retreat in Sharan Village with mountain views, natural architecture, and peaceful vibes.",
  keywords: ["Choomantar", "Mudhouse", "Naggar", "Himachal Pradesh", "Homestay", "Rustic Retreat", "Mountain View", "Sharan Village", "Manali", "Eco-friendly stay"],
  openGraph: {
    title: "Choomantar Mudhouse | Raw Beauty of Naggar",
    description: "Experience the raw beauty of Naggar at Choomantar Mudhouse. A rustic, traditional retreat in Sharan Village.",
    url: "https://choomantar-website.vercel.app",
    siteName: "Choomantar Mudhouse",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Choomantar Mudhouse | Raw Beauty of Naggar",
    description: "Experience the raw beauty of Naggar at Choomantar Mudhouse.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
