import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ZB Engineering",
  description: "Website for ZB Engineering",
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon.ico",
  //   apple: "/apple-touch-icon.png",
  // },
  // openGraph: {
  //   title: "ZB Engineering",
  //   description: "Website for ZB Engineering",
  //   url: "https://zbengineering.com",
  //   siteName: "ZB Engineering",
  //   images: [
  //     {
  //       url: "/og-image.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "ZB Engineering",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "ZB Engineering",
  //   description: "Website for ZB Engineering",
  //   images: ["/og-image.png"],
  // },
  // robots: {
  //   index: true,
  //   follow: true,
  // },
  // manifest: "/site.webmanifest",
  // appleWebApp: {
  //   capable: true,
  //   statusBarStyle: "default",
  // },
  // themeColor: "#000000",
  // appleWebApp: {
  //   title: "ZB Engineering",
  //   statusBarStyle: "default",
  //   capable: true,
  // },
  // viewport: {
  //   width: "device-width",
  //   initialScale: 1,
  //   maximumScale: 1,
  //   userScalable: false,
  // },
  // verification: {
  //   google: "google-site-verification=your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  //   other: "your-other-verification-code",
  // },
  // alternates: {
  //   canonical: "https://zbengineering.com",
  //   languages: {
  //     "en-US": "https://zbengineering.com",
  //     "es-ES": "https://zbengineering.com/es",
  //   },
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
