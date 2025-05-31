import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import {
  ClerkProvider
} from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduNexus",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: {
      colorPrimary: "#fe3333"}}}>
      <html lang="en">
        <body className={`${bricolage.variable} antialiased`}>
          <header className="flex justify-between items-center p-4">
            <Navbar />
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
