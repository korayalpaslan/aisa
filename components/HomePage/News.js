"use client";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import {
  NextButtonNews,
  PrevButtonNews,
} from "./EmblaCarouselArrowButtonsNews";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import { localizedDate } from "@/lib/localizedDate";

export default function News({ news }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const firstNews = news.at(0);

  return (
    <div>
      <div className="wrapper py-20">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px 0px", once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-4xl lg:text-5xl text-center mb-5"
        >
          Latest News
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px 0px", once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-x-10 hidden lg:flex py-10"
        >
          <div className="w-1/2 flex flex-col space-y-5">
            <div>
              <Image
                src={urlFor(firstNews.titleImage).width(1000).quality(80).url()}
                width={1000}
                height={1000}
                alt="news"
                className="h-[300px] object-cover rounded-md"
              />
            </div>
            <div>
              <span className="text-gray-500 text-sm font-semibold mb-2">
                {localizedDate(news.at(0).newsDate)}
              </span>
              <h1 className="text-2xl font-semibold mb-2">
                {news.at(0).title}
              </h1>
              <p className="text-sm mb-6"> {news.at(0).description}</p>
              <div>
                <button className="bg-aisa-yellow px-6 py-2 rounded-4xl font-semibold text-foreground text-sm">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col space-y-10">
            {news.slice(1).map((post, i) => {
              return (
                <div key={i} className="flex space-x-2">
                  <div className="w-1/3">
                    <Image
                      src={urlFor(post.titleImage)
                        .width(1000)
                        .quality(80)
                        .url()}
                      width={500}
                      height={500}
                      alt="news"
                      className="w-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="text-gray-600 text-sm mb-1">
                      {" "}
                      {localizedDate(post.newsDate)}
                    </p>
                    <h2 className="font-semibold md:w-2/3">{post.title}</h2>
                    <div className="mt-4 text-sm">
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px 0px", once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:hidden"
        >
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
                {news.map((post, index) => (
                  <div className="embla__slide" key={index}>
                    <div className="embla__slide__number">
                      <Image
                        src={urlFor(post.titleImage)
                          .width(1000)
                          .quality(80)
                          .url()}
                        width={500}
                        height={500}
                        alt="news"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="flex flex-col mt-2 mb-10">
                      {/* <div className="py-2 flex justify-between">
                        <span className="text-base text-gray-500">
                          {" "}
                          {post.date}
                        </span>
                      </div> */}

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
        </motion.div>
      </div>
    </div>
  );
}
