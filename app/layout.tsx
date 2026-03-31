// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nishwan | Open Profile",
  description: "Computer Science undergraduate specializing in AI & ML.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen selection:bg-neutral-800 selection:text-white dark:selection:bg-neutral-200 dark:selection:text-black`}>
        {children}
      </body>
    </html>
  );
}