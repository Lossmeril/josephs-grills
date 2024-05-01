"use client";

import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ContactFormSection from "@/components/contactFormSection";
import Image from "next/image";
import { Unbounded } from "next/font/google";
import ExploreSection from "@/components/exploreSection";

const unbounded = Unbounded({ subsets: ["latin"] });

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutPage = () => {
  const underline1Ref = useRef(null);
  const section1Ref = useRef(null);
  const text1Ref = useRef(null);
  const img1Ref = useRef(null);

  const underline2Ref = useRef(null);
  const section2Ref = useRef(null);
  const text2Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    const underline1 = underline1Ref.current;
    const section1 = section1Ref.current;
    const text1 = text1Ref.current;
    const img1 = img1Ref.current;

    const underline2 = underline2Ref.current;
    const section2 = section2Ref.current;
    const text2 = text2Ref.current;
    const img2 = img2Ref.current;

    gsap.fromTo(
      underline1,
      { width: 0 },
      {
        ease: "sine.inOut",
        width: "100%",
        duration: 1.5,
        scrollTrigger: {
          trigger: section1,
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    );

    // gsap.fromTo(
    //   text1,
    //   { opacity: 0, y: "50px" },
    //   {
    //     ease: "sine.inOut",
    //     opacity: 1,
    //     y: 0,
    //     duration: 1.5,
    //     scrollTrigger: {
    //       trigger: section1,
    //       start: "top center",
    //       end: "25% center",
    //       scrub: true,
    //     },
    //   }
    // );

    // gsap.fromTo(
    //   img1,
    //   { opacity: 0, y: "-50px" },
    //   {
    //     ease: "sine.inOut",
    //     opacity: 1,
    //     y: 0,
    //     duration: 1.5,
    //     scrollTrigger: {
    //       trigger: section1,
    //       start: "top center",
    //       end: "25% center",
    //       scrub: true,
    //     },
    //   }
    // );

    gsap.fromTo(
      underline2,
      { width: 0 },
      {
        ease: "sine.inOut",
        width: "100%",
        duration: 1.5,
        scrollTrigger: {
          trigger: section2,
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      text2,
      { opacity: 0, y: "50px" },
      {
        ease: "sine.inOut",
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: section2,
          start: "top center",
          end: "25% center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      img2,
      { opacity: 0, y: "-50px" },
      {
        ease: "sine.inOut",
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: section2,
          start: "top center",
          end: "25% center",
          scrub: true,
        },
      }
    );
  });

  return (
    <>
      <main className="max-w-[1200px] overflow-x-hidden mx-auto">
        <section className="min-h-[500px]  p-4 lg:p-0 bg-white overflow-x-hidden flex flex-col flex-nowrap justify-center items-center text-center pt-28 lg:pt-20 hero">
          <h1
            className={
              "text-6xl font-bold leading-[1.25em] mb-8 -mt-4 " +
              unbounded.className
            }
          >
            Vítejte v rodině Joseph&apos;s!
          </h1>
          <p className="text-xl mb-6">
            Grilování je naše vášeň, protože u grilu nejlépe poznáte jaký člověk
            doopravdy je. Poznejte jací jsme v naší rodině a přidejte se k nám!
          </p>
        </section>
        <section
          ref={section1Ref}
          className="min-h-[800px] p-4 lg:p-0 py-5 bg-white overflow-x-hidden flex flex-col lg:flex-row flex-nowrap justify-center items-center gap-10 xl:gap-40 text-center"
        >
          <div
            ref={text1Ref}
            className="w-full flex flex-col text-mutedtext-dark pt-10"
          >
            <div className="relative">
              <h2
                className={
                  "text-4xl font-bold leading-[1.25em] mb-8 -mt-4 z-20 relative " +
                  unbounded.className
                }
              >
                Od rodiny...
              </h2>
              <div
                className="bg-orange opacity-25 h-10 absolute top-[10%] z-0"
                ref={underline1Ref}
              ></div>
            </div>

            <p className="text-md mb-6">
              V srdci každého kusu kovu, který prošel rukama naší rodinné firmy
              je ukryt příběh. Příběh o tradici, řemeslu a rodinné vášni, která
              překračuje generace. Značka Joseph&apos;s Grills není výjimkou. Je
              to odkaz na dědečka Josefa, zakladatele, a také Petra, jeho
              pokračovatele, jehož vášeň pro grilování byla zakována do každého
              detailu našich grilů.
            </p>
            <p className="text-md mb-6">
              Léta strávená obráběním kovu a snaha pochopit jeho tajemství vedla
              Petra k nápadu &mdash; vytvořit gril, který by nejen splňoval
              všechna očekávání v oblasti kvality a funkčnosti, ale také byl
              jednoduchý na obsluhu a vydržel po dlouhé roky.
            </p>
          </div>
          <div ref={img1Ref} className="w-full h-[500px] relative">
            <Image
              src="/img/bg-img-1.webp"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </section>
        <section
          ref={section2Ref}
          className="min-h-[800px] p-4 lg:p-0 py-5 bg-white overflow-x-hidden flex flex-col-reverse lg:flex-row flex-nowrap justify-center items-center gap-10 xl:gap-40 text-center border-t border-mutedtext-light"
        >
          <div ref={img2Ref} className="w-full h-[500px] relative">
            <Image
              src="/img/bg-img-1.webp"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div ref={text2Ref} className="w-full flex flex-col pt-10">
            <div className="relative">
              <h2
                className={
                  "text-4xl font-bold leading-[1.25em] mb-8 -mt-4 z-20 relative " +
                  unbounded.className
                }
              >
                ...ke grilům
              </h2>
              <div
                ref={underline2Ref}
                className="bg-orange opacity-25 h-10 absolute top-[10%] z-0"
              ></div>
            </div>
            <p className="text-md mb-6">
              S touto vizí Joseph&apos;s přináší na trh tři unikátní typy grilů
              &mdash; každý pojmenovaný na počest jednoho z členů rodiny:
              Joseph, Peter a John. Každý z nich reprezentuje různé aspekty
              grilovacích předností a stylů, aby vyhověl každému nadšenci
              venkovní přípravy jídla.
            </p>
            <p className="text-md mb-6">
              Každý gril je vytvořen s důrazem na jednoduchost, jak v designu,
              tak v užívání. Používáme pouze nejkvalitnější materiály, což našim
              grilům zaručuje dlouhověkost a odolnost. Věříme, že grilování je
              především o rodině, přátelích a společně stráveném čase. A v tom
              není nic komplikovaného.
            </p>
            <p className="text-md mb-6">
              Proto jsme se rozhodli, že naše grily budou jednoduché, výkonné,
              schopné přizpůsobit se jakémukoli stylu grilování.
            </p>
          </div>
        </section>

        <ExploreSection />
      </main>
      <ContactFormSection />
    </>
  );
};

export default AboutPage;
