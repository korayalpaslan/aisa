"use client";
import useEmblaCarousel from "embla-carousel-react";
import { Plus } from "lucide-react";
import Image from "next/image";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

const data = [
  {
    src: "/images/images.png",
    title: "Library",
  },
  {
    src: "/images/images.png",
    title: "Sport Center",
  },
  {
    src: "/images/images.png",
    title: "Classrooms",
  },
  {
    src: "/images/images.png",
    title: "Dinning Area",
  },
  {
    src: "/images/images.png",
    title: "Classrooms",
  },
  {
    src: "/images/images.png",
    title: "Sport Center",
  },
];
const Campus = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="relative wrapper">
      <section className="embla h-auto w-full campus">
        <div className="font-semibold flex justify-center lg:justify-end items-center lg:-translate-y-full mb-10 lg:mb-0">
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

        <div className="embla__viewport pb-20" ref={emblaRef}>
          <div className="embla__container ">
            {data.map((post, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <div className="w-full h-full relative overflow-hidden rounded-md campus">
                    <Image
                      src={post.src}
                      fill
                      alt="testimonial-videos"
                      className="h-full w-full object-cover"
                    />
                    <div className="group/parent bg-foreground/50 hover:bg-foreground/20 transition-all duration-500 absolute top-0 left-0 right-0 bottom-0  text-background cursor-pointer">
                      <div className="group/child translate-y-28 hover:translate-y-0 transition-all duration-500 h-full w-full flex flex-col justify-end"></div>
                    </div>
                  </div>
                </div>
                <p className="text-slate-50 ml-1">{post.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Campus;
