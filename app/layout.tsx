import './globals.css'

import { Open_Sans} from "next/dist/compiled/@next/font/dist/google";

const openSans = Open_Sans({
  subsets: ["latin"],
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
      <body>{children}</body>
    </html>
  )
}
