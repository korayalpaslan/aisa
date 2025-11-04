"use client";
import React, { useEffect, useRef } from "react";
import { useAnimate, useScroll, useTransform, motion } from "motion/react";
import Image from "next/image";

export default function HeroMobile() {
  const [scope, animate] = useAnimate();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 3]);
  // 🎬 Overlap starts only after scaling finishes
  // const overlapOpacityRaw = useTransform(scrollYProgress, [0.92, 1], [0, 1]);
  // const overlapYRaw = useTransform(
  //   scrollYProgress,
  //   [0.92, 1],
  //   ["100vh", "0vh"]
  // );
  // const textOpacityRaw = useTransform(scrollYProgress, [0.95, 1], [0, 1]);
  // const textYRaw = useTransform(scrollYProgress, [0.95, 1], ["40px", "0px"]);

  // Add spring smoothing for slower feel
  // const overlapOpacity = useSpring(overlapOpacityRaw, {
  //   stiffness: 60, // lower = slower
  //   damping: 20, // higher = smoother stop
  // });
  // const overlapY = useSpring(overlapYRaw, {
  //   stiffness: 60,
  //   damping: 20,
  // });
  // const textOpacity = useSpring(textOpacityRaw, {
  //   stiffness: 50,
  //   damping: 22,
  // });
  // const textY = useSpring(textYRaw, {
  //   stiffness: 50,
  //   damping: 22,
  // });

  useEffect(() => {
    const runAnimation = async () => {
      await animate([
        [
          ".box-1",
          { opacity: [0, 1], x: 50 },
          { duration: 0.8, ease: "easeOut", delay: 0.2 },
        ],
        [
          ".box-2",
          { opacity: [0, 1], x: -50 },
          { duration: 0.8, ease: "easeOut", delay: 0.2 },
        ],
      ]);

      // 2️⃣ Then animate box-3 and box-4
      await animate([
        [".box-3", { y: -150 }, { duration: 0.8, ease: "easeOut" }],
        [
          ".box-4",
          { y: 0, opacity: [0, 1] },
          { duration: 0.8, ease: "easeOut", delay: 0.2 },
        ],
        [
          ".box-5",
          { y: 0, opacity: [0, 1] },
          { duration: 0.8, ease: "easeOut", delay: 0.2 },
        ],
      ]);
    };

    runAnimation();
  }, [animate]);

  const pictures = [
    // {
    //   src: "/images/4.jpg",
    //   scale: scale3,
    //   top: "",
    //   left: "",
    //   width: "51vw",
    //   height: "51vh",
    // },
    {
      type: "video",
      src: "/images/hero.webm",
      poster: "/images/hero.jpg",
      scale: scale3,
      top: "",
      left: "",
      width: "51vw",
      height: "51vh",
    },
    {
      src: "/images/7.jpg",
      scale: scale4,
      top: "",
      left: "-42vw",
      width: "25vw",
      height: "35vh",
    },
    {
      src: "/images/2.jpg",
      scale: scale5,
      top: "",
      left: "42vw",
      width: "25vw",
      height: "35vh",
    },
  ];
  return (
    <div ref={scope} className="lg:hidden">
      <div className="w-full flex flex-col justify-start h-[20vh] translate-y-[30vh]">
        <div className="box-3 flex flex-col justify-start space-y-2 mx-auto mb-5">
          <div className="box-1 opacity-0 -translate-x-[50px] text-foreground text-4xl font-serif text-center">
            Learning
          </div>
          <div className="box-2 opacity-0 translate-x-[50px] text-aisa-blue text-4xl font-serif text-center">
            Without Borders
          </div>
        </div>
        <div className="flex justify-center box-4 opacity-0 -translate-y-[150px]">
          <button className="bg-aisa-yellow px-6 py-2 rounded-4xl font-semibold text-foreground text-sm hover:bg-yellow-500 duration-300 transition-all ease-in-out cursor-pointer">
            Book a Campus Tour
          </button>
        </div>
      </div>

      <div
        className="h-[400vh] relative box-5 opacity-0 z-10 lg:hidden"
        ref={container}
      >
        <div className="sticky overflow-hidden h-screen top-0  flex justify-center items-start">
          {pictures.map((picture) => {
            return (
              <motion.div
                className="flex justify-center items-center absolute top-0 h-full"
                key={picture.src}
                style={{ scale: picture.scale }}
              >
                <div
                  style={{
                    top: picture.top,
                    width: picture.width,
                    height: picture.height,
                    left: picture.left,
                  }}
                  className="relative"
                >
                  {picture.type === "video" ? (
                    <video
                      src={picture.src}
                      poster={picture.poster}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover rounded-md w-full h-full"
                    />
                  ) : (
                    <Image
                      src={picture.src}
                      fill
                      alt="school-image"
                      className="object-cover rounded-md"
                    />
                  )}

                  {/* <Image
                    src={picture.src}
                    fill
                    alt="school-image"
                    className="object-cover rounded-md"
                  /> */}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
