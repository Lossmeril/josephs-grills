import { Metadata } from "next";
import ContactPage from "@/pages/contactPage";
import { csTranslation } from "@/data/locales";

export const metadata: Metadata = {
  title: "Ozvěte se nám! | Joseph's",
  description:
    "Obraťte se na Joseph's Grills s jakýmkoliv dotazem ohledně našich grilů nebo služeb. Zavolejte nám nebo nám napište!",
  keywords:
    "kontakt Joseph's Grills, zákaznická podpora grilů, telefon na Joseph's Grills, email Joseph's Grills, adresa Joseph's Grills",
  authors: [{ name: "Michal Špitálský", url: "https://www.lossmeril.art" }],
};

const ContactCS = () => {
  return <ContactPage langPack={csTranslation} />;
};

export default ContactCS;
