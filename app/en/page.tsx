import { Metadata } from "next";
import HomePage from "@/pageTemplates/indexPage";
import { enTranslation } from "@/data/locales";

const IndexEN = () => {
  return <HomePage langPack={enTranslation} />;
};

export default IndexEN;
