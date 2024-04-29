"use client";

import Button from "@/components/button";
import ContactFormSection from "@/components/contactFormSection";
import { PropBox } from "@/components/homeProduct";
import ProductParameter from "@/components/product/productParameters";
import { Unbounded } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineArchiveBox, HiOutlineWrench } from "react-icons/hi2";
import { PiForkKnife } from "react-icons/pi";

const unbounded = Unbounded({ subsets: ["latin"] });

const JohnProductPage: React.FC = () => {
  const [currentImg, setCurrentImg] = useState("1");

  return (
    <div className="w-full bg-black">
      <main className="max-w-[1200px] overflow-x-hidden mx-auto  text-white">
        <section className="min-h-screen overflow-x-hidden flex flex-col-reverse lg:flex-row flex-nowrap pt-20">
          <div className="hidden lg:block w-full lg:w-1/2 p-4 lg:p-20 lg:pr-10">
            <div className="relative overflow-hidden w-full aspect-[3/4] bg-mutedtext-light ml-auto mb-8">
              <Image
                src={"/img/products/john/john-" + currentImg + ".jpg"}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-row flex-nowrap w-full h-28 gap-4 mb-8">
              <div
                className="w-1/4 relative overflow-hidden bg-red"
                onMouseOver={() => setCurrentImg("1")}
              >
                <Image
                  src="/img/products/john/john-1.jpg"
                  alt=""
                  fill
                  className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                />
              </div>
              <div className="w-1/4 relative overflow-hidden bg-red">
                <Image
                  src="/img/products/john/john-2.jpg"
                  alt=""
                  fill
                  className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                  onMouseOver={() => setCurrentImg("2")}
                />
              </div>
              <div className="w-1/4 relative overflow-hidden bg-red">
                <Image
                  src="/img/products/john/john-3.jpg"
                  alt=""
                  fill
                  className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                  onMouseOver={() => setCurrentImg("3")}
                />
              </div>
              <div className="w-1/4 relative overflow-hidden bg-red">
                <Image
                  src="/img/products/john/john-disassembled.jpg"
                  alt=""
                  fill
                  className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                  onMouseOver={() => setCurrentImg("disassembled")}
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pt-10 p-6 lg:p-20 lg:pl-10">
            <p className="text-xl mb-6 text-center lg:text-left">
              Gril pro dobrodruhy
            </p>
            <h1
              className={
                "text-6xl font-bold leading-[1.25em] mb-8 -mt-4 text-center lg:text-left" +
                unbounded.className
              }
            >
              John
            </h1>
            <p className="text-red text-2xl font-bold mb-4 text-center lg:text-left">
              1 999,-
            </p>
            {/* <div className="flex flex-row flex-nowrap justify-center gap-8 my-10">
              <PropBox name={"Kompaktní a přenosný"} inv>
                <HiOutlineArchiveBox size={25} />
              </PropBox>
              <PropBox name={"Snadná montáž i demontáž"} inv>
                <HiOutlineWrench size={25} />
              </PropBox>
              <PropBox name={"Zdravé stravování na cestách"} inv>
                <PiForkKnife size={25} />
              </PropBox>
            </div> */}
            <div className="block lg:hidden w-full lg:w-1/2 p-4 lg:p-20 lg:pr-10">
              <div className="relative overflow-hidden w-full aspect-[3/4] bg-mutedtext-light ml-auto mb-8">
                <Image
                  src={"/img/products/john/john-" + currentImg + ".jpg"}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-row flex-nowrap w-full h-28 gap-4 mb-8">
                <div
                  className="w-1/4 relative overflow-hidden bg-red"
                  onMouseOver={() => setCurrentImg("1")}
                >
                  <Image
                    src="/img/products/john/john-1.jpg"
                    alt=""
                    fill
                    className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                  />
                </div>
                <div className="w-1/4 relative overflow-hidden bg-red">
                  <Image
                    src="/img/products/john/john-2.jpg"
                    alt=""
                    fill
                    className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                    onMouseOver={() => setCurrentImg("2")}
                  />
                </div>
                <div className="w-1/4 relative overflow-hidden bg-red">
                  <Image
                    src="/img/products/john/john-3.jpg"
                    alt=""
                    fill
                    className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                    onMouseOver={() => setCurrentImg("3")}
                  />
                </div>
                <div className="w-1/4 relative overflow-hidden bg-red">
                  <Image
                    src="/img/products/john/john-disassembled.jpg"
                    alt=""
                    fill
                    className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                    onMouseOver={() => setCurrentImg("disassembled")}
                  />
                </div>
              </div>
            </div>

            <p className="mb-6 text-center lg:text-left">
              Představujeme vám Johna, malý, ale mimořádně šikovný gril, který
              se stane vaším nezbytným společníkem na cestách. Díky svému
              jedinečnému designu &mdash; tvořenému šesti čtvercovými ocelovými
              pláty, se John skládá a rozkládá s dětskou snadností.
            </p>
            <p className="mb-6 text-center lg:text-left">
              Ve složené formě nabízí nevídanou kompaktnost, což jej činí
              ideálním pro milovníky cestování, co si chtějí jídlo vychutnávat s
              pohledem na přírodní krásy pod širým nebem. Je vyroben z
              certifikované nerezové potravinářské oceli, díky čemuž slibuje
              bezpečné grilování bez obav. Jeho koupí získáte nejen
              spolehlivost, ale i styl. přesně to na cestách potřebujete &mdash;
              Johna, který je vždy připraven podpořit vaše kulinářské
              dobrodružství.
            </p>
            <div className="mt-10 md:mt-0 flex flex-col items-center md:flex-row flex-nowrap gap-4 md:gap-10 mb-20 lg:mb-0">
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
        <section className="border-t border-mutedtext-light overflow-x-hidden flex flex-col flex-nowrap p-6 lg:p-20 bg-white text-black mb-0">
          {/* --------- UNIQUE SELLING POINTS --------- */}
          <div className="w-full flex flex-col lg:flex-row flex-nowrap mb-16">
            {/* --------- USP 1  --------- */}
            <div className="w-full lg:w-1/3 flex flex-col items-center py-10 lg:p-8">
              <PropBox name={""}>
                <HiOutlineArchiveBox size={25} />
              </PropBox>
              <h2 className="text-center text-xl font-bold mb-8">
                Kompaktní a přenosný
              </h2>
              <p className="text-mutedtext-dark text-center">
                Unikátní skládací design, s váhou pouhých 6 kg a malé rozměry v
                složeném stavu z něj dělají dokonalého společníka na cesty.
              </p>
            </div>
            {/* --------- USP 2  --------- */}
            <div className="w-full lg:w-1/3 flex flex-col items-center border-t lg:border-l lg:border-t-0 border-mutedtext-light py-10 lg:p-8">
              <PropBox name={""}>
                <HiOutlineWrench size={25} />
              </PropBox>
              <h2 className="text-center text-xl font-bold mb-8">
                Snadná montáž i demontáž
              </h2>
              <p className="text-mutedtext-dark text-center">
                Díky složení z 6 čtvercových ocelových plátů je John snadno
                sestavitelný a rozložitelný bez potřeby nářadí, což šetří čas a
                usnadňuje jeho používání na jakémkoliv místě.
              </p>
            </div>
            {/* --------- USP 3  --------- */}
            <div className="w-full lg:w-1/3 flex flex-col items-center border-t lg:border-l lg:border-t-0 border-mutedtext-light py-10 lg:p-8">
              <PropBox name={""}>
                <PiForkKnife size={25} />
              </PropBox>
              <h2 className="text-center text-xl font-bold mb-8">
                Zdravé stravování na cestách
              </h2>
              <p className="text-mutedtext-dark text-center">
                John je vyroben z kvalitní nerezové oceli certifikované pro
                potravinářské účely, což zajišťuje, že vaše jídlo bude vždy
                chutné a bez nežádoucích látek.
              </p>
            </div>
          </div>
          <h2 className="text-4xl font-bold leading-[1.25em] mb-8 -mt-4 ">
            Parametry
          </h2>
          <ProductParameter
            name="Rozměr (rozložený)"
            value="250 × 250 × 15 mm"
          />
          <ProductParameter
            name="Rozměr (sestavený)"
            value="250 × 250 × 230 mm"
            inverted
          />
          <ProductParameter name="Tloušťka oceli" value="2 mm" />
          <ProductParameter
            name="Materiál"
            value="Nerezová potravinářská ocel"
            inverted
          />
          <ProductParameter name="Hmotnost" value="6 kg" />
        </section>
      </main>
      <ContactFormSection />
    </div>
  );
};

export default JohnProductPage;
