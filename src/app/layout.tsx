import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import {Provider} from 'jotai'


export const metadata: Metadata = {
  title: "CIC Portal",
  description: "Register your CIC account & manage projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
         
          {children}
          
          
        <Toaster/>
      </body>
    </html>
  );
}
