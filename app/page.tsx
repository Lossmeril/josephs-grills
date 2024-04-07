"use client";

import { useRef, useEffect } from "react";

import HomeProduct from "@/components/homeProduct";
import Image from "next/image";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        <section className="h-screen bg-white overflow-x-hidden">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[750px] aspect-video z-30">
            <Image
              src="/img/logo-full-color-inv.png"
              alt="Fresh Lobster logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="h-full w-full bg-black absolute top-0 left-0 z-20 opacity-50"></div>
          <video
            autoPlay
            loop
            muted
            id="heroVideo"
            className="h-screen w-screen object-cover z-10"
          >
            <source src="/video/placeholder.webm" type="video/webm" />
          </video>
        </section>

        <section className="h-[65vh] bg-white section-2 relative flex flex-col justify-center items-center">
          <div
            id="square"
            className="bg-white w-40 h-40 absolute top-[20%] left-[50%] translate-x-[-50%] scale-100 rotate-45 z-0"
          ></div>
          <div className="text-center z-10 w-[40vw]">
            <div className="relative w-10 h-10 mx-auto mb-6">
              <Image
                src="/img/favicon.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl mb-6">Joseph&apos;s</h2>
            <p className="text-5xl font-bold leading-[1.25em] mb-6">
              If you&apos;re looking for a brand new electric scooter,
              you&apos;re in the right place
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
        </section>

        <section className="relative w-full" ref={productSecRef}>
          <img
            src="/img/average-man.png"
            alt=""
            className="man absolute top-[16.667%] left-1/2 -translate-y-1/2 z-20"
            ref={manRef}
          />
          <div ref={product1Ref}>
            <HomeProduct
              name="John"
              tagline="Váš parťák na grilování na cestách."
              weight="6"
              height="23"
              length="25"
              leftRef={product1InfoLeftRef}
              rightRef={product1InfoRightRef}
            />
          </div>
          <div ref={product2Ref}>
            <HomeProduct
              name="Peter"
              tagline="To jedniné ohniště, které potřebujete."
              weight="36"
              height="33,1"
              length="74,3"
              leftRef={product2InfoLeftRef}
              rightRef={product2InfoRightRef}
            />
          </div>
          <div ref={product3Ref}>
            <HomeProduct
              name="Joseph"
              tagline="Je to gril. A leccos ustojí."
              weight="244"
              height="90"
              length="74"
              leftRef={product3InfoLeftRef}
              rightRef={product3InfoRightRef}
            />
          </div>
        </section>

        <section className="min-h-[80vh] bg-red section-2 relative flex flex-row justify-center items-center px-40">
          <div className="w-1/2"></div>
          <div className="bg-white p-20 w-1/2 text-center">
            <h2 className="text-2xl mb-6 font-bold">Kontaktujte nás!</h2>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
