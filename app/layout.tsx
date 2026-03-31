import localFont from "next/font/local";
import "./globals.css";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      {/* Apply the CSS variables to the body */}
      <body className={`${satoshi.variable} ${clash.variable} font-satoshi antialiased bg-[#050505] text-neutral-200 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}