import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "vietnamese"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TechMock AI - Luyện phỏng vấn kỹ thuật cùng AI",
    template: "%s | TechMock AI",
  },
  description:
    "Nền tảng giả lập phỏng vấn kỹ thuật tích hợp AI. Luyện tập lập trình, mô phỏng phỏng vấn và đánh giá năng lực chuyên sâu.",
  applicationName: "TechMock AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
