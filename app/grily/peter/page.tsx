"use client";

import Button from "@/components/button";
import ContactFormSection from "@/components/contactFormSection";
import { PropBox } from "@/components/homeProduct";
import ProductParameter from "@/components/product/productParameters";
import { Unbounded } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineArchiveBox, HiOutlineWrench } from "react-icons/hi2";
import { PiForkKnife, PiSparkle } from "react-icons/pi";
import { RxRulerSquare } from "react-icons/rx";
import { SlFire } from "react-icons/sl";

const unbounded = Unbounded({ subsets: ["latin"] });

const JohnProductPage: React.FC = () => {
  const [currentImg, setCurrentImg] = useState("1");

  return (
    <div className="w-full bg-black">
      <main className="max-w-[1200px] overflow-x-hidden mx-auto text-white">
        <section className="min-h-screen overflow-x-hidden flex flex-col-reverse lg:flex-row flex-nowrap pt-20">
          <div className="hidden lg:block w-full lg:w-1/2 p-4 lg:p-20 lg:pr-10">
            <div className="relative overflow-hidden w-full aspect-[3/4] bg-mutedtext-light ml-auto mb-8">
              <Image
                src={"/img/products/peter/peter-" + currentImg + ".jpg"}
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-row flex-nowrap w-full h-28 gap-4 mb-8">
              <div
                className="w-1/4 relative overflow-hidden bg-red"
                onMouseOver={() => setCurrentImg("1")}
              >
                <Image
                  src="/img/products/peter/peter-1.jpg"
                  alt=""
                  fill
                  className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                />
              </div>
              <div className="w-1/4 relative overflow-hidden bg-red">
                <Image
                  src="/img/products/peter/peter-2.jpg"
                  alt=""
                  fill
                  className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                  onMouseOver={() => setCurrentImg("2")}
                />
              </div>
              <div className="w-1/4 relative overflow-hidden bg-red">
                <Image
                  src="/img/products/peter/peter-3.jpg"
                  alt=""
                  fill
                  className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                  onMouseOver={() => setCurrentImg("3")}
                />
              </div>
              <div className="w-1/4 relative overflow-hidden bg-red">
                <Image
                  src="/img/products/peter/peter-4.jpg"
                  alt=""
                  fill
                  className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                  onMouseOver={() => setCurrentImg("4")}
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pt-10 p-6 lg:p-20 lg:pl-10">
            <p className="text-xl mb-6 text-center lg:text-left">
              To jediné ohniště, které potřebujete.
            </p>
            <h1
              className={
                "text-6xl font-bold leading-[1.25em] mb-8 -mt-4 text-center lg:text-left " +
                unbounded.className
              }
            >
              Peter
            </h1>
            <p className="text-red text-2xl font-bold mb-4 text-center lg:text-left">
              8 200,-
            </p>

            <div className="block lg:hidden w-full lg:w-1/2 p-4 lg:p-20 lg:pr-10">
              <div className="relative overflow-hidden w-full aspect-[3/4] bg-mutedtext-light ml-auto mb-8">
                <Image
                  src={"/img/products/peter/peter-" + currentImg + ".jpg"}
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-row flex-nowrap w-full h-28 gap-4 mb-8">
                <div
                  className="w-1/4 relative overflow-hidden bg-red"
                  onMouseOver={() => setCurrentImg("1")}
                >
                  <Image
                    src="/img/products/peter/peter-1.jpg"
                    alt=""
                    fill
                    className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                  />
                </div>
                <div className="w-1/4 relative overflow-hidden bg-red">
                  <Image
                    src="/img/products/peter/peter-2.jpg"
                    alt=""
                    fill
                    className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                    onMouseOver={() => setCurrentImg("2")}
                  />
                </div>
                <div className="w-1/4 relative overflow-hidden bg-red">
                  <Image
                    src="/img/products/peter/peter-3.jpg"
                    alt=""
                    fill
                    className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                    onMouseOver={() => setCurrentImg("3")}
                  />
                </div>
                <div className="w-1/4 relative overflow-hidden bg-red">
                  <Image
                    src="/img/products/peter/peter-4.jpg"
                    alt=""
                    fill
                    className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                    onMouseOver={() => setCurrentImg("4")}
                  />
                </div>
              </div>
            </div>

            <p className="mb-6 text-center lg:text-left">
              Peter transformuje každý venkovní prostor na místo plné tepla a
              pohody. Díky svému inovativnímu designu, připomínajícímu kovovou
              ošatku, se stane centrem pozornosti a místem setkávání pro rodinu
              a přátele. Systém pro shromažďování popela zajišťuje snadnou
              údržbu, zatímco jeho robustní konstrukce slibuje dlouholetou
              spolehlivost.
            </p>
            <p className="mb-6 text-center lg:text-left">
              Jeho unikátní konstrukce z černé oceli nejen zajišťuje vynikající
              odolnost proti povětrnostním vlivům, ale také optimalizuje přívod
              vzduchu pro rovnoměrné spalování bez nadměrného kouře. Ocelové
              tyče, pevně spojené do tvaru ošatky, umožňují efektivní udržení
              paliva a zároveň poskytují dostatečný prostor pro přikládání, což
              usnadňuje obsluhu. Díky snadno přístupnému popelníku ulehčuje
              odstranění popela a čištění po každém použití. Peter tak přináší
              nejen teplo a světlo, ale i pohodlí a praktičnost, které očekáváte
              od venkovního ohniště.
            </p>
            <div className="mt-10 lg:mt-0 flex flex-col items-center justify-center lg:justify-start md:flex-row flex-nowrap gap-4 md:gap-10 mb-20 lg:mb-0">
              <div className="w-40">
                <Button link={""} inverse={false}>
                  Do e-shopu &raquo;
                </Button>
              </div>
              <div className="w-40">
                <Button link={"/grily"} inverse={true}>
                  Všechny grily &raquo;
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-mutedtext-light overflow-x-hidden flex flex-col flex-nowrap p-6 pb-16 lg:p-20 bg-white text-black mb-0 lg:mb-20">
          {/* --------- UNIQUE SELLING POINTS --------- */}
          <div className="w-full flex flex-col lg:flex-row flex-nowrap mb-16">
            {/* --------- USP 1  --------- */}
            <div className="w-full lg:w-1/3 flex flex-col items-center py-10 lg:p-8">
              <PropBox name={""}>
                <RxRulerSquare size={25} />
              </PropBox>
              <h2 className="text-center text-xl font-bold mb-8">
                Unikátní design
              </h2>
              <p className="text-mutedtext-dark text-center">
                Peterovo inovativní designové řešení nejen přitahuje pohledy,
                ale také zajišťuje optimální přívod vzduchu pro rovnoměrné
                spalování, což znamená méně kouře a efektivnější využití paliva.
              </p>
            </div>
            {/* --------- USP 2  --------- */}
            <div className="w-full lg:w-1/3 flex flex-col items-center border-t lg:border-l lg:border-t-0 border-mutedtext-light py-10 lg:p-8">
              <PropBox name={""}>
                <PiSparkle size={25} />
              </PropBox>
              <h2 className="text-center text-xl font-bold mb-8">
                Estetický a praktický
              </h2>
              <p className="text-mutedtext-dark text-center">
                Nejen že zajišťuje optimální přívod vzduchu pro rovnoměrné
                spalování, ale také je to designový prvek, který oživí každou
                zahradu nebo venkovní prostor svým industriálním vzhledem.
              </p>
            </div>
            {/* --------- USP 3  --------- */}
            <div className="w-full lg:w-1/3 flex flex-col items-center border-t lg:border-l lg:border-t-0 border-mutedtext-light py-10 lg:p-8">
              <PropBox name={""}>
                <SlFire size={25} />
              </PropBox>
              <h2 className="text-center text-xl font-bold mb-8">
                Snadné přikládání
              </h2>
              <p className="text-mutedtext-dark text-center">
                Otevřený design umožňuje snadné přikládání dřeva bez nutnosti
                přerušovat grilování nebo opékání.
              </p>
            </div>
          </div>
          <h2 className="text-4xl font-bold leading-[1.25em] text-center md:text-left mb-8 -mt-4 ">
            Parametry
          </h2>
          <ProductParameter name="Rozměr)" value="743 × 743 × 331 mm" />
          <ProductParameter name="Materiál" value="černá ocel" inverted />
          <ProductParameter name="Hmotnost" value="36 kg" />
        </section>
      </main>
      <ContactFormSection />
    </div>
  );
};

export default JohnProductPage;
