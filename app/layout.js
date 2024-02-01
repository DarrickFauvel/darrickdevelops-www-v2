import { Inter } from "next/font/google"
import "./globals.css"
import HeaderSection from "@/components/HeaderSection"
import FooterSection from "@/components/FooterSection"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Darrick Develops | Software Developer",
  description: "Software development is my jam.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderSection />
        {children}
        <FooterSection />
      </body>
    </html>
  )
}
