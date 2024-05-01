import Button from "@/components/button";
import ContactFormSection from "@/components/contactFormSection";
import { Unbounded } from "next/font/google";
import Image from "next/image";

import { Metadata } from "next";

const unbounded = Unbounded({ subsets: ["latin"] });

interface ProductProps {
  name: string;
  image: string;
  price: string;
  link: string;
  eshopLink: string;
  children: React.ReactNode;
}

const ProductCard: React.FC<ProductProps> = ({
  name,
  image,
  price,
  link,
  eshopLink,
  children,
}) => {
  return (
    <div className="w-full md:w-2/5 xl:w-1/3 bg-[#ffffffa8] border border-mutedtext-light flex flex-col justify-between px-10 pt-8 pb-16">
      <div className="flex flex-col">
        <div className="h-28 lg:h-48 aspect-square relative mb-8">
          <Image
            src={"/img/products/grilyPage/" + image}
            alt={name}
            fill
            className="object-contain"
          />
        </div>

        <h2 className={"text-2xl font-bold mb-4 " + unbounded.className}>
          {name}
        </h2>
        <p className="text-sm text-mutedtext-dark mb-4">{children}</p>
      </div>
      <p className="text-red text-2xl font-bold mb-8">{price},-</p>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <Button link={eshopLink} inverse={false}>
            Do e-shopu &raquo;
          </Button>
          <Button link={link} inverse={true}>
            Dozvědět se více &raquo;
          </Button>
        </div>
      </div>
    </div>
  );
};

export const GrillsMetadata: Metadata = {
  title: "Naše grily | Joseph's",
  description:
    "Prozkoumejte naši kolekci prémiových grilů na Joseph's Grills. Od kompaktního grilu John, přes stylový gril Peter, až po exkluzivní model Joseph, najdete u nás gril pro každý venkovní prostor.",
  keywords:
    "prémiové grily, gril Joseph, gril Peter, gril John, venkovní grilování, grilovací příslušenství, Joseph's Grills, grily na prodej",
};

const GrillsPage = () => {
  return (
    <>
      <main className="max-w-[1200px] overflow-x-hidden mx-auto">
        <section className="min-h-[800px] bg-white overflow-x-hidden flex flex-col flex-nowrap justify-center items-center text-center pt-40 hero px-4 lg:px-0">
          <h1
            className={
              "text-6xl font-bold leading-[1.25em] mb-16 -mt-4 " +
              unbounded.className
            }
          >
            Naše grily
          </h1>
          <div className="flex flex-col md:flex-row flex-wrap xl:flex-nowrap gap-5 w-[80wv] xl:w-full lg:mb-40 justify-center">
            <ProductCard
              name="John"
              image="john.webp"
              link="/grily/john"
              eshopLink=""
              price="1 999"
            >
              Představujeme vám Johna, malý, ale mimořádně šikovný gril, který
              se stane vaším nezbytným společníkem na cestách.
            </ProductCard>
            <ProductCard
              name="Peter"
              image="peter.webp"
              link=""
              eshopLink=""
              price="8 200"
            >
              Peter transformuje každý venkovní prostor na místo plné tepla a
              pohody.
            </ProductCard>
            <ProductCard
              name="Joseph"
              image="joseph.webp"
              link=""
              eshopLink=""
              price="48 400"
            >
              Joseph je výsledkem vrcholové řemeslné zručnosti a navržen je pro
              ty, kteří od svého grilu očekávají nekompromisní kvalitu a výkon.
            </ProductCard>
          </div>
        </section>
      </main>
      <ContactFormSection />
    </>
  );
};

export default GrillsPage;
