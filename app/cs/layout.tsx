import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";
import { csTranslation } from "@/data/locales";

const cabin = Cabin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joseph's | Grills. Simple.",
  description:
    "Joseph's — grily, které staví na tradici, kvalitě a jednoduchosti. Objevte řadu našich grilů a připojte se k rodině spokojených nadšenců do grilování.",
  keywords:
    "gril, grilování, grily, české grily, český gril, grill, český grill, grilly, české grilly, corten, joseph, joseph grill, joseph gril, joseph grilly, joseph grily, josephs, josephs grill, josephs gril, josephs grilly, josephs grily, joseph's, joseph's grill, joseph's gril, joseph's grilly,  joseph's grily, corten, corten grill, corten gril, corten grilly, corten grily, Joseph's Grills, Josephs Grills, Grills Joseph's, Grills Josephs, Joseph'sGrills, JosephsGrills, Joseph Grills, Joseph Grill, JosephGrill, Grill Joseph, GrillJoseph, Grill Joseph's, GrillJoseph's, Grills Joseph, GrillsJoseph, Grills Joseph's, GrillsJoseph's",
  authors: [{ name: "Michal Špitálský", url: "https://www.lossmeril.art" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="cs"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <Script src="/scripts/gTagManager.js" />
      </head>
      <body className={cabin.className + " max-w-[100vw] overflow-x-hidden"}>
        <Header langPack={csTranslation} />
        {children}
        <Footer langPack={csTranslation} />
      </body>
    </html>
  );
}
