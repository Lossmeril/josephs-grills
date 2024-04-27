"use client";

import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ContactFormSection from "@/components/contactFormSection";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutPage = () => {
  const underlineRef = useRef(null);

  useEffect(() => {
    const underline = underlineRef.current;

    gsap.fromTo(
      underline,
      { width: 0 },
      {
        ease: "sine.inOut",
        width: "100%",
        duration: 1.5,
        scrollTrigger: {
          trigger: underline,
          start: "center center",
          end: "center center",
          scrub: true,
        },
      }
    );
  });

  return (
    <>
      <main className="max-w-[1200px] overflow-x-hidden mx-auto">
        <section className="min-h-[800px] bg-white overflow-x-hidden flex flex-col flex-nowrap justify-center items-center text-center pt-20 hero">
          <h1 className="text-6xl font-bold leading-[1.25em] mb-8 -mt-4">
            O nás
          </h1>
          <p className="text-3xl font-bold mb-6 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
        </section>
        <section className="min-h-[800px] py-5 bg-white overflow-x-hidden flex flex-row flex-nowrap justify-center items-center gap-40 text-center border-t border-mutedtext-light">
          <div className="w-full flex flex-col text-mutedtext-dark">
            <div className="relative">
              <h2 className="text-4xl font-bold leading-[1.25em] mb-8 -mt-4 z-20 relative">
                Náš příběh
              </h2>
              <div
                className="bg-orange opacity-25 h-10 absolute top-[10%] z-0"
                ref={underlineRef}
              ></div>
            </div>

            <p className="text-md mb-6">
              V srdci každého kusu kovu, který prošel rukama naší rodinné firmy
              je ukryt příběh. Příběh o tradici, řemeslu a rodinné vášni, která
              překračuje generace. Značka Joseph&apos;s Grills není výjimkou. Je
              to odkaz na dědečka Josefa, zakladatele, a také Petra jehož vášeň
              pro grilování byla vpletena do každého detailu našich grilů.
            </p>
            <p className="text-md mb-6">
              Léta strávená obráběním kovu a snaha pochopit jeho tajemství vedla
              Petra k nápadu &mdash; vytvořit gril, který by nejen splňoval
              všechna očekávání v oblasti kvality a funkčnosti, ale také byl
              jednoduchý na obsluhu a vydržel po dlouhé roky.
            </p>
            <p className="text-md mb-6">
              S touto vizí Joseph&apos;s přináší na trh tři unikátní typy grilů
              &mdash; každý pojmenovaný na počest jednoho z členů rodiny:
              Joseph, Peter a John. Každý z nich reprezentuje různé aspekty
              grilovacích předností a stylů, aby vyhověl každému nadšenci
              venkovní přípravy jídla.
            </p>
          </div>
          <div className="w-full h-[500px] relative">
            <Image
              src="/img/products/placeholder1.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </section>
        <section className="min-h-[800px] py-5 bg-white overflow-x-hidden flex flex-row flex-nowrap justify-center items-center gap-40 text-center border-t border-mutedtext-light">
          <div className="w-full h-[500px] relative">
            <Image
              src="/img/products/placeholder1.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full flex flex-col">
            <div className="relative">
              <h2 className="text-4xl font-bold leading-[1.25em] mb-8 -mt-4 z-20 relative">
                Náš příběh
              </h2>
              <div
                className="bg-orange opacity-25 h-10 absolute top-[10%] z-0"
                ref={underlineRef}
              ></div>
            </div>
            <p className="text-xl mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>
          </div>
        </section>
      </main>
      <ContactFormSection />
    </>
  );
};

export default AboutPage;
