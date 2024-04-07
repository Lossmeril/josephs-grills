import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";

const cabin = Cabin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joseph's | Grills. Simple.",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={cabin.className + " max-w-[100vw] overflow-x-hidden"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
