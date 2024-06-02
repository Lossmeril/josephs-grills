import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.scss";

const cabin = Cabin({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
