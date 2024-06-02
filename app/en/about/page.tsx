import { Metadata } from "next";
import AboutPage from "@/pages/aboutPage";
import { enTranslation } from "@/data/locales";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const metadata: Metadata = {
  title: "About us | Joseph's",
  description:
    "Připojte se k rodině Joseph's Grills a objevte příběh tradice, řemeslného umění a rodinné vášně, která se odráží v každém našem grilu. Naše grily Joseph, Peter a John jsou navrženy s důrazem na kvalitu, jednoduchost a dlouhověkost.",
  keywords:
    "Joseph's Grills, rodinná firma, příběh značky, prémiové grily, tradice grilování, kvalitní grily, venkovní grilování, grilovací příslušenství",
  authors: [{ name: "Michal Špitálský", url: "https://www.lossmeril.art" }],
};

const AboutCS = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  return <AboutPage langPack={enTranslation} />;
};

export default AboutCS;
