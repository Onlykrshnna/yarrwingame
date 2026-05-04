import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yaar Win Game App | Play Online Skill Games & Win Cash",
  description: "Download the Yaar Win app to play trusted online skill games in India. Enjoy 100% secure gameplay, RNG certification, and instant UPI withdrawals.",
  keywords: "online skill gaming app india, play real money games online securely, skill games with instant upi withdrawal, trusted gaming platform rng certified",
  metadataBase: new URL("https://www.yarrwingame.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
    },
  },
  verification: {
    google: [
      "0GNNJubmz7TnuwW5kpc6ZN4x5G5-O5IFLfZcBaNHa-M",
      "8nk9oQPeBKdQ-zDfI6HQb7daEUSOf6lwhc3UrsrRYBs"
    ],
  },
  openGraph: {
    type: "website",
    url: "https://www.yarrwingame.com/",
    title: "Yaar Win Game — Official Gaming Portal",
    description: "India's trusted skill gaming platform. Register free and start playing.",
    images: "/og-image.jpg",
    siteName: "Yaar Win",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaar Win Game — Official Gaming Portal",
    description: "India's trusted skill gaming platform. Register free and start playing.",
    images: "/og-image.jpg",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6Q57ZSB8H0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6Q57ZSB8H0');
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
