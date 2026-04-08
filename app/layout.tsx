import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZFK Immigration",
  description:
    "Licensed Canadian Immigration Consultancy based in Montreal, Quebec.",
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
