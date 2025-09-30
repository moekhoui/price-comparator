import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#FF6B35',
              color: '#fff',
              borderRadius: '12px',
              fontWeight: '500',
            },
          }}
        />
      </body>
    </html>
  );
}