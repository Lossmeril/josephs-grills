"use client";

import Image from "next/image";
import ImageModal from "./imageModal";
import { useState } from "react";
import { Unbounded } from "next/font/google";

import { Translation } from "@/data/types";

const unbounded = Unbounded({ subsets: ["latin"] });

interface GalleryItemProps {
  img: string;
  modalHandler: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ img, modalHandler }) => {
  return (
    <div
      className="w-full lg:w-1/4 aspect-[3/2] lg:aspect-square relative cursor-pointer overflow-hidden"
      onClick={modalHandler}
    >
      <Image
        className="hover:scale-110 transition-all object-cover"
        src={img}
        fill
        alt={img}
        loading="lazy"
        placeholder="blur"
        blurDataURL="/img/blur.png"
      />
    </div>
  );
};

interface GalleryProps {
  grillName: string;
  portfolioItems: string[];
  langPack: Translation;
}

const Gallery: React.FC<GalleryProps> = ({
  grillName,
  portfolioItems,
  langPack,
}) => {
  const [modalOpen, setModal] = useState(false);
  const [modalImage, setModalImage] = useState(portfolioItems[0]);

  const handleModalOpen = (newImage: string) => {
    setModal(true);
    setModalImage(newImage);
  };

  return (
    <>
      <section className="overflow-x-hidden flex flex-col flex-nowrap px-6 pb-16 lg:px-0 lg:py-10 mb-0 lg:mb-20">
        <h2
          className={
            "text-4xl lg:text-6xl font-bold leading-[1.25em] text-center mb-8 mt-20 lg:mt-0 " +
            unbounded.className
          }
        >
          {grillName + " " + langPack.productGalleryInAction}
        </h2>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col md:flex-row gap-4 ">
            <GalleryItem
              img={portfolioItems[0]}
              modalHandler={() => handleModalOpen(portfolioItems[0])}
            />
            <GalleryItem
              img={portfolioItems[1]}
              modalHandler={() => handleModalOpen(portfolioItems[1])}
            />
            <GalleryItem
              img={portfolioItems[2]}
              modalHandler={() => handleModalOpen(portfolioItems[2])}
            />
            <GalleryItem
              img={portfolioItems[3]}
              modalHandler={() => handleModalOpen(portfolioItems[3])}
            />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 ">
            <GalleryItem
              img={portfolioItems[4]}
              modalHandler={() => handleModalOpen(portfolioItems[4])}
            />
            <GalleryItem
              img={portfolioItems[5]}
              modalHandler={() => handleModalOpen(portfolioItems[5])}
            />
            <GalleryItem
              img={portfolioItems[6]}
              modalHandler={() => handleModalOpen(portfolioItems[6])}
            />
            <GalleryItem
              img={portfolioItems[7]}
              modalHandler={() => handleModalOpen(portfolioItems[7])}
            />
          </div>
        </div>
      </section>
      <ImageModal
        isOpen={modalOpen}
        modalToggle={setModal}
        image={modalImage}
      />
    </>
  );
};

export default Gallery;
