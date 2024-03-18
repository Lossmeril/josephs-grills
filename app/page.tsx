"use client";

import HomeProduct from "@/components/homeProduct";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <main className="max-w-screen overflow-x-hidden">
        <section className="h-screen bg-white overflow-x-hidden">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[750px] aspect-video z-30">
            <Image
              src="/img/logo-full-color-inv.png"
              alt="Fresh Lobster logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="h-full w-full bg-black absolute top-0 left-0 z-20 opacity-50"></div>
          <video
            autoPlay
            loop
            muted
            id="heroVideo"
            className="h-screen w-screen object-cover z-10"
          >
            <source src="/video/placeholder.webm" type="video/webm" />
          </video>
        </section>

        <section className="h-[65vh] bg-white section-2 relative flex flex-col justify-center items-center">
          <div
            id="square"
            className="bg-white w-40 h-40 absolute top-[20%] left-[50%] translate-x-[-50%] scale-100 rotate-45 z-0"
          ></div>
          <div className="text-center z-10 w-[40vw]">
            <div className="relative w-10 h-10 mx-auto mb-6">
              <Image
                src="/img/favicon.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl mb-6">Joseph&apos;s</h2>
            <p className="text-5xl font-bold leading-[1.25em] mb-6">
              If you&apos;re looking for a brand new electric scooter,
              you&apos;re in the right place
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
        </section>

        <section className="h-screen bg-white border-t border-[#ededed] section-3 relative flex flex-col justify-center items-center">
          <HomeProduct
            name="Peter"
            tagline="Váš parťák na grilování na cestách"
          />
        </section>
      </main>
    </>
  );
};

export default HomePage;
