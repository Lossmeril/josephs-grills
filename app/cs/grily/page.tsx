import { Metadata } from "next";
import GrillsPage from "@/pages/grillsPage";
import { csTranslation } from "@/data/locales";

export const metadata: Metadata = {
  title: "Naše grilly | Joseph's",
  description:
    "Prozkoumejte naši kolekci prémiových grilů na Joseph's Grills. Od kompaktního grilu John, přes stylový gril Peter, až po exkluzivní model Joseph, najdete u nás gril pro každý venkovní prostor.",
  keywords:
    "prémiové grily, gril Joseph, gril Peter, gril John, venkovní grilování, grilovací příslušenství, Joseph's Grills, grily na prodej",
};

const GrillsCS = () => {
  return <GrillsPage langPack={csTranslation} />;
};

export default GrillsCS;
