import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const garamond = Cormorant_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});

export const metadata = {
  title: "American International School of Alanya",
  description:
    "A warm, safe, and inspiring American education designed for young learners in the heart of Alanya",
};

export default async function RootLayout({ children }) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang="en">
        <body
          className={`${manrope.variable} ${garamond.variable} antialiased`}
        >
          {children}
          <Footer />
        </body>
        <GoogleAnalytics gaId="G-ZBRDZJ1LPT" />
      </html>
    </NextIntlClientProvider>
  );
}
