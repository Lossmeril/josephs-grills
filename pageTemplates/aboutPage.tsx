"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PageProps } from "@/data/types";

import ContactFormSection from "@/components/contactFormSection";
import ExploreSection from "@/components/exploreSection";

import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"] });

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutPage: React.FC<PageProps> = ({ langPack }) => {
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
            {langPack.aboutHeroTitle}
          </h1>
          <p className="text-xl mb-6">{langPack.aboutHeroSubtitle}</p>
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
                {langPack.aboutSection1Title}
              </h2>
              <div
                className="bg-orange opacity-25 h-10 absolute top-[10%] z-0"
                ref={underline1Ref}
              ></div>
            </div>

            <p className="text-md mb-6">{langPack.aboutSection1Text1}</p>
            <p className="text-md mb-6">{langPack.aboutSection1Text2}</p>
          </div>
          <div ref={img1Ref} className="w-full h-[500px] relative">
            <Image
              src="/img/bg-img-2.webp"
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
              src="/img/bg-img-3.webp"
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
                {langPack.aboutSection2Title}
              </h2>
              <div
                ref={underline2Ref}
                className="bg-orange opacity-25 h-10 absolute top-[10%] z-0"
              ></div>
            </div>
            <p className="text-md mb-6">{langPack.aboutSection2Text1}</p>
            <p className="text-md mb-6">{langPack.aboutSection2Text2}</p>
            <p className="text-md mb-6">{langPack.aboutSection2Text3}</p>
          </div>
        </section>

        <ExploreSection langPack={langPack} />
      </main>
      <ContactFormSection langPack={langPack} />
    </>
  );
};

export default AboutPage;
