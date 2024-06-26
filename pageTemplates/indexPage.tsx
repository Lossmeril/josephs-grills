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
import ExploreSection from "@/components/exploreSection";

import { PageProps } from "@/data/types";

const unbounded = Unbounded({ subsets: ["latin"] });

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HomePage: React.FC<PageProps> = ({ langPack }) => {
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
        <section className="h-screen w-[full] px-4 mx-auto bg-white relative flex flex-col md:flex-row flex-nowrap hero home xl:w-[1500px] xl:px-0">
          <div className="w-full h-full flex flex-col justify-end clip relative pt-[10vh] pb-[5vh] xl:pt-0 xl:w-2/5 xl:pb-[25vh]">
            <h1
              className={
                "text-[3.5em] md:text-[6em] xl:text-[7em] font-bold mb-8 xl:mb-16 mt-[5vh] xl:mt-0 mr-0 xl:mr-10 leading-[1em] z-10 text-center md:text-left " +
                unbounded.className
              }
            >
              {langPack.indexHeroTitle}
            </h1>
            <div className="w-full flex flex-row flex-nowrap gap-4 xl:gap-10 z-20">
              <div className="w-1/2">
                <Button link={langPack.linkEshopGeneral} inverse={false} blank>
                  {langPack.buttonEshop} &raquo;
                </Button>
              </div>

              <div className="w-1/2">
                <Button link={"#grily"} inverse={true}>
                  {langPack.buttonOurGrills} &raquo;
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full h-full relative xl:w-3/5">
            <Image
              src="/img/products/family.webp"
              alt="Rodina grilů Joseph's"
              fill
              className="object-cover xl:h-[50vh]"
            />
          </div>
        </section>

        <section className="h-[85vh] md:h-[65vh] bg-white section-2 relative flex flex-col justify-center items-center overflow-hidden text-white">
          <div className="flex flex-col text-center items-center z-30 w-[90vw] md:w-[60vw] xl:w-[40vw] text-white">
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
              {langPack.slogan}
            </p>
            <p className="text-lg md:text-xl xl:text-2xl mb-10">
              {langPack.indexSection1Text}
            </p>
            <div className="w-48">
              <Button link={langPack.navbarAboutURL} inverse={false}>
                {langPack.buttonOurStory} &raquo;
              </Button>
            </div>
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
              className="hidden xl:block object-contain opacity-50"
              alt=""
            />
          </div>
          <div ref={product1Ref}>
            <HomeProduct
              name="John"
              tagline={langPack.johnTagline}
              weight="6"
              height="23"
              length="25"
              descHeading={langPack.johnSubheading}
              price={langPack.johnPrice}
              eshopLink={langPack.linkEshopJohn}
              image="john-comparison"
              prop1={langPack.johnUSP1}
              prop1Icon={<HiOutlineArchiveBox size={25} />}
              prop2={langPack.johnUSP2}
              prop2Icon={<HiOutlineWrench size={25} />}
              prop3={langPack.johnUSP3}
              prop3Icon={<PiForkKnife size={25} />}
              leftRef={product1InfoLeftRef}
              rightRef={product1InfoRightRef}
              langPack={langPack}
            >
              {langPack.johnParagraph1}
            </HomeProduct>
          </div>
          <div ref={product2Ref}>
            <HomeProduct
              name="Peter"
              tagline={langPack.peterTagline}
              weight="36"
              height="33,1"
              length="74,3"
              descHeading={langPack.peterSubheading}
              price={langPack.peterPrice}
              eshopLink={langPack.linkEshopPeter}
              image="peter-comparison"
              prop1={langPack.peterUSP1}
              prop1Icon={<RxRulerSquare size={25} />}
              prop2={langPack.peterUSP2}
              prop2Icon={<PiSparkle size={25} />}
              prop3={langPack.peterUSP3}
              prop3Icon={<SlFire size={25} />}
              leftRef={product2InfoLeftRef}
              rightRef={product2InfoRightRef}
              langPack={langPack}
            >
              {langPack.peterParagraph1}
            </HomeProduct>
          </div>
          <div ref={product3Ref}>
            <HomeProduct
              name="Joseph"
              tagline={langPack.josephTagline}
              weight="244"
              height="90"
              length="74"
              descHeading={langPack.josephSubheading}
              price={langPack.josephPrice}
              eshopLink={langPack.linkEshopJoseph}
              image="joseph-comparison"
              prop1={langPack.josephUSP1}
              prop1Icon={<AiOutlineSafetyCertificate size={25} />}
              prop2={langPack.josephUSP2}
              prop2Icon={<PiCheckSquareOffset size={25} />}
              prop3={langPack.josephUSP3}
              prop3Icon={<PiGear size={25} />}
              leftRef={product3InfoLeftRef}
              rightRef={product3InfoRightRef}
              langPack={langPack}
            >
              {langPack.josephParagraph1}
            </HomeProduct>
          </div>
        </section>
        <div className="max-w-[1200px] overflow-x-hidden mx-auto">
          <ExploreSection langPack={langPack} />
        </div>
        <ContactFormSection langPack={langPack} />
      </main>
    </>
  );
};

export default HomePage;
