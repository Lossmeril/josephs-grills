"use client";

import { useRef, useEffect } from "react";

import HomeProduct from "@/components/homeProduct";
import Image from "next/image";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactFormSection from "@/components/contactFormSection";
import { Unbounded } from "next/font/google";

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
        <section className="h-screen w-[1500px] mx-auto bg-white relative flex flex-row flex-nowrap hero">
          <div className="w-2/5 h-full flex flex-col justify-end clip relative">
            <h1
              className={
                "text-[7em] font-bold mb-[25vh] mr-10 leading-[1em] z-10 " +
                unbounded.className
              }
            >
              Rodina grilů Joseph&apos;s
            </h1>
          </div>
          <div className="w-3/5 h-full relative">
            <Image
              src="/img/products/family.png"
              alt="Rodina grilů Joseph's"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section className="h-[65vh] bg-white section-2 relative flex flex-col justify-center items-center overflow-hidden text-white">
          <div
            id="square"
            className="w-40 h-40 absolute top-[20%] left-[50%] translate-x-[-50%] scale-100 rotate-45 z-0"
          ></div>
          <div className="text-center z-30 w-[40vw] text-white">
            <div className="relative w-10 h-10 mx-auto mb-6">
              <Image
                src="/img/favicon.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl mb-6">Joseph&apos;s</h2>
            <p
              className={
                "text-6xl font-bold leading-[1.25em] mb-6 " +
                unbounded.className
              }
            >
              Grily. Jednoduše.
            </p>
            <p className="text-2xl">
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
            <source src="/video/placeholder.webm" type="video/webm" />
          </video>
          <div className="h-full w-full bg-black absolute top-0 left-0 z-20 opacity-50"></div>
        </section>

        <section className="relative w-full" ref={productSecRef}>
          <div
            ref={manRef}
            className="man absolute top-[16.667%] left-1/2 -translate-y-1/2 z-10 h-[550px] w-full"
          >
            <img src="/img/average-man.png" className="object-contain" alt="" />
          </div>
          <div ref={product1Ref}>
            <HomeProduct
              name="John"
              tagline="Gril pro dobrodruhy"
              weight="6"
              height="23"
              length="25"
              pageLink="./grily/john"
              eshopLink=""
              image="john-comparison.webp"
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
              pageLink="./grily/peter"
              eshopLink=""
              image="peter-comparison.webp"
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
              pageLink="./grily/joseph"
              eshopLink=""
              image="joseph-comparison.webp"
              leftRef={product3InfoLeftRef}
              rightRef={product3InfoRightRef}
            >
              Hello
            </HomeProduct>
          </div>
        </section>
        <ContactFormSection />
      </main>
    </>
  );
};

export default HomePage;
