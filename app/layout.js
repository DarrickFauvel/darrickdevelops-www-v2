import { Inter } from "next/font/google"
import "./globals.css"
import HeaderSection from "@/components/HeaderSection"
import FooterSection from "@/components/FooterSection"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Darrick Develops | Software Engineer",
  description:
    "Darrick Develops is your go-to source for professional software engineering solutions. Explore a portfolio showcasing innovative projects, programming expertise, and a passion for technology. Let’s bring your ideas to life!",
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
