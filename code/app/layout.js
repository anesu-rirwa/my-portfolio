import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/footer";
import Nav from "@/components/Navbar/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anesu Rirwa | AI/ML Engineer & Data Analyst",
  description: "Portfolio of Anesu Rirwa – showcasing projects, skills, and services in artificial intelligence, machine learning, and data analysis.",
  authors: [{ name: "Anesu Rirwa", url: "https://www.tenagelabs.com" }],
  keywords: [
    "Anesu Rirwa",
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Analyst",
    "Next.js Portfolio",
    "Tenage Labs",
    "Zimbabwe AI",
    "AI Portfolio",
    "Data Science Portfolio",
    "Business Intelligence",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Analytics",
  ],
  openGraph: {
    title: "Anesu Rirwa | AI/ML Engineer & Data Analyst",
    description: "Explore Anesu Rirwa's portfolio highlighting expertise in AI, ML, and data analytics.",
    url: "https://www.tenagelabs.com",
    siteName: "Anesu Rirwa Portfolio",
    locale: "en_ZW",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
