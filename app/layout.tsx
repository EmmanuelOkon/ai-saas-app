import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-karla",
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: "#624CF5" } }}>
      <html lang="en">
        <body className={karla.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
