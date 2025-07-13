import type { Metadata } from "next";
import { Geist, Geist_Mono,Cinzel  } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700','900'],
  variable: '--font-cinzel',
});

export const metadata: Metadata = {
  title: "Goito",
  description: "T-shirt brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${cinzel.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
