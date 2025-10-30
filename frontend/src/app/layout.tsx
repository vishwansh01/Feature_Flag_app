// "use client";
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const font = DM_Sans({ subsets: ["latin"] });

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // choose weights you need
  variable: "--font-inter", // optional for Tailwind
});

export const metadata: Metadata = {
  title: "Feature Flag App",
  description: "Manage your website's prodution features",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const navigation = useRouter();
  return (
    <html lang="en">
      <body
        className={`${font.className} ${inter.variable} antialiased min-w-screen bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-200 min-h-screen`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
