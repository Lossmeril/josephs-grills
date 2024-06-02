import { Metadata } from "next";
import HomePage from "@/pages/indexPage";
import { enTranslation } from "@/data/locales";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const IndexEN = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  return <HomePage langPack={enTranslation} />;
};

export default IndexEN;
