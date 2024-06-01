import { Metadata } from "next";
import GrillsPage from "@/pages/grillsPage";
import { enTranslation } from "@/data/locales";

export const metadata: Metadata = {
  title: "Our Grills | Joseph's",
  description:
    "Prozkoumejte naši kolekci prémiových grilů na Joseph's Grills. Od kompaktního grilu John, přes stylový gril Peter, až po exkluzivní model Joseph, najdete u nás gril pro každý venkovní prostor.",
  keywords:
    "prémiové grily, gril Joseph, gril Peter, gril John, venkovní grilování, grilovací příslušenství, Joseph's Grills, grily na prodej",
};

const GrillsEN = () => {
  return <GrillsPage langPack={enTranslation} />;
};

export default GrillsEN;
