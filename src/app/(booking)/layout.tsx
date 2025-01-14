import { Noto_Sans } from "next/font/google";
import "./../globals.css";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

const noto=Noto_Sans({subsets:['latin'],weight:['300','400','600','700']});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={noto.className}>
      <body>{children}</body>
    </html>
  )
}
