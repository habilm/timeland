import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const font = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timeland Watches",
  description:
    "Experice the ultimate watch shopping experience at our Ajamn, UAE Store. We Offer all brands, expert advice and more",
  icons: {
    icon: "/images/icon.jpg",
  },
  openGraph: {
    images: "/images/og-image.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
