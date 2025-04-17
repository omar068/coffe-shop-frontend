'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from '../components/NavBar';
import { usePathname } from 'next/navigation';


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
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#010316]`}
      >
        {pathname !== '/login' && pathname !== '/register' && (<Navbar/>)}

        {children}
      </body>
    </html>
  );
}
