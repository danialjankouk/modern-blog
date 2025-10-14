import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog Management App",
  description: "Manage your blog posts, categories, and tags efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ul className="bg-gray-900 border-b-2 border-gray-300 p-4 text-white flex justify-between">
          <li className="cursor-pointer">Login</li>
          <div className="flex space-x-4">
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Home</li>
          </div>
        </ul>
        {children}
      </body>
    </html>
  );
}
