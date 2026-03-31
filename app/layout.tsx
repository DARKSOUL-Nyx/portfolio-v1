import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import Cursor from "./components/Cursor";
// Load multiple weights for your massive headers
const clash = localFont({
  src: [
    { path: "./fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Regular.woff2", weight: "400" },
    { path: "./fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Medium.woff2", weight: "500" },
    { path: "./fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Bold.woff2", weight: "700" }
  ],
  variable: "--font-clash",
});

// Load multiple weights for your clean body text
const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Regular.woff2", weight: "400" },
    { path: "./fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Medium.woff2", weight: "500" },
    { path: "./fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Bold.woff2", weight: "700" }
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Nishwan | AI & Scalable Systems Engineer",
  description: "Specializing in Agentic AI, MLOps, and scalable infrastructure. Exploring the intersection of autonomous LLM frameworks and security.",
  keywords: ["AI Engineer", "Machine Learning", "MLOps", "Agentic AI", "LLM Security", "Software Engineer", "Nishwan"],
  openGraph: {
    title: "Nishwan | AI & Scalable Systems",
    description: "Building autonomous frameworks that reason, adapt, and secure themselves.",
    url: "https://vssnishwan.xyz",
    siteName: "Nishwan Portfolio",
    images: [
      {
        url: "/opengraph-image.png", // We will create this next
        width: 1200,
        height: 630,
        alt: "Nishwan - AI & ML Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishwan | AI & Scalable Systems",
    description: "Building autonomous frameworks that reason, adapt, and secure themselves.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      {/* Apply the CSS variables to the body */}
      <body className={`${satoshi.variable} ${clash.variable} font-satoshi antialiased bg-[#050505] text-neutral-200 min-h-screen`}>
        <Cursor />
        {children}
        
      </body>
    </html>
  );
}