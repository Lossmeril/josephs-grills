"use client";

import Button from "@/components/button";
import ContactFormSection from "@/components/contactFormSection";
import { PropBox } from "@/components/homeProduct";
import Gallery from "@/components/product/gallery";
import ProductParameter from "@/components/product/productParameters";
import { Unbounded } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineArchiveBox, HiOutlineWrench } from "react-icons/hi2";
import { PiForkKnife } from "react-icons/pi";

const unbounded = Unbounded({ subsets: ["latin"] });

const portfolio: Array<string> = [
  "/img/products/joseph/gallery/joseph-photo-1.jpg",
  "/img/products/joseph/gallery/joseph-photo-1.jpg",
  "/img/products/joseph/gallery/joseph-photo-1.jpg",
  "/img/products/joseph/gallery/joseph-photo-1.jpg",
  "/img/products/joseph/gallery/joseph-photo-1.jpg",
  "/img/products/joseph/gallery/joseph-photo-1.jpg",
  "/img/products/joseph/gallery/joseph-photo-1.jpg",
  "/img/products/joseph/gallery/joseph-photo-1.jpg",
];

const JohnProductPage: React.FC = () => {
  const [currentImg, setCurrentImg] = useState("1");

  const { t } = useTranslation();

  return (
    <div className="w-full bg-black">
      <main className="max-w-[1200px] overflow-x-hidden mx-auto text-white">
        <section className="min-h-screen overflow-x-hidden flex flex-col-reverse lg:flex-row flex-nowrap pt-20">
          <div className="hidden lg:block w-full lg:w-1/2 p-4 lg:p-20 lg:pr-10">
            <div className="relative overflow-hidden w-full aspect-[3/4] bg-mutedtext-light ml-auto mb-8">
              <Image
                src={"/img/products/john/john-" + currentImg + ".jpg"}
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
              {t("johnTagline")}
            </p>
            <h1
              className={
                "text-6xl font-bold leading-[1.25em] mb-8 -mt-4 text-center lg:text-left " +
                unbounded.className
              }
            >
              John
            </h1>
            <p className="text-red text-2xl font-bold mb-4 text-center lg:text-left">
              {t("johnPrice")}
            </p>
            <div className="block lg:hidden w-full lg:w-1/2 p-4 lg:p-20 lg:pr-10">
              <div className="relative overflow-hidden w-full aspect-[3/4] bg-mutedtext-light ml-auto mb-8">
                <Image
                  src={"/img/products/john/john-" + currentImg + ".jpg"}
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
              {t("johnParagraph1")}
            </p>
            <p className="mb-6 text-center lg:text-left">
              {t("johnParagraph2")}
            </p>
            <div className="mt-10 lg:mt-0 flex flex-col items-center justify-center lg:justify-start md:flex-row flex-nowrap gap-4 md:gap-10 mb-20 lg:mb-0">
              <div className="w-40">
                <Button link={t("linkEshopJohn")} inverse={false} blank>
                  {t("buttonEshop")} &raquo;
                </Button>
              </div>
              <div className="w-40">
                <Button link={"/grily"} inverse={true}>
                  {t("buttonOurGrills")} &raquo;
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
                <HiOutlineArchiveBox size={25} />
              </PropBox>
              <h2 className="text-center text-xl font-bold mb-8">
                {t("johnUSP1")}
              </h2>
              <p className="text-mutedtext-dark text-center">
                {t("johnUSP1Text")}
              </p>
            </div>
            {/* --------- USP 2  --------- */}
            <div className="w-full lg:w-1/3 flex flex-col items-center border-t lg:border-l lg:border-t-0 border-mutedtext-light py-10 lg:p-8">
              <PropBox name={""}>
                <HiOutlineWrench size={25} />
              </PropBox>
              <h2 className="text-center text-xl font-bold mb-8">
                {t("johnUSP2")}
              </h2>
              <p className="text-mutedtext-dark text-center">
                {t("johnUSP2Text")}
              </p>
            </div>
            {/* --------- USP 3  --------- */}
            <div className="w-full lg:w-1/3 flex flex-col items-center border-t lg:border-l lg:border-t-0 border-mutedtext-light py-10 lg:p-8">
              <PropBox name={""}>
                <PiForkKnife size={25} />
              </PropBox>
              <h2 className="text-center text-xl font-bold mb-8">
                {t("johnUSP3")}
              </h2>
              <p className="text-mutedtext-dark text-center">
                {t("johnUSP3Text")}
              </p>
            </div>
          </div>
          <h2 className="text-4xl font-bold leading-[1.25em] text-center md:text-left mb-8 -mt-4 ">
            {t("productParametersHeading")}
          </h2>
          <ProductParameter
            name={t("productParameterSizeDis")}
            value="250 × 250 × 15 mm"
          />
          <ProductParameter
            name={t("productParameterSizeAss")}
            value="250 × 250 × 230 mm"
            inverted
          />
          <ProductParameter
            name={t("productParameterSteelThickness")}
            value="2 mm"
          />
          <ProductParameter
            name={t("productParameterMaterial")}
            value={t("productParameterStainlessSteel")}
            inverted
          />
          <ProductParameter name={t("productParameterWeight")} value="6 kg" />
        </section>

        <Gallery grillName={"Joseph"} portfolioItems={portfolio} />
      </main>
      <ContactFormSection />
    </div>
  );
};

export default JohnProductPage;
