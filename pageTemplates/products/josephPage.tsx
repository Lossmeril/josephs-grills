"use client";

import Button from "@/components/button";
import ContactFormSection from "@/components/contactFormSection";
import { PropBox } from "@/components/homeProduct";
import Gallery from "@/components/product/gallery";
import ProductParameter from "@/components/product/productParameters";
import { PageProps } from "@/data/types";
import { Unbounded } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { PiCheckSquareOffset, PiGear } from "react-icons/pi";

const unbounded = Unbounded({ subsets: ["latin"] });

const portfolio: Array<string> = [
  "/img/products/joseph/gallery/joseph-photo-1.jpg",
  "/img/products/joseph/gallery/joseph-photo-2.jpg",
  "/img/products/joseph/gallery/joseph-photo-3.jpg",
  "/img/products/joseph/gallery/joseph-photo-4.jpg",
  "/img/products/joseph/gallery/joseph-photo-5.jpg",
  "/img/products/joseph/gallery/joseph-photo-6.jpg",
  "/img/products/joseph/gallery/joseph-photo-7.jpg",
  "/img/products/joseph/gallery/joseph-photo-8.jpg",
];

const JosephProductPage: React.FC<PageProps> = ({ langPack }) => {
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
              {langPack.josephTagline}
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
              {langPack.josephPrice}
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
            <p className="text-white text-md text-center lg:text-left mb-2">
              <span className="text-red font-bold">
                + {langPack.josephAccessoryGratePrice}
              </span>{" "}
              {langPack.josephAccessoryGrate}
            </p>
            <p className="text-white text-md text-center lg:text-left mb-10">
              <span className="text-red font-bold">
                + {langPack.josephAccessoryCoverPrice}
              </span>{" "}
              {langPack.josephAccessoryCover}
            </p>
            <p className="mb-6 text-center lg:text-left">
              {langPack.josephParagraph1}
            </p>
            <p className="mb-6 text-center lg:text-left">
              {langPack.josephParagraph2}
            </p>
            <div className="mt-10 lg:mt-0 flex flex-col items-center justify-center lg:justify-start md:flex-row flex-nowrap gap-4 md:gap-10 mb-20 lg:mb-0">
              <div className="w-40">
                <Button link={langPack.linkEshopJoseph} inverse={false} blank>
                  {langPack.buttonEshop} &raquo;
                </Button>
              </div>
              <div className="w-40">
                <Button link={langPack.navbarGrillsURL} inverse={true}>
                  {langPack.buttonOurGrills} &raquo;
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
                {langPack.josephUSP1}
              </h2>
              <p className="text-mutedtext-dark text-center">
                {langPack.josephUSP1Text}
              </p>
            </div>
            {/* --------- USP 2  --------- */}
            <div className="w-full lg:w-1/3 flex flex-col items-center border-t lg:border-l lg:border-t-0 border-mutedtext-light py-10 lg:p-8">
              <PropBox name={""}>
                <PiCheckSquareOffset size={25} />
              </PropBox>
              <h2 className="text-center text-xl font-bold mb-8">
                {langPack.josephUSP2}
              </h2>
              <p className="text-mutedtext-dark text-center">
                {langPack.josephUSP2Text}
              </p>
            </div>
            {/* --------- USP 3  --------- */}
            <div className="w-full lg:w-1/3 flex flex-col items-center border-t lg:border-l lg:border-t-0 border-mutedtext-light py-10 lg:p-8">
              <PropBox name={""}>
                <PiGear size={25} />
              </PropBox>
              <h2 className="text-center text-xl font-bold mb-8">
                {langPack.josephUSP3}
              </h2>
              <p className="text-mutedtext-dark text-center">
                {langPack.josephUSP3Text}
              </p>
            </div>
          </div>

          <h2 className="text-4xl font-bold leading-[1.25em] text-center md:text-left mb-8 -mt-4 ">
            {langPack.productParametersHeading}
          </h2>
          <ProductParameter
            name={langPack.produtParameterHeight}
            value="900 mm"
          />
          <ProductParameter
            name={langPack.produtParameterWidth}
            value="740 mm"
            inverted
          />
          <ProductParameter
            name={langPack.productParameterSteelPlateThickness}
            value="10 mm"
          />
          <ProductParameter
            name={langPack.productParameterMaterial}
            value={langPack.productParameterStainlessSteelJoseph}
            inverted
          />
          <ProductParameter
            name={langPack.productParameterWeight}
            value="244 kg"
          />
          <ProductParameter
            name={langPack.productParameterWeightOfAccessoryGrate}
            value="6 kg"
            inverted
          />
          <ProductParameter
            name={langPack.productParameterWeightOfAccessoryCover}
            value="8 kg"
          />
        </section>
        <div className="mx-auto md:w-2/3 mb-0 lg:mb-8">
          <LiteYouTubeEmbed id="jjZAsEWx_Ps" title="Joseph Grill video" />
        </div>

        <Gallery
          grillName={"Joseph"}
          portfolioItems={portfolio}
          langPack={langPack}
        />
      </main>
      <ContactFormSection langPack={langPack} />
    </div>
  );
};

export default JosephProductPage;
