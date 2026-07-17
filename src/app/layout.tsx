import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vaibhav Thore | Software Developer Portfolio",
  description:
    "Full Stack / MERN Stack Developer specializing in React.js, Node.js, Express.js, MongoDB, and modern web technologies. View my projects, experience, and skills.",
  keywords: [
    "Vaibhav Thore",
    "Software Developer",
    "Full Stack Developer",
    "MERN Stack",
    "React.js",
    "Node.js",
    "Next.js",
    "Portfolio",
    "Pune",
  ],
  authors: [{ name: "Vaibhav Thore" }],
  openGraph: {
    title: "Vaibhav Thore | Software Developer Portfolio",
    description:
      "Full Stack / MERN Stack Developer specializing in React.js, Node.js, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col gradient-bg">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
