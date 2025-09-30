import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comparateur Ben Jeddou - Find the Best Deals",
  description: "Advanced price comparison platform with AI-powered search, smart bookmarks, and price tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}