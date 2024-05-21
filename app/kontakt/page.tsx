"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Inter, Unbounded } from "next/font/google";
import { IoMdPin } from "react-icons/io";
import { MdEmail, MdPhone } from "react-icons/md";
import Button from "@/components/button";
import { useTranslation } from "react-i18next";

const inter = Inter({ subsets: ["latin"] });
const unbounded = Unbounded({ subsets: ["latin"] });

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <main className="max-w-[1200px] overflow-x-hidden mx-auto">
      <section className="min-h-[500px] bg-white overflow-x-hidden pt-20 flex flex-col justify-center items-center hero">
        <div className="w-3/5 text-center relative">
          <h1
            className={
              "text-6xl font-bold leading-[1.25em] mb-8 -mt-4 z-20 " +
              unbounded.className
            }
          >
            {t("contactHeroTitle")}
          </h1>
          <div className="bg-orange opacity-25 h-10 absolute top-[10%] z-0"></div>
          <p className="text-xl mb-6">{t("contactHeroSubtitle")}</p>
        </div>
      </section>
      <section className="min-h-[800px] py-5 bg-white overflow-x-hidden flex flex-col lg:flex-row flex-nowrap justify-center items-center gap-40 text-center ">
        <div className="flex flex-col xl:flex-row flex-nowrap w-full">
          <div className="w-full xl:w-2/5 p-10 px-20 flex flex-col flex-nowrap gap-5">
            <div className="flex flex-row flex-nowrap justify-start gap-5">
              <MdPhone size={25} />
              <p className="text-lg text-left">
                <a href="tel:'+420606727976'" className="link">
                  +420 606 727 976
                </a>
              </p>
            </div>

            <div className="flex flex-row flex-nowrap justify-start gap-5">
              <MdEmail size={25} />

              <p className="text-lg text-left">
                <a href="mailto:'info@josephsgrills.cz'" className="link">
                  info<span className={inter.className}>@</span>
                  josephsgrills.cz
                </a>
              </p>
            </div>

            <div className="flex flex-row flex-nowrap justify-start gap-5">
              <IoMdPin size={25} />
              <p className="text-lg text-left">
                Na Pilníku 292,
                <br />
                789 91 Štíty
                <br />
                {t("czechRepublic")}
              </p>
            </div>
            <div
              id="#terms-of-service-gdpr"
              className="mt-5 flex flex-col gap-5 max-w-80"
            >
              <Button link={t("linkTermsAndConditions")} inverse={false} blank>
                {t("termsLink")} &raquo;
              </Button>

              <Button link={t("linkGDPR")} inverse={false} blank>
                {t("GDPRLink")} &raquo;
              </Button>

              <Button link={t("linkCertification")} inverse={false} blank>
                {t("certificationLink")} &raquo;
              </Button>
            </div>
          </div>
          <div className="bg-white w-full xl:w-3/5 m-4 text-left">
            <h2
              className={
                "text-3xl mt-10 md:mt-0 mb-6 font-bold text-left pl-[10px] " +
                unbounded.className
              }
            >
              {t("contactSectionFormTitle")}
            </h2>
            <iframe
              title={t("contactIframeTitle")}
              className="w-full min-h-[80vh]"
              src={t("contactIframeSrc")}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
