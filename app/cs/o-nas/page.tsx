import { Metadata } from "next";
import AboutPage from "@/pageTemplates/aboutPage";
import { csTranslation } from "@/data/locales";

export const metadata: Metadata = {
  title: "O nás | Joseph's",
  description:
    "Připojte se k rodině Joseph's Grills a objevte příběh tradice, řemeslného umění a rodinné vášně, která se odráží v každém našem grilu. Naše grily Joseph, Peter a John jsou navrženy s důrazem na kvalitu, jednoduchost a dlouhověkost.",
  keywords:
    "Joseph's Grills, rodinná firma, příběh značky, prémiové grily, tradice grilování, kvalitní grily, venkovní grilování, grilovací příslušenství",
  authors: [{ name: "Michal Špitálský", url: "https://www.lossmeril.art" }],
};

const AboutCS = () => {
  return <AboutPage langPack={csTranslation} />;
};

export default AboutCS;
