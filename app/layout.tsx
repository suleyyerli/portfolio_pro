import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const VictorMono = localFont({
  src: "./fonts/VictorMono-Regular.ttf",
  variable: "--font-victor-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${VictorMono.variable} max-w-6xl antialiased flex flex-col bg-[#141414] text-text  mx-auto`}
      >
        <Header />
        <div className="max-w-6xl mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
