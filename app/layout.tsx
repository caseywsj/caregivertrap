import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from 'next/script'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Caregiver's Trap",
  description: "A resource for caregivers. Built by someone who lived it for over two decades — and came out the other side.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
{process.env.NODE_ENV === 'production' && (
  <Script
    src="//gc.zgo.at/count.js"
    data-goatcounter="https://caregivertrap.goatcounter.com/count"
    strategy="afterInteractive"
  />
)}
      </body>
    </html>
  );
}
