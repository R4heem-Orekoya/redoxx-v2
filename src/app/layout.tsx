import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Geist_Mono, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import Footer from "@/components/sections/footer";

const inter = Inter({
   variable: "--font-inter",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--geist-mono",
   subsets: ["latin"],
});

const jetbrain = JetBrains_Mono({
   subsets: ["latin"],
   variable: "--font-jetbrain",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "localhost:3000";
const SITE_URL = BASE_URL.startsWith("http") ? BASE_URL : `https://${BASE_URL}`;

export const metadata: Metadata = {
   title: {
      default: "Raheem Orekoya — Product Engineer",
      template: "%s — Raheem Orekoya",
   },
   description:
      "I'm a product engineer. I design and build software end to end — from the interface to the infrastructure behind it.",
   icons: {
      icon: "/avatar.svg",
   },
   metadataBase: new URL(SITE_URL),
   alternates: {
      canonical: "/",
   },
   openGraph: {
      title: "Raheem Orekoya — Product Engineer",
      description:
         "I design and build software end to end — from the interface to the infrastructure behind it.",
      url: SITE_URL,
      siteName: "Raheem Orekoya",
      locale: "en_US",
      type: "website",
   },
   twitter: {
      card: "summary",
      title: "Raheem Orekoya — Product Engineer",
      description:
         "I design and build software end to end — from the interface to the infrastructure behind it.",
      creator: "@raheem_d3v",
   },
   robots: {
      index: true,
      follow: true,
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html
         lang="en"
         className={`${inter.variable} ${geistMono.variable} ${jetbrain.variable} h-full antialiased`}
      >
         <body className="min-h-full flex flex-col">
            <Providers>
               <main className="max-w-150 w-screen mx-auto max-sm:px-4 py-24 leading-relaxed">
                  {children}
               </main>
               <Footer />
            </Providers>
         </body>
         <Analytics />
      </html>
   );
}
