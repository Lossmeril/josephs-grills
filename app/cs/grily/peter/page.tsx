import { Metadata } from "next";
import PeterProductPage from "@/pageTemplates/products/peterPage";
import { csTranslation } from "@/data/locales";

export const metadata: Metadata = {
  title: "Peter: To jediné ohniště, které potřebujete. | Joseph's",
  description:
    "Objevte gril John od Joseph's Grills – váš ideální společník na cesty. Kompaktní, snadno sestavitelný a vyrobený z nerezové potravinářské oceli, John nabízí bezpečné a stylové grilování kdekoliv.",
  keywords:
    "přenosný gril John, grilování na cestách, skládací gril, kompaktní gril, nerezový gril, Joseph's Grills, venkovní grilování, kvalitní grily",
  authors: [{ name: "Michal Špitálský", url: "https://www.lossmeril.art" }],
};

const PeterCS = () => {
  return <PeterProductPage langPack={csTranslation} />;
};

export default PeterCS;
