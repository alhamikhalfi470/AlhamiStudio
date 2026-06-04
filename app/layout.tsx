import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Digital Product Builder | Alhami Studio",
  description:
    "I help people build simple digital products with AI. MVP builds, advanced MVP products, and starter products by Alhami Studio.",
  keywords: [
    "MVP builder",
    "non-technical founder",
    "coded app prototype",
    "Flutter Firebase MVP",
    "MVP design sprint",
    "startup prototype",
    "AI-assisted development",
  ],
  openGraph: {
    title: "AI Digital Product Builder | Alhami Studio",
    description:
      "I help people build simple digital products with AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
