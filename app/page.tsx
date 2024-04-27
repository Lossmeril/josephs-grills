"use client";

import { useRef, useEffect } from "react";

import HomeProduct from "@/components/homeProduct";
import Image from "next/image";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactFormSection from "@/components/contactFormSection";
import { Unbounded } from "next/font/google";
import Button from "@/components/button";

import { HiOutlineArchiveBox, HiOutlineWrench } from "react-icons/hi2";
import {
  PiCheckSquareOffset,
  PiForkKnife,
  PiGear,
  PiSparkle,
} from "react-icons/pi";
import { RxRulerSquare } from "react-icons/rx";
import { SlFire } from "react-icons/sl";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const unbounded = Unbounded({ subsets: ["latin"] });

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HomePage = () => {
  const manRef = useRef(null);
  const productSecRef = useRef(null);

  const product1Ref = useRef(null);
  const product1InfoLeftRef = useRef(null);
  const product1InfoRightRef = useRef(null);

  const product2Ref = useRef(null);
  const product2InfoLeftRef = useRef(null);
  const product2InfoRightRef = useRef(null);

  const product3Ref = useRef(null);
  const product3InfoLeftRef = useRef(null);
  const product3InfoRightRef = useRef(null);

  useEffect(() => {
    const man = manRef.current;
    const productSection = productSecRef.current;

    const product1 = product1Ref.current;
    const left1 = product1InfoLeftRef.current;
    const right1 = product1InfoRightRef.current;

    const product2 = product2Ref.current;
    const left2 = product2InfoLeftRef.current;
    const right2 = product2InfoRightRef.current;

    const product3 = product3Ref.current;
    const left3 = product3InfoLeftRef.current;
    const right3 = product3InfoRightRef.current;

    gsap.fromTo(
      man,
      { y: 0 },
      {
        ease: "none",
        y: "200vh",
        duration: 3,
        scrollTrigger: {
          trigger: productSection,
          start: "16.667% center",
          end: "83.333% center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      left1,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: product1,
          start: "-10% center",
          end: "25% center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      left1,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: 50,
        duration: 2,
        scrollTrigger: {
          trigger: product1,
          start: "55% center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      right1,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: product1,
          start: "top center",
          end: "25% center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      right1,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: -50,
        duration: 2,
        scrollTrigger: {
          trigger: product1,
          start: "65% center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    /* SECOND PRODUCT SECTION */
    gsap.fromTo(
      left2,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: product2,
          start: "-10% center",
          end: "25% center",
          scrub: true,
          markers: true,
        },
      }
    );

    gsap.fromTo(
      left2,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: 50,
        duration: 2,
        scrollTrigger: {
          trigger: product2,
          start: "55% center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      right2,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: product2,
          start: "top center",
          end: "25% center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      right2,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: -50,
        duration: 2,
        scrollTrigger: {
          trigger: product2,
          start: "65% center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    /* THIRD PRODUCT SECTION */
    gsap.fromTo(
      left3,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: product3,
          start: "-10% center",
          end: "25% center",
          scrub: true,
          markers: true,
        },
      }
    );

    gsap.fromTo(
      left3,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: 50,
        duration: 2,
        scrollTrigger: {
          trigger: product3,
          start: "55% center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      right3,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: product3,
          start: "top center",
          end: "25% center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      right3,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: -50,
        duration: 2,
        scrollTrigger: {
          trigger: product3,
          start: "65% center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <main className="max-w-screen overflow-x-hidden">
        <section className="h-screen w-full xl:w-[1500px] mx-auto bg-white relative flex flex-col md:flex-row flex-nowrap hero">
          <div className="w-full xl:w-2/5 h-full flex flex-col justify-end clip relative pb-[15vh] xl:pb-[25vh]">
            <h1
              className={
                "text-[4em] md:text-[6em] xl:text-[7em] font-bold mb-16 mt-[5vh] xl:mt-0 mr-0 xl:mr-10 leading-[1em] z-10 text-center md:text-left " +
                unbounded.className
              }
            >
              Rodina grilů Joseph&apos;s
            </h1>
            <div className="flex flex-row flex-nowrap gap-10 w-full">
              <div className="w-1/2">
                <Button link={"#grily"} inverse={false}>
                  Naše grily &raquo;
                </Button>
              </div>
              <div className="w-1/2">
                <Button link={"#grily"} inverse={true}>
                  Do e-shopu &raquo;
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-3/5 h-full relative">
            <Image
              src="/img/products/family.png"
              alt="Rodina grilů Joseph's"
              fill
              className="object-cover h-[50vh]"
            />
          </div>
        </section>

        <section className="h-[85vh] md:h-[65vh] bg-white section-2 relative flex flex-col justify-center items-center overflow-hidden text-white">
          <div className="text-center z-30 w-[90vw] md:w-[60vw] xl:w-[40vw] text-white">
            <div className="relative w-10 h-10 mx-auto mb-6">
              <Image
                src="/img/favicon.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl md:text-2xl xl:text-3xl mb-6">
              Joseph&apos;s
            </h2>
            <p
              className={
                "text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.25em] mb-6 " +
                unbounded.className
              }
            >
              Grily. Jednoduše.
            </p>
            <p className="text-lg md:text-xl xl:text-2xl">
              Joseph&apos;s &mdash; grily, které staví na tradici, kvalitě a
              jednoduchosti. Objevte řadu našich grilů a připojte se k rodině
              spokojených nadšenců do grilování.
            </p>
          </div>

          <video
            autoPlay
            loop
            muted
            id="heroVideo"
            className="absolute h-screen w-screen object-cover z-10"
          >
            <source src="/video/josephs.webm" type="video/webm" />
          </video>
          <div className="h-full w-full bg-black absolute top-0 left-0 z-20 opacity-50"></div>
        </section>

        <section className="relative w-full" ref={productSecRef} id="grily">
          <div
            ref={manRef}
            className="man absolute top-[16.667%] left-1/2 -translate-y-1/2 z-10 h-[550px] w-full"
          >
            <img
              src="/img/average-man.png"
              className="hidden xl:block object-contain"
              alt=""
            />
          </div>
          <div ref={product1Ref}>
            <HomeProduct
              name="John"
              tagline="Gril pro dobrodruhy"
              weight="6"
              height="23"
              length="25"
              descHeading="O Johnovi"
              price="1 999,-"
              pageLink="./grily/john"
              eshopLink=""
              image="john-comparison.webp"
              prop1="Kompaktní a přenosný"
              prop1Icon={<HiOutlineArchiveBox size={25} />}
              prop2="Snadná montáž i demontáž"
              prop2Icon={<HiOutlineWrench size={25} />}
              prop3="Zdravé stravování na cestách"
              prop3Icon={<PiForkKnife size={25} />}
              leftRef={product1InfoLeftRef}
              rightRef={product1InfoRightRef}
            >
              Představujeme vám Johna, malý, ale mimořádně šikovný gril, který
              se stane vaším nezbytným společníkem na cestách. Díky svému
              jedinečnému designu &mdash; tvořenému šesti čtvercovými ocelovými
              pláty, se John skládá a rozkládá s dětskou snadností.
            </HomeProduct>
          </div>
          <div ref={product2Ref}>
            <HomeProduct
              name="Peter"
              tagline="To jediné ohniště, které potřebujete."
              weight="36"
              height="33,1"
              length="74,3"
              descHeading="O Peterovi"
              price="8 200,-"
              pageLink="./grily/peter"
              eshopLink=""
              image="peter-comparison.webp"
              prop1="Unikátní design"
              prop1Icon={<RxRulerSquare size={25} />}
              prop2="Estetický a praktický"
              prop2Icon={<PiSparkle size={25} />}
              prop3="Snadné přikládání"
              prop3Icon={<SlFire size={25} />}
              leftRef={product2InfoLeftRef}
              rightRef={product2InfoRightRef}
            >
              Peter transformuje každý venkovní prostor na místo plné tepla a
              pohody. Díky svému inovativnímu designu, připomínajícímu kovovou
              ošatku, se stane centrem pozornosti a místem setkávání pro rodinu
              a přátele. Systém pro shromažďování popela zajišťuje snadnou
              údržbu, zatímco jeho robustní konstrukce slibuje dlouholetou
              spolehlivost.
            </HomeProduct>
          </div>
          <div ref={product3Ref}>
            <HomeProduct
              name="Joseph"
              tagline="Mistr grilování"
              weight="244"
              height="90"
              length="74"
              descHeading="O Josephovi"
              price="48 400,-"
              pageLink="./grily/joseph"
              eshopLink=""
              image="joseph-comparison.webp"
              prop1="Kvalita a výkon"
              prop1Icon={<AiOutlineSafetyCertificate size={25} />}
              prop2="Robustní konstrukce"
              prop2Icon={<PiCheckSquareOffset size={25} />}
              prop3="Možnost rozšíření"
              prop3Icon={<PiGear size={25} />}
              leftRef={product3InfoLeftRef}
              rightRef={product3InfoRightRef}
            >
              Joseph je výsledkem vrcholové řemeslné zručnosti a navržen je pro
              ty, kteří od svého grilu očekávají nekompromisní kvalitu a výkon.
              Jeho geometrický design nejen osloví oko, ale také slibuje
              jedinečný zážitek z grilování. Díky certifikované potravinářské
              nerezové grilovací desce a možnosti přidání dalšího roštu nabízí
              Joseph nevídanou flexibilitu a odolnost.
            </HomeProduct>
          </div>
        </section>
        <ContactFormSection />
      </main>
    </>
  );
};

export default HomePage;
