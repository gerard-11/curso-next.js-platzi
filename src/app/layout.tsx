import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "app/components/shared/Header";
import React from "react";
import { Footer } from "app/components/shared/Footer";
import { Inter } from 'next/font/google'

import { ScrollToTop } from "app/ScrollToTop";
import "app/sass/globals.sass";

const inter = Inter({
  subsets: ["cyrillic"],
  weight: ['100', '300', '500', '700'],

})


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const dynamic = 'force-dynamic'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.className} `} style={{ backgroundColor: "black", color: 'white' }}>
        <Header />
        <ScrollToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
