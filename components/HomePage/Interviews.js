"use client";
import React from "react";
import Link from "next/link";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Plus } from "lucide-react";

const data = [
  {
    src: "/images/testimonials-1.jpg",
    title: "Sophie's story",
    description: "Grade 10 Student",
    color: "#3bbbfb",
  },
  {
    src: "/images/testimonials-2.jpg",
    title: "Thomas's story",
    description: "Grade 12 Student",
    color: "#ffc621",
  },
  {
    src: "/images/testimonials-3.jpg",
    title: "Gürcan's story",
    description: "Primary School Teacher",
    color: "#ff0909",
  },
  {
    src: "/images/testimonials-4.jpg",
    title: "Anna's story",
    description: "Parent",
    color: "#3ea340",
  },
];
const Interviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="relative wrapper">
      <section className="embla h-auto w-full">
        <div className="font-semibold flex justify-center lg:justify-end items-center lg:-translate-y-full mb-10 lg:mb-0 lg:invisible">
          <div className="embla__controls">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>

        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container ">
            {data.map((post, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <div className="w-full h-full relative overflow-hidden rounded-t-xl">
                    <Image
                      src={post.src}
                      fill
                      alt="testimonial-videos"
                      className="h-full w-full object-cover"
                    />
                    <div className="bg-foreground/50 absolute top-0 left-0 right-0 bottom-0  text-background cursor-pointer">
                      <di className="translate-y-28 hover:translate-y-0 transition-all duration-500 h-full w-full flex flex-col justify-end">
                        <div className="px-6 mb-10">
                          <h4 className="text-3xl mb-2 font-semibold">
                            {post.title}
                          </h4>
                          <p className="text-base font-light mb-10">
                            {post.description}
                          </p>
                          <div
                            className="text-background h-16 w-16 rounded-full p-2 flex-center"
                            style={{ backgroundColor: post.color }}
                          >
                            <Plus size={32} />
                          </div>
                        </div>
                      </di>
                    </div>
                    <span
                      className="h-3 absolute bottom-0 left-0 right-0"
                      style={{ backgroundColor: post.color }}
                    ></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Interviews;
