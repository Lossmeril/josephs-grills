"use client";

import Button from "@/components/button";
import ContactFormSection from "@/components/contactFormSection";
import ProductParameter from "@/components/product/productParameters";
import { Unbounded } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";

const unbounded = Unbounded({ subsets: ["latin"] });

const JohnProductPage: React.FC = () => {
  const [currentImg, setCurrentImg] = useState("1");

  return (
    <div className="w-full bg-black">
      <main className="max-w-[1200px] overflow-x-hidden mx-auto  text-white">
        <section className="min-h-screen  overflow-x-hidden flex flex-row flex-nowrap pt-20">
          <div className="w-1/2 p-20 pr-10">
            <div className="relative overflow-hidden w-full aspect-[3/4] bg-[#dedede] ml-auto mb-8">
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
                  src="/img/products/placeholder2.jpg"
                  alt=""
                  fill
                  className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                  onMouseOver={() => setCurrentImg("2")}
                />
              </div>
              <div className="w-1/4 relative overflow-hidden bg-red">
                <Image
                  src="/img/products/placeholder3.jpg"
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
          <div className="w-1/2 p-20 pl-10">
            <p className="text-xl mb-6">Gril pro dobrodruhy</p>
            <h1
              className={
                "text-6xl font-bold leading-[1.25em] mb-8 -mt-4 " +
                unbounded.className
              }
            >
              John
            </h1>
            <p className="text-red text-2xl font-bold mb-4">1 999,-</p>
            <p className="mb-6">
              Představujeme vám Johna, malý, ale mimořádně šikovný gril, který
              se stane vaším nezbytným společníkem na cestách. Díky svému
              jedinečnému designu &mdash; tvořenému šesti čtvercovými ocelovými
              pláty, se John skládá a rozkládá s dětskou snadností.
            </p>
            <div className="w-40">
              <Button link={""} inverse={false}>
                Do e-shopu &raquo;
              </Button>
            </div>
          </div>
        </section>
        <section className="border-t border-[#ededed]overflow-x-hidden flex flex-col flex-nowrap p-20">
          <h2 className="text-4xl font-bold leading-[1.25em] mb-8 -mt-4 ">
            Popisek
          </h2>
          <p className="mb-6">
            Představujeme vám Johna, malý, ale mimořádně šikovný gril, který se
            stane vaším nezbytným společníkem na cestách. Díky svému jedinečnému
            designu &mdash; tvořenému šesti čtvercovými ocelovými pláty, se John
            skládá a rozkládá s dětskou snadností.
          </p>
          <p className="mb-6">
            Ve složené formě nabízí nevídanou kompaktnost, což jej činí ideálním
            pro milovníky cestování, co si chtějí jídlo vychutnávat s pohledem
            na přírodní krásy pod širým nebem. Je vyroben z certifikované
            nerezové potravinářské oceli, díky čemuž slibuje bezpečné grilování
            bez obav. Jeho koupí získáte nejen spolehlivost, ale i styl. přesně
            to na cestách potřebujete &mdash; Johna, který je vždy připraven
            podpořit vaše kulinářské dobrodružství.
          </p>
          <h3 className="text-xl font-bold leading-[1.25em] mb-4 ">
            Kompaktní a přenosný
          </h3>
          <p className="mb-6">
            Unikátní skládací design, s váhou pouhých 6 kg a malé rozměry v
            složeném stavu z něj dělají dokonalého společníka na cesty.
          </p>
          <h3 className="text-xl font-bold leading-[1.25em] mb-4 ">
            Snadná montáž i demontáž
          </h3>
          <p className="mb-6">
            Díky složení z 6 čtvercových ocelových plátů je John snadno
            sestavitelný a rozložitelný bez potřeby nářadí, což šetří čas a
            usnadňuje jeho používání na jakémkoliv místě.
          </p>
          <h3 className="text-xl font-bold leading-[1.25em] mb-4 ">
            Zdravé stravování na cestách
          </h3>
          <p className="mb-6">
            John je vyroben z kvalitní nerezové oceli certifikované pro
            potravinářské účely, což zajišťuje, že vaše jídlo bude vždy chutné a
            bez nežádoucích látek.
          </p>
        </section>
        <section className="border-t border-[#ededed] overflow-x-hidden flex flex-col flex-nowrap p-20">
          <h2 className="text-4xl font-bold leading-[1.25em] mb-8 -mt-4 ">
            Parametry
          </h2>
          <ProductParameter
            name="Rozměr (rozložený)"
            value="250 × 250 × 15 mm"
          />
          <ProductParameter
            name="Rozměr (složený)"
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
