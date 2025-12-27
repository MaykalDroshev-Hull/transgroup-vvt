import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import CookieBanner from "../components/CookieBanner";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TransGroup VVT - Надеждни логистични решения",
  description: "Международен и вътрешен транспорт, съобразен с нуждите на модерния бизнес",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingButton />
        <CookieBanner />
      </body>
    </html>
  );
}
