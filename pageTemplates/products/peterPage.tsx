"use client";

import React, { useState } from "react";
import Image from "next/image";

import Button from "@/components/button";
import ContactFormSection from "@/components/contactFormSection";
import { PropBox } from "@/components/homeProduct";
import Gallery from "@/components/product/gallery";
import ProductParameter from "@/components/product/productParameters";
import { PageProps } from "@/data/types";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import { PiSparkle } from "react-icons/pi";
import { RxRulerSquare } from "react-icons/rx";
import { SlFire } from "react-icons/sl";

import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"] });

const portfolio: Array<string> = [
  "/img/products/peter/gallery/peter-photo-1.jpg",
  "/img/products/peter/gallery/peter-photo-2.jpg",
  "/img/products/peter/gallery/peter-photo-3.jpg",
  "/img/products/peter/gallery/peter-photo-4.jpg",
  "/img/products/peter/gallery/peter-photo-5.jpg",
  "/img/products/peter/gallery/peter-photo-6.jpg",
  "/img/products/peter/gallery/peter-photo-7.jpg",
  "/img/products/peter/gallery/peter-photo-8.jpg",
];

const PeterProductPage: React.FC<PageProps> = ({ langPack }) => {
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
              {langPack.peterTagline}
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
              {langPack.peterPrice}
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
              {langPack.peterParagraph1}
            </p>
            <p className="mb-6 text-center lg:text-left">
              {langPack.peterParagraph2}
            </p>
            <div className="mt-10 lg:mt-0 flex flex-col items-center justify-center lg:justify-start md:flex-row flex-nowrap gap-4 md:gap-10 mb-20 lg:mb-0">
              <div className="w-40">
                <Button link={langPack.linkEshopPeter} inverse={false} blank>
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
                <RxRulerSquare size={25} />
              </PropBox>
              <h2 className="text-center text-xl font-bold mb-8">
                {langPack.peterUSP1}
              </h2>
              <p className="text-mutedtext-dark text-center">
                {langPack.peterUSP1Text}
              </p>
            </div>
            {/* --------- USP 2  --------- */}
            <div className="w-full lg:w-1/3 flex flex-col items-center border-t lg:border-l lg:border-t-0 border-mutedtext-light py-10 lg:p-8">
              <PropBox name={""}>
                <PiSparkle size={25} />
              </PropBox>
              <h2 className="text-center text-xl font-bold mb-8">
                {langPack.peterUSP2}
              </h2>
              <p className="text-mutedtext-dark text-center">
                {langPack.peterUSP2Text}
              </p>
            </div>
            {/* --------- USP 3  --------- */}
            <div className="w-full lg:w-1/3 flex flex-col items-center border-t lg:border-l lg:border-t-0 border-mutedtext-light py-10 lg:p-8">
              <PropBox name={""}>
                <SlFire size={25} />
              </PropBox>
              <h2 className="text-center text-xl font-bold mb-8">
                {langPack.peterUSP3}
              </h2>
              <p className="text-mutedtext-dark text-center">
                {langPack.peterUSP3Text}
              </p>
            </div>
          </div>
          <h2 className="text-4xl font-bold leading-[1.25em] text-center md:text-left mb-8 -mt-4 ">
            Parametry
          </h2>
          <ProductParameter
            name={langPack.productParameterDimensions}
            value="743 × 743 × 331 mm"
          />
          <ProductParameter
            name={langPack.productParameterMaterial}
            value={langPack.productParameterBlackSteel}
            inverted
          />
          <ProductParameter
            name={langPack.productParameterWeight}
            value="36 kg"
          />
        </section>

        <div className="mx-auto md:w-2/3 mb-0 lg:mb-8">
          <LiteYouTubeEmbed
            id="EYv6Vori7Zo"
            title="Peter Grill video"
            thumbnail="/img/video-thumbs/peter-thumb.webp"
          />
        </div>

        <Gallery
          grillName={"Peter"}
          portfolioItems={portfolio}
          langPack={langPack}
        />
      </main>
      <ContactFormSection langPack={langPack} />
    </div>
  );
};

export default PeterProductPage;
