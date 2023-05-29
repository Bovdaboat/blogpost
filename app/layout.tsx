import React from "react";
import './globals.css'
import Navbar from "@/app/(shared)/Navbar";
import { Open_Sans} from "next/font/google";
import Footer from "@/app/(shared)/Footer";

const openSans = Open_Sans({
    subsets: ['latin'],
})

export const metadata = {
  title: 'Blog Ai post',
  description: 'Blog build in Next js that uses AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={openSans.className} lang="en">
      <body>
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  )
}
