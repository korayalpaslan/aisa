"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import {
  NextButtonNews,
  PrevButtonNews,
} from "./EmblaCarouselArrowButtonsNews";

export default function News() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const posts = [
    {
      id: 1,
      title: "Excelence Shaped by People",
      date: "10.10.2025",
      description:
        "At the American International School of Alanya, excellence is shaped by people. With more than 70% of its budget to staffing, AISA ensures students learn from highly qualified, internationally experienced educators who bring learning to life.",
    },
    {
      id: 2,
      title: "AISA’s Commitment to CPR and First Aid",
      date: "02.10.2025",
      description:
        "At the American International School of Alanya, excellence is shaped by people. With more than 70% of its budget to staffing, AISA ensures students learn from highly qualified, internationally experienced educators who bring learning to life.",
    },
    {
      id: 3,
      title: "AISA Arts: A Year of Learning,Creativity, and Collaboration",
      date: "18.09.2025",
      description:
        "At the American International School of Alanya, excellence is shaped by people. With more than 70% of its budget to staffing, AISA ensures students learn from highly qualified, internationally experienced educators who bring learning to life.",
    },
    {
      id: 4,
      title: "More Than Tropies: A Year of Growth, Friendship, and Lion Pride",
      date: "10.09.2025",
      description:
        "At the American International School of Alanya, excellence is shaped by people. With more than 70% of its budget to staffing, AISA ensures students learn from highly qualified, internationally experienced educators who bring learning to life.",
    },
  ];
  return (
    <div>
      <div className="wrapper py-20">
        <h1 className="font-serif text-4xl lg:text-5xl text-center mb-5">
          Latest News
        </h1>
        <div className="space-x-10 hidden lg:flex py-10">
          <div className="w-1/2 flex flex-col space-y-5">
            <div>
              <Image
                src={`/images/${posts.at(0).id}.jpg`}
                width={1000}
                height={1000}
                alt="news"
                className="h-[300px] object-cover rounded-md"
              />
            </div>
            <div>
              <span className="text-gray-500 text-sm font-semibold mb-2">
                {posts.at(0).date}
              </span>
              <h1 className="text-2xl font-semibold mb-2">
                {posts.at(0).title}
              </h1>
              <p className="text-sm mb-6"> {posts.at(0).description}</p>
              <div>
                <button className="bg-aisa-yellow px-6 py-2 rounded-4xl font-semibold text-foreground text-sm">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col space-y-10">
            {posts.slice(1).map((post, i) => {
              return (
                <div key={post.id} className="flex space-x-2">
                  <div className="w-1/3">
                    <Image
                      src={`/images/${post.id}.jpg`}
                      width={500}
                      height={500}
                      alt="news"
                      className="w-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <span className="text-gray-500 text-sm font-semibold mb-2">
                      {post.date}
                    </span>
                    <h2 className="font-semibold">{post.title}</h2>
                    <div className="mt-auto text-sm">
                      <button className="flex items-center space-x-1">
                        <span>Read More </span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:hidden">
          <section className="embla h-auto w-full">
            <div className="font-semibold flex justify-center lg:justify-end items-center lg:-translate-y-full mb-10 lg:mb-0">
              <div className="embla__controls">
                <PrevButtonNews
                  onClick={onPrevButtonClick}
                  disabled={prevBtnDisabled}
                />
                <NextButtonNews
                  onClick={onNextButtonClick}
                  disabled={nextBtnDisabled}
                />
              </div>
            </div>

            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container ">
                {posts.map((post, index) => (
                  <div className="embla__slide" key={index}>
                    <div className="embla__slide__number">
                      <Image
                        src={`/images/${post.id}.jpg`}
                        width={500}
                        height={500}
                        alt="news"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="flex flex-col mt-2 mb-10">
                      <div className="py-2 flex justify-between">
                        <span className="text-base text-gray-500">
                          {" "}
                          {post.date}
                        </span>
                      </div>

                      <h2 className="py-3 font-semibold text-2xl">
                        {" "}
                        {post.title}
                      </h2>
                      <p className="pb-3 text-base">{post.description}</p>
                      <div></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
