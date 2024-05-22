import Image from "next/image";
import Button from "./button";

import { Unbounded } from "next/font/google";
import { MutableRefObject } from "react";
import { useTranslation } from "react-i18next";

const unbounded = Unbounded({ subsets: ["latin"] });

interface InfoBoxProps {
  value: string;
  unit: string;
  property: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ value, unit, property }) => {
  return (
    <div className="flex flex-col flex-nowrap justify-center items-center border border-mutedtext-light border-solid p-2 w-32 aspect-square">
      <p className="text-3xl font-bold -mb-2">{value}</p>
      <p className="text-lg font-bold mb-1">{unit}</p>
      <p className="text-xs uppercase">{property}</p>
    </div>
  );
};

interface PropBoxProps {
  name: string;
  inv?: boolean;
  children: React.ReactNode;
}

export const PropBox: React.FC<PropBoxProps> = ({ name, inv, children }) => {
  return (
    <div className="flex flex-col flex-nowrap w-1/3 min-w-1/3 justify-start items-center">
      <div
        className={
          "border  rounded-full w-full max-w-20 aspect-square flex justify-center items-center mb-5 text-orange " +
          (!inv ? "border-mutedtext-light" : "border-mutedtext-dark")
        }
      >
        {children}
      </div>
      <h3
        className={
          "text-sm text-center font-bold leading-none " +
          (!inv ? "text-mutedtext-dark" : "text-mutedtext-light")
        }
      >
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

  descHeading: string;
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
  descHeading,
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
  const { t } = useTranslation();
  return (
    <>
      {/* MOBILE */}
      <div className="flex xl:hidden min-h-screen bg-white border-t border-mutedtext-light relative flex-col justify-center items-center text-center ">
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
              src={"/img/products/" + image + "-mobile.webp"}
              alt=""
              width={450}
              height={450}
              className="z-30"
            />
          </div>

          <h3 className="text-lg font-bold mb-4">{descHeading}</h3>
          <p className="text-md text-mutedtext-dark leading-relaxed">
            {children}
          </p>

          <div className="flex flex-row flex-nowrap gap-5 mt-10">
            <InfoBox value={weight} unit="kg" property="hmotnost" />
            <InfoBox value={height} unit="cm" property="výška" />
            <InfoBox value={length} unit="cm" property="šířka/délka" />
          </div>

          <div className="flex flex-col lg:flex-row flex-nowrap gap-5 mt-10">
            <Button link={eshopLink} inverse={false}>
              {t("buttonEshop")} &raquo;
            </Button>
            <Button link={pageLink} inverse={true}>
              {t("buttonMoreInfo")} &raquo;
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
      <div className="hidden xl:flex min-h-screen bg-white border-t border-mutedtext-light section-3 relative flex-col justify-center items-center ">
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
              <div className="flex flex-row flex-nowrap gap-3">
                <InfoBox
                  value={weight}
                  unit="kg"
                  property={t("indexGrillWeight")}
                />
                <InfoBox
                  value={height}
                  unit="cm"
                  property={t("indexGrillHeight")}
                />
                <InfoBox
                  value={length}
                  unit="cm"
                  property={t("indexGrillLength")}
                />
              </div>
              <div className="flex flex-row flex-nowrap gap-5 mt-10">
                <Button link={eshopLink} inverse={false} blank>
                  {t("buttonEshop")} &raquo;
                </Button>
                <Button link={pageLink} inverse={true}>
                  {t("buttonMoreInfo")} &raquo;
                </Button>
              </div>
            </div>

            {/* DRUHÝ SLOUPEC */}
            <div className="relative w-1/3 h-full z-30 flex flex-col justify-end overflow-visible">
              <Image
                src={"/img/products/" + image + ".webp"}
                alt=""
                width={450}
                height={450}
                className="z-30 w-auto h-auto"
              />
            </div>

            {/* TŘETÍ SLOUPEC */}
            <div
              className="flex flex-col flex-nowrap w-1/3 pl-40 opacity-0"
              ref={rightRef}
            >
              <h3 className="text-lg font-bold mb-4">{descHeading}</h3>
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
