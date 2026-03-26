import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZFK Immigration",
  description:
    "Licensed Canadian Immigration Consultancy based in Montreal, Quebec.",
  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png", sizes: "64x64" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
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