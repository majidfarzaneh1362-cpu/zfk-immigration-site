import type { Metadata } from "next";
import "./globals.css";
import { getSiteUrl } from "../lib/seo";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "ZFK Immigration",
  description:
    "Licensed Canadian Immigration Consultancy based in Montreal, Quebec.",
  metadataBase: new URL(siteUrl),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "ZFK Immigration",
    description:
      "Licensed Canadian Immigration Consultancy based in Montreal, Quebec.",
    siteName: "ZFK Immigration",
    images: [
      {
        url: "/images/brand/logo-zfk.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZFK Immigration",
    description:
      "Licensed Canadian Immigration Consultancy based in Montreal, Quebec.",
    images: ["/images/brand/logo-zfk.png"],
  },
  icons: {
    icon: [
      { url: "/images/brand/logo-zfk.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/brand/logo-zfk.png",
    apple: "/images/brand/logo-zfk.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
