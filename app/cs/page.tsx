import { Metadata } from "next";
import HomePage from "@/pages/indexPage";
import { csTranslation } from "@/data/locales";

const IndexCS = () => {
  return <HomePage langPack={csTranslation} />;
};

export default IndexCS;
