import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PriceComparator Pro - Find the Best Deals",
  description: "Advanced price comparison platform with AI-powered search, smart bookmarks, and price tracking. Compare prices across multiple retailers instantly.",
  keywords: "price comparison, deals, shopping, AI search, price tracking, bookmarks",
  authors: [{ name: "PriceComparator Team" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3b82f6",
  openGraph: {
    title: "PriceComparator Pro - Find the Best Deals",
    description: "Advanced price comparison platform with AI-powered search and smart features",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PriceComparator Pro",
    description: "Find the best deals with our advanced price comparison platform",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
          {children}
        </div>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}