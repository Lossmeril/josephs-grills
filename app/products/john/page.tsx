"use client";

import Button from "@/components/button";
import { Unbounded } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";

const unbounded = Unbounded({ subsets: ["latin"] });

const JohnProductPage = () => {
  const [currentImg, setCurrentImg] = useState(2);

  return (
    <main className="max-w-[1200px] overflow-x-hidden mx-auto">
      <section className="min-h-screen bg-white overflow-x-hidden flex flex-row flex-nowrap pt-20">
        <div className="w-1/2 p-20 pr-10">
          <div className="relative overflow-hidden w-full aspect-[3/4] bg-[#dedede] ml-auto mb-8">
            <Image
              src={"/img/products/placeholder" + currentImg + ".jpg"}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-row flex-nowrap w-full h-28 gap-4 mb-8">
            <div
              className="w-1/4 relative overflow-hidden bg-red"
              onMouseOver={() => setCurrentImg(1)}
            >
              <Image
                src="/img/products/placeholder1.jpg"
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
                onMouseOver={() => setCurrentImg(2)}
              />
            </div>
            <div className="w-1/4 relative overflow-hidden bg-red">
              <Image
                src="/img/products/placeholder3.jpg"
                alt=""
                fill
                className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                onMouseOver={() => setCurrentImg(3)}
              />
            </div>
            <div className="w-1/4 relative overflow-hidden bg-red">
              <Image
                src="/img/products/placeholder4.jpg"
                alt=""
                fill
                className="object-cover hover:opacity-50 hover:cursor-pointer transition-all"
                onMouseOver={() => setCurrentImg(4)}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 p-20 pl-10">
          <p className="text-xl mb-6">Lorem Ipsum</p>
          <h1
            className={
              "text-6xl font-bold leading-[1.25em] mb-8 -mt-4 " +
              unbounded.className
            }
          >
            John
          </h1>
          <p className="text-red text-2xl font-bold mb-4">12 000,-</p>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <div className="w-40">
            <Button link={""} inverse={false}>
              Do e-shopu &raquo;
            </Button>
          </div>
        </div>
      </section>
      <section className="border-t border-[#ededed] bg-white overflow-x-hidden flex flex-col flex-nowrap p-20">
        <h2 className="text-4xl font-bold leading-[1.25em] mb-8 -mt-4 ">
          Popisek
        </h2>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac massa eget urna tempor vehicula vel id nisi. Pellentesque sed felis
          auctor, molestie lectus vitae, elementum orci. In et nunc consequat,
          semper tellus eget, euismod quam.
        </p>
        <p className="mb-6">
          Pellentesque magna arcu, lacinia sed mi non, pretium posuere eros.
          Mauris maximus imperdiet sem aliquam facilisis. Nam in sem at augue
          finibus vehicula eget quis sapien. Pellentesque malesuada ligula vel
          auctor facilisis. In condimentum mattis ornare.
        </p>
      </section>
      <section className="border-t border-[#ededed] bg-white overflow-x-hidden flex flex-col flex-nowrap p-20">
        <h2 className="text-4xl font-bold leading-[1.25em] mb-8 -mt-4 ">
          Parametry
        </h2>
      </section>
    </main>
  );
};

export default JohnProductPage;
