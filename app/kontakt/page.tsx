"use client";

import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Inter, Unbounded } from "next/font/google";
import { IoMdPin } from "react-icons/io";
import { MdEmail, MdPhone } from "react-icons/md";
import Button from "@/components/button";
import { globalLinks } from "@/data/links";

const inter = Inter({ subsets: ["latin"] });
const unbounded = Unbounded({ subsets: ["latin"] });

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ContactPage = () => {
  return (
    <main className="max-w-[1200px] overflow-x-hidden mx-auto">
      <section className="min-h-[500px] bg-white overflow-x-hidden pt-20 flex flex-col justify-center items-center hero">
        <div className="w-3/5 text-center relative">
          <h1
            className={
              "text-6xl font-bold leading-[1.25em] mb-8 -mt-4 z-20 " +
              unbounded.className
            }
          >
            Ozvěte se nám!
          </h1>
          <div className="bg-orange opacity-25 h-10 absolute top-[10%] z-0"></div>
          <p className="text-xl mb-6">
            Vy máte rádi grilování. My taky. Tak nám napište a nebo zavolejte!
          </p>
        </div>
      </section>
      <section className="min-h-[800px] py-5 bg-white overflow-x-hidden flex flex-col lg:flex-row flex-nowrap justify-center items-center gap-40 text-center ">
        <div className="flex flex-col xl:flex-row flex-nowrap w-full">
          <div className="w-full xl:w-2/5 p-10 px-20 flex flex-col flex-nowrap gap-5">
            <div className="flex flex-row flex-nowrap justify-start gap-5">
              <MdPhone size={25} />
              <p className="text-lg text-left">
                <a href="tel:'+420606727976'" className="link">
                  +420 606 727 976
                </a>
              </p>
            </div>

            <div className="flex flex-row flex-nowrap justify-start gap-5">
              <MdEmail size={25} />

              <p className="text-lg text-left">
                <a href="mailto:'info@josephsgrills.cz'" className="link">
                  info<span className={inter.className}>@</span>
                  josephsgrills.cz
                </a>
              </p>
            </div>

            <div className="flex flex-row flex-nowrap justify-start gap-5">
              <IoMdPin size={25} />
              <p className="text-lg text-left">
                Na Pilníku 292,
                <br />
                789 91 Štíty
                <br />
                Česká Republika
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-5 max-w-80">
              <Button
                link={globalLinks.termsAndConditions.cs}
                inverse={false}
                blank
              >
                Obchodní podmínky &raquo;
              </Button>

              <Button link={globalLinks.GDPR.cs} inverse={false} blank>
                Ochrana osobních údajů a GDPR &raquo;
              </Button>

              <Button link={globalLinks.certification.cs} inverse={false} blank>
                Certifikace nerezové oceli &raquo;
              </Button>
            </div>
          </div>
          <div className="bg-white w-full xl:w-3/5 m-4 text-left">
            <h2
              className={
                "text-3xl mt-10 md:mt-0 mb-6 font-bold text-left pl-[10px] " +
                unbounded.className
              }
            >
              Napište nám!
            </h2>
            <iframe
              className="w-full min-h-[80vh]"
              src="https://cms.josephsgrills.cz/kontaktni-formular/"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
