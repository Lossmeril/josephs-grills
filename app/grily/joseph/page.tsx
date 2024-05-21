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
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { PiCheckSquareOffset, PiGear } from "react-icons/pi";

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

const JosephProductPage: React.FC = () => {
  const [currentImg, setCurrentImg] = useState("1");

  const { t } = useTranslation();

  return (
    <>
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
              <div className="flex flex-row flex-nowrap w-full h-28 gap-4 mb-8">
                <div
                  className="w-1/4 relative overflow-hidden bg-red"
                  onMouseOver={() => setCurrentImg("5")}
                >
                  <Image
                    src="/img/products/joseph/joseph-5.jpg"
                    alt=""
                    fill
                    className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                  />
                </div>
                <div className="w-1/4 relative overflow-hidden bg-red">
                  <Image
                    src="/img/products/joseph/joseph-6.jpg"
                    alt=""
                    fill
                    className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                    onMouseOver={() => setCurrentImg("6")}
                  />
                </div>
                <div className="w-1/4 relative overflow-hidden bg-red">
                  <Image
                    src="/img/products/joseph/joseph-7.jpg"
                    alt=""
                    fill
                    className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                    onMouseOver={() => setCurrentImg("7")}
                  />
                </div>
                <div className="w-1/4 relative overflow-hidden bg-red">
                  <Image
                    src="/img/products/joseph/joseph-8.jpg"
                    alt=""
                    fill
                    className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                    onMouseOver={() => setCurrentImg("8")}
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 pt-10 p-6 lg:p-20 lg:pl-10">
            <p className="text-xl mb-6 text-center lg:text-left">
              {t("josephTagline")}
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
              {t("josephPrice")}
            </p>
            <p className="text-white text-md text-center lg:text-left mb-2">
              <span className="text-red font-bold">
                + {t("josephAccessoryGratePrice")}
              </span>{" "}
              {t("josephAccessoryGrate")}
            </p>
            <p className="text-white text-md text-center lg:text-left mb-10">
              <span className="text-red font-bold">
                + {t("josephAccessoryCoverPrice")}
              </span>{" "}
              {t("josephAccessoryCover")}
            </p>
            <p className="mb-6 text-center lg:text-left">
              {t("josephParagraph1")}
            </p>
            <p className="mb-6 text-center lg:text-left">
              {t("josephParagraph2")}
            </p>
            <div className="mt-10 lg:mt-0 flex flex-col items-center justify-center lg:justify-start md:flex-row flex-nowrap gap-4 md:gap-10 mb-20 lg:mb-0">
              <div className="w-40">
                <Button link={t("linkEshopJoseph")} inverse={false} blank>
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
                <AiOutlineSafetyCertificate size={25} />
              </PropBox>
              <h2 className="text-center text-xl font-bold mb-8">
                {t("josephUSP1")}
              </h2>
              <p className="text-mutedtext-dark text-center">
                {t("josephUSP1Text")}
              </p>
            </div>
            {/* --------- USP 2  --------- */}
            <div className="w-full lg:w-1/3 flex flex-col items-center border-t lg:border-l lg:border-t-0 border-mutedtext-light py-10 lg:p-8">
              <PropBox name={""}>
                <PiCheckSquareOffset size={25} />
              </PropBox>
              <h2 className="text-center text-xl font-bold mb-8">
                {t("josephUSP2")}
              </h2>
              <p className="text-mutedtext-dark text-center">
                {t("josephUSP2Text")}       

            {/* --------- USP 3  --------- */}
            <div className="w-full lg:w-1/3 flex flex-col items-center border-t lg:border-l lg:border-t-0 border-mutedtext-light py-10 lg:p-8">
              <PropBox name={""}>
                <PiGear size={25} />
              </PropBox>
              <h2 className="text-center text-xl font-bold mb-8">
                {t("josephUSP3")}
              </h2>
              <p className="text-mutedtext-dark text-center">
                {t("josephUSP3Text")}
              </p>
            </div>
          </div>
          <h2 className="text-4xl font-bold leading-[1.25em] text-center md:text-left mb-8 -mt-4 ">
            {t("productParametersHeading")}
          </h2>
          <ProductParameter name={t("produtParameterHeight")} value="900 mm" />
          <ProductParameter
            name={t("produtParameterWidth")}
            value="740 mm"
            inverted
          />
          <ProductParameter
            name={t("productParameterSteelPlateThickness")}
            value="10 mm"
          />
          <ProductParameter
            name={t("productParameterMaterial")}
            value={t("productParameterStainlessSteel")}
            inverted
          />
          <ProductParameter name={t("productParameterWeight")} value="244 kg" />
          <ProductParameter
            name={t("productParameterWeightOfAccessoryGrate")}
            value="6 kg"
            inverted
          />
          <ProductParameter
            name={t("productParameterWeightOfAccessoryCover")}
            value="8 kg"
          />
        </section>
          <Gallery grillName={"Joseph"} portfolioItems={portfolio} />
        </main>
        <ContactFormSection />
      </div>
    </>
  );
};

export default JosephProductPage;
