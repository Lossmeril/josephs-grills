"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Unbounded } from "next/font/google";
import Button from "./button";

import { gsap } from "gsap";
import { globalLinks } from "@/data/links";

const unbounded = Unbounded({ subsets: ["latin"] });

const ExploreSection: React.FC = () => {
  const underlineFootnoteRef = useRef(null);
  const footnoteRef = useRef(null);

  useEffect(() => {
    const underlineFootnote = underlineFootnoteRef.current;
    const footnote = footnoteRef.current;

    gsap.fromTo(
      underlineFootnote,
      { width: 0 },
      {
        ease: "sine.inOut",
        width: "100%",
        duration: 1.5,
        scrollTrigger: {
          trigger: footnote,
          start: "-25% center",
          end: "center center",
          scrub: true,
        },
      }
    );
  });

  return (
    <section
      ref={footnoteRef}
      className="xl:h-[750px] bg-white overflow-x-hidden flex flex-col flex-nowrap justify-start items-center text-center pt-4 xl:pt-16 px-4 lg:px-0"
    >
      <div className="relative w-10 h-10 mx-auto mb-6">
        <Image src="/img/favicon.png" alt="" fill className="object-contain" />
      </div>
      <p className="text-lg xl:text-xl mb-6">Vítejte v rodině Joseph&apos;s!</p>
      <div className="relative">
        <p
          className={
            "text-3xl xl:text-6xl font-bold leading-[1.25em] mb-2 lg:mb-8 -mt-4 z-20 relative " +
            unbounded.className
          }
        >
          Prozkoumejte nové chutě a objevte kouzlo grilování!
        </p>
        <div
          ref={underlineFootnoteRef}
          className="bg-orange opacity-25 h-10 absolute top-[10%] z-0"
        ></div>
      </div>
      <div className="flex flex-col lg:flex-row flex-nowrap gap-5 lg:gap-10 lg:w-[650px] mt-10 mb-24 lg:mb-0 lg:mt-10">
        <div className="lg:w-1/2">
          <Button link={globalLinks.eshop.cs} inverse={false} blank>
            Do e-shopu &raquo;
          </Button>
        </div>
        <div className="lg:w-1/2">
          <Button link={"/grily"} inverse={true}>
            Naše grily &raquo;
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
