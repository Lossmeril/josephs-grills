import { Metadata } from "next";
import HomePage from "@/pages/indexPage";
import { csTranslation } from "@/data/locales";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const IndexCS = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  return <HomePage langPack={csTranslation} />;
};

export default IndexCS;
