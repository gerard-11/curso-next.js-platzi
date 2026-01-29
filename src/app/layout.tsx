import { Geist, Geist_Mono } from "next/font/google";
import {Header} from "app/components/shared/Header";
import React from "react";
import {Footer} from "app/components/shared/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
