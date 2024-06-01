import { Metadata } from "next";
import HomePage from "@/pages/indexPage";
import { enTranslation } from "@/data/locales";

const IndexCS = () => {
  return <HomePage langPack={enTranslation} />;
};

export default IndexCS;
