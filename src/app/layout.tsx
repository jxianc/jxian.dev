import type { Metadata } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jingxian Chai | Software Engineer",
  description:
    "Jingxian Chai is a software engineer and a recent Computer Science graduate specializing in software engineering and machine learning. Passionate about leveraging technology to solve complex problems. I'm seeking software engineering opportunities to contribute my skills, continue learning, and grow.",
  openGraph: {
    type: "website",
    url: "https://jxian.dev",
    title: "Jingxian Chai | Software Engineer",
    description:
      "Jingxian Chai is a software engineer and a recent Computer Science graduate specializing in software engineering and machine learning. Passionate about leveraging technology to solve complex problems. I'm seeking software engineering opportunities to contribute my skills, continue learning, and grow. ",
    siteName: "Jingxian Chai",
    images: [
      {
        url: "https://jxian.dev/profile.jpeg",
        width: 400,
        height: 400,
        alt: "Jingxian Chai",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        {children}
        <SpeedInsights />
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
