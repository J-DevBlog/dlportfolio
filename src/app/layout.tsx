import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "DLactive | 사람과 기회를 연결하여, 더 나은 내일을 만듭니다.",
  description: "DLactive | 사람과 기회를 연결하여, 더 나은 내일을 만듭니다.",
  openGraph: {
    title: "DLactive | 사람과 기회를 연결하여, 더 나은 내일을 만듭니다.",
    description: "DLactive | 사람과 기회를 연결하여, 더 나은 내일을 만듭니다.",
    url: "https://www.dlactive.com",
    siteName: "DLactive",
    type: "website",
    // image: "https://www.dlactive.com/og-image.jpg", // 필요시 이미지 경로 추가
  },
  twitter: {
    card: "summary_large_image",
    title: "DLactive | 사람과 기회를 연결하여, 더 나은 내일을 만듭니다.",
    description: "DLactive | 사람과 기회를 연결하여, 더 나은 내일을 만듭니다.",
    // images: ["https://사이트주소.com/og-image.jpg"], // 필요시 이미지 경로 추가
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansKR.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
