"use client";

import Button from "@/components/button";
import ContactFormSection from "@/components/contactFormSection";
import { PropBox } from "@/components/homeProduct";
import ProductParameter from "@/components/product/productParameters";
import { Unbounded } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { PiCheckSquareOffset, PiGear, PiSparkle } from "react-icons/pi";
import { RxRulerSquare } from "react-icons/rx";
import { SlFire } from "react-icons/sl";

const unbounded = Unbounded({ subsets: ["latin"] });

const JosephProductPage: React.FC = () => {
  const [currentImg, setCurrentImg] = useState("1");

  return (
    <div className="w-full bg-black">
      <main className="max-w-[1200px] overflow-x-hidden mx-auto text-white">
        <section className="min-h-screen overflow-x-hidden flex flex-col-reverse lg:flex-row flex-nowrap pt-20">
          <div className="hidden lg:block w-full lg:w-1/2 p-4 lg:p-20 lg:pr-10">
            <div className="relative overflow-hidden w-full aspect-[3/4] bg-mutedtext-light ml-auto mb-8">
              <Image
                src={"/img/products/joseph/joseph-" + currentImg + ".jpg"}
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
                  src="/img/products/joseph/joseph-1.jpg"
                  alt=""
                  fill
                  className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                />
              </div>
              <div className="w-1/4 relative overflow-hidden bg-red">
                <Image
                  src="/img/products/joseph/joseph-2.jpg"
                  alt=""
                  fill
                  className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                  onMouseOver={() => setCurrentImg("2")}
                />
              </div>
              <div className="w-1/4 relative overflow-hidden bg-red">
                <Image
                  src="/img/products/joseph/joseph-3.jpg"
                  alt=""
                  fill
                  className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                  onMouseOver={() => setCurrentImg("3")}
                />
              </div>
              <div className="w-1/4 relative overflow-hidden bg-red">
                <Image
                  src="/img/products/joseph/joseph-4.jpg"
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
              Mistr grilování
            </p>
            <h1
              className={
                "text-6xl font-bold leading-[1.25em] mb-8 -mt-4 text-center lg:text-left " +
                unbounded.className
              }
            >
              Joseph
            </h1>
            <p className="text-red text-2xl font-bold text-center lg:text-left mb-2">
              48 400,-
            </p>
            <p className="text-white text-md text-center lg:text-left mb-2">
              &bull; Nerezový rošt{" "}
              <span className="text-red font-bold">+ 4 000,-</span>
            </p>
            <p className="text-white text-md text-center lg:text-left mb-10">
              &bull; Nerezový dekl{" "}
              <span className="text-red font-bold">+ 4 000,-</span>
            </p>

            <div className="block lg:hidden w-full lg:w-1/2 p-4 lg:p-20 lg:pr-10">
              <div className="relative overflow-hidden w-full aspect-[3/4] bg-mutedtext-light ml-auto mb-8">
                <Image
                  src={"/img/products/joseph/joseph-" + currentImg + ".jpg"}
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
                    src="/img/products/joseph/joseph-1.jpg"
                    alt=""
                    fill
                    className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                  />
                </div>
                <div className="w-1/4 relative overflow-hidden bg-red">
                  <Image
                    src="/img/products/joseph/joseph-2.jpg"
                    alt=""
                    fill
                    className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                    onMouseOver={() => setCurrentImg("2")}
                  />
                </div>
                <div className="w-1/4 relative overflow-hidden bg-red">
                  <Image
                    src="/img/products/joseph/joseph-3.jpg"
                    alt=""
                    fill
                    className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                    onMouseOver={() => setCurrentImg("3")}
                  />
                </div>
                <div className="w-1/4 relative overflow-hidden bg-red">
                  <Image
                    src="/img/products/joseph/joseph-4.jpg"
                    alt=""
                    fill
                    className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                    onMouseOver={() => setCurrentImg("4")}
                  />
                </div>
              </div>
            </div>

            <p className="mb-6 text-center lg:text-left">
              Joseph je výsledkem vrcholové řemeslné zručnosti a navržen je pro
              ty, kteří od svého grilu očekávají nekompromisní kvalitu a výkon.
              Jeho geometrický design nejen osloví oko, ale také slibuje
              jedinečný zážitek z grilování. Díky certifikované potravinářské
              nerezové grilovací desce a možnosti přidání dalšího roštu nabízí
              Joseph nevídanou flexibilitu a odolnost.
            </p>
            <p className="mb-6 text-center lg:text-left">
              Speciálně navržený systém pro efektivní přívod kyslíku zajišťuje
              optimální spalování a umožňuje přikládání paliva přímo uprostřed
              grilovací desky, což zvyšuje efektivitu a pohodlí při grilování.
              Připraven na všechny druhy počasí, přináší tento gril industriální
              eleganci do vašeho venkovního prostoru a slibuje roky spolehlivého
              užívání. K dispozici je také nerezový dekl, navržený k ochraně
              grilu před nepříznivými povětrnostními podmínkami, když se na něm
              právě negriluje, čímž prodlužuje jeho životnost.
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
                <AiOutlineSafetyCertificate size={25} />
              </PropBox>
              <h2 className="text-center text-xl font-bold mb-8">
                Kvalita a výkon
              </h2>
              <p className="text-mutedtext-dark text-center">
                Navržen s ohledem na nejvyšší požadavky, kvalitu a výkon, Joseph
                je ideální pro milovníky a nadšence do grilování, kteří
                očekávají nejlepší výsledky.
              </p>
            </div>
            {/* --------- USP 2  --------- */}
            <div className="w-full lg:w-1/3 flex flex-col items-center border-t lg:border-l lg:border-t-0 border-mutedtext-light py-10 lg:p-8">
              <PropBox name={""}>
                <PiCheckSquareOffset size={25} />
              </PropBox>
              <h2 className="text-center text-xl font-bold mb-8">
                Robustní konstrukce
              </h2>
              <p className="text-mutedtext-dark text-center">
                Gril odolá všem druhům počasí, a tak slibuje roky spolehlivého
                užívání, což z něj činí výbornou investici pro každého, kdo chce
                spolehlivého partnera v přípravě grilovaných pochoutek.
              </p>
            </div>
            {/* --------- USP 3  --------- */}
            <div className="w-full lg:w-1/3 flex flex-col items-center border-t lg:border-l lg:border-t-0 border-mutedtext-light py-10 lg:p-8">
              <PropBox name={""}>
                <PiGear size={25} />
              </PropBox>
              <h2 className="text-center text-xl font-bold mb-8">
                Možnost rozšíření
              </h2>
              <p className="text-mutedtext-dark text-center">
                Nabízí rozšíření s doplňkovým příslušenstvím, jako je přídavný
                rošt pro další potraviny připravované společně s masem, či
                nerezový dekl pro ochranu grilu, což zvyšuje jeho užitnou
                hodnotu a životnost.
              </p>
            </div>
          </div>
          <h2 className="text-4xl font-bold leading-[1.25em] text-center md:text-left mb-8 -mt-4 ">
            Parametry
          </h2>
          <ProductParameter name="Výška" value="900 mm" />
          <ProductParameter name="Šířka" value="740 mm" inverted />
          <ProductParameter name="Tloušťka nerezové desky" value="10 mm" />
          <ProductParameter name="Hmotnost" value="36 kg" inverted />
          <ProductParameter
            name="Materiál"
            value="nerezová potravinářská ocel"
          />
          <ProductParameter name="Hmotnost" value="244 kg" inverted />
          <ProductParameter name="Hmotnost nerezového roštu" value="6 kg" />
          <ProductParameter
            name="Hmotnost nerezového deklu"
            value="8 kg"
            inverted
          />
        </section>
      </main>
      <ContactFormSection />
    </div>
  );
};

export default JosephProductPage;
