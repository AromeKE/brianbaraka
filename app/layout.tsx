import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Brian Baraka | Growth Operator & Media Strategist",
    template: "%s | Brian Baraka",
  },
  description: "8+ years building and scaling growth systems across Africa and Europe. Performance marketing, media strategy, and attribution that drives real results.",
  keywords: ["growth marketing", "performance marketing", "media strategy", "Brian Baraka", "Nairobi", "digital marketing", "Meta Ads", "Google Ads"],
  authors: [{ name: "Brian Baraka" }],
  creator: "Brian Baraka",
  openGraph: {
    title: "Brian Baraka | Growth Operator & Media Strategist",
    description: "8+ years building and scaling growth systems across Africa and Europe.",
    url: "https://brianbaraka.com",
    siteName: "Brian Baraka",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Baraka | Growth Operator & Media Strategist",
    description: "8+ years building and scaling growth systems across Africa and Europe.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main style={{ minHeight: "100vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
