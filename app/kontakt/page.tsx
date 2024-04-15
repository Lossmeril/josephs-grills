"use client";

import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Inter } from "next/font/google";
import { IoMdPin } from "react-icons/io";
import { MdEmail, MdPhone } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ContactPage = () => {
  const underlineRef = useRef(null);

  useEffect(() => {
    const underline = underlineRef.current;

    gsap.fromTo(
      underline,
      { width: 0 },
      {
        ease: "sine.inOut",
        width: "100%",
        duration: 3,
      }
    );
  });

  return (
    <main className="max-w-[1200px] overflow-x-hidden mx-auto">
      <section className="min-h-screen bg-white overflow-x-hidden p-20 flex flex-col justify-center items-center hero">
        <div className="w-3/5 text-center relative">
          <h1 className="text-6xl font-bold leading-[1.25em] mb-8 -mt-4 z-20">
            Kontaktujte nás!
          </h1>
          <div
            className="bg-orange opacity-25 h-10 absolute top-[10%] z-0"
            ref={underlineRef}
          ></div>
          <p className="text-xl mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
        </div>
        <div className="flex flex-row flex-nowrap w-full">
          <div className="w-2/5 p-10 px-20 flex flex-col flex-nowrap gap-5">
            <div className="flex flex-row flex-nowrap justify-start gap-5">
              <MdPhone size={25} />
              <p className="text-lg text-left">
                <a href="tel:'+420123456789'" className="link">
                  +420 123 456 789
                </a>
              </p>
            </div>

            <div className="flex flex-row flex-nowrap justify-start gap-5">
              <MdEmail size={25} />

              <p className="text-lg text-left">
                <a href="mailto:'ifo@josephs-grills.cz'" className="link">
                  info<span className={inter.className}>@</span>
                  josephs-grills.cz
                </a>
              </p>
            </div>

            <div className="flex flex-row flex-nowrap justify-start gap-5">
              <IoMdPin size={25} />
              <p className="text-lg text-left">
                Adresa 1<br />
                123 45 Štíty
                <br />
                Česká Republika
              </p>
            </div>
          </div>
          <div className="w-3/5"></div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
