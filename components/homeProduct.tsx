import Image from "next/image";
import Button from "./button";

import { Unbounded } from "next/font/google";
import { MutableRefObject } from "react";

const unbounded = Unbounded({ subsets: ["latin"] });

interface InfoBoxProps {
  value: string;
  unit: string;
  property: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ value, unit, property }) => {
  return (
    <div className="flex flex-col flex-nowrap justify-center items-center border border-[#dedede] border-solid p-5 w-24 aspect-square">
      <p className="text-3xl font-bold -mb-2">{value}</p>
      <p className="text-lg font-bold mb-1">{unit}</p>
      <p className="text-xs uppercase">{property}</p>
    </div>
  );
};

interface PropBoxProps {
  name: string;
  children: React.ReactNode;
}

const PropBox: React.FC<PropBoxProps> = ({ name, children }) => {
  return (
    <div className="flex flex-col flex-nowrap w-1/3 justify-between items-center">
      <div className="border border-[#dedede] rounded-full w-full aspect-square flex justify-center items-center mb-5 text-orange">
        {children}
      </div>
      <h3 className="text-center font-bold leading-none text-mutedtext-dark">
        {name}
      </h3>
    </div>
  );
};

interface HomeProductProps {
  name: string;
  tagline: string;
  weight: string;
  height: string;
  length: string;

  price: string;

  pageLink: string;
  eshopLink: string;

  image: string;

  prop1: string;
  prop1Icon: React.ReactNode;

  prop2: string;
  prop2Icon: React.ReactNode;

  prop3: string;
  prop3Icon: React.ReactNode;

  leftRef: MutableRefObject<null>;
  rightRef: MutableRefObject<null>;

  children: string | JSX.Element | JSX.Element[];
}

const HomeProduct: React.FC<HomeProductProps> = ({
  name,
  tagline,
  weight,
  height,
  length,
  price,
  pageLink,
  eshopLink,
  image,
  prop1,
  prop1Icon,
  prop2,
  prop2Icon,
  prop3,
  prop3Icon,
  leftRef,
  rightRef,
  children,
}) => {
  return (
    <>
      {/* MOBILE */}
      <div className="flex xl:hidden min-h-screen bg-white border-t border-[#ededed] relative flex-col justify-center items-center text-center ">
        {/* PRVNÍ SEKCE */}
        <div
          className="flex flex-col flex-nowrap w-full h-full items-center text-center px-10 py-20 "
          ref={leftRef}
        >
          <p className="text-xl mb-6">{tagline}</p>
          <h2
            className={
              "text-6xl font-bold leading-[1.25em] -mt-6 mb-4 uppercase " +
              unbounded.className
            }
          >
            {name}
          </h2>
          <p className="text-red text-2xl font-bold mb-6">{price}</p>

          <div className="relative z-30 overflow-visible my-6">
            <Image
              src={"/img/products/" + image}
              alt=""
              width={450}
              height={450}
              className="z-30"
            />
          </div>

          <p className="text-md text-mutedtext-dark leading-relaxed">
            {children}
          </p>

          <div className="flex flex-row flex-nowrap gap-5 mt-10">
            <InfoBox value={weight} unit="kg" property="hmotnost" />
            <InfoBox value={height} unit="cm" property="výška" />
            <InfoBox value={length} unit="cm" property="šířka/délka" />
          </div>

          <div className="flex flex-row flex-nowrap gap-5 mt-10">
            <Button link={pageLink} inverse={false}>
              Více informací &raquo;
            </Button>
            <Button link={eshopLink} inverse={true}>
              Do e-shopu &raquo;
            </Button>
          </div>

          <div className="flex flex-row flex-nowrap justify-center gap-8 mt-10">
            <PropBox name={prop1}>{prop1Icon}</PropBox>
            <PropBox name={prop2}>{prop2Icon}</PropBox>
            <PropBox name={prop3}>{prop3Icon}</PropBox>
          </div>
        </div>
      </div>

      {/* XL DESKTOP */}
      <div className="hidden xl:flex min-h-screen bg-white border-t border-[#ededed] section-3 relative flex-col justify-center items-center ">
        <div className="flex flex-col flex-nowrap justify-start">
          <div className="flex flex-row flex-nowrap items-center w-[1340px] h-[70vh]">
            {/* PRVNÍ SLOUPEC */}
            <div
              className="flex flex-col flex-nowrap w-1/3 h-full items-start py-20 opacity-0"
              ref={leftRef}
            >
              <p className="text-2xl mb-6">{tagline}</p>
              <h2
                className={
                  "text-6xl font-bold leading-[1.25em] mb-4 -mt-6 uppercase " +
                  unbounded.className
                }
              >
                {name}
              </h2>
              <p className="text-red text-2xl font-bold mb-12">{price}</p>
              <div className="flex flex-row flex-nowrap gap-5">
                <InfoBox value={weight} unit="kg" property="hmotnost" />
                <InfoBox value={height} unit="cm" property="výška" />
                <InfoBox value={length} unit="cm" property="šířka/délka" />
              </div>
              <div className="flex flex-row flex-nowrap gap-5 mt-10">
                <Button link={pageLink} inverse={false}>
                  Více informací &raquo;
                </Button>
                <Button link={eshopLink} inverse={true}>
                  Do e-shopu &raquo;
                </Button>
              </div>
            </div>

            {/* DRUHÝ SLOUPEC */}
            <div className="relative w-1/3 h-full z-30 flex flex-col justify-end overflow-visible">
              <Image
                src={"/img/products/" + image}
                alt=""
                width={450}
                height={450}
                className="z-30 w-[450px] h-[450px]"
              />
            </div>

            {/* TŘETÍ SLOUPEC */}
            <div
              className="flex flex-col flex-nowrap w-1/3 pl-40 opacity-0"
              ref={rightRef}
            >
              <p className="text-md text-mutedtext-dark leading-relaxed mb-6">
                {children}
              </p>
              <div className="flex flex-row flex-nowrap justify-center gap-6 mt-10">
                <PropBox name={prop1}>{prop1Icon}</PropBox>
                <PropBox name={prop2}>{prop2Icon}</PropBox>
                <PropBox name={prop3}>{prop3Icon}</PropBox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProduct;
