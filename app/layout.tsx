import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "thirdweb - The Complete Web3 Development Framework",
  description:
    "Build web3 apps, games, and more with our powerful suite of developer tools. Deploy smart contracts, integrate wallets, and create amazing user experiences.",
  metadataBase: new URL('https://thirdweb.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}