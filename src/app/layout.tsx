import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextUIProvider } from "@nextui-org/system";

import "./globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark antialiased min-h-screen`}
      >
      <NextUIProvider>
          <div className="flex flex-col">
            <Header />
              <div className="flex-1 h-[calc(100vh-80px)]">
                {children}
              </div>
            <Footer />
          </div>
      </NextUIProvider>
      </body>
    </html>
  );
}
