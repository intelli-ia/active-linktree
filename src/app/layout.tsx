import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

/* Sora Bold — títulos */
const soraHeading = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
  variable: "--font-heading",
});

/* Sora Regular — textos corridos */
const soraBody = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Active Pilates",
  description: "Links úteis do Active Pilates.",
  icons: {
    icon: [{ url: "/active-pilates.png", type: "image/png" }],
    apple: [{ url: "/active-pilates.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${soraHeading.variable} ${soraBody.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
