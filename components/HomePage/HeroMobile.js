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

  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 1.33]);

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
      ]);
    };

    runAnimation();
  }, [animate]);

  const pictures = [
    {
      src: "/images/4.jpg",
      scale: scale3,
      top: "",
      left: "",
      width: "75vw",
      height: "75vh",
    },
  ];
  return (
    <div ref={scope} className="lg:hidden">
      <div className="w-full flex items-end h-[20vh] translate-y-[20vh]">
        <div className="box-3 flex flex-col justify-center space-y-2 mx-auto">
          <div className="box-1 opacity-0 -translate-x-[50px] text-foreground text-4xl font-serif text-center">
            Learn Here,
          </div>
          <div className="box-2 opacity-0 translate-x-[50px] text-aisa-blue text-4xl font-serif text-center">
            Belong Everywhere
          </div>
        </div>
      </div>

      <div className="h-[400vh] relative box-4 opacity-0 z-10" ref={container}>
        <div className="sticky overflow-hidden h-screen top-0 flex justify-center items-start ">
          {pictures.map((picture) => {
            return (
              <motion.div
                className="flex justify-center items-center absolute top-0 h-full "
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
                  <Image
                    src={picture.src}
                    fill
                    alt="school-image"
                    className="object-cover rounded-md"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* <motion.div
        className="h-screen bg-foreground/80 flex flex-col items-center justify-center"
        style={{
          opacity: overlapOpacity,
          y: overlapY,
          position: "relative",
          zIndex: 10,
          marginTop: "-100vh", // still overlaps the previous section
        }}
      >
        <motion.div
          style={{
            opacity: textOpacity,
            y: textY,
          }}
          className="text-2xl font-serif text-center text-background max-w-5xl mx-auto "
        >
          This is your{" "}
          <span className="text-aisa-yellow font-semibold italic">school</span>.
          This is your{" "}
          <span className="text-aisa-yellow font-semibold italic">journey</span>
          .<br></br>This is the extraordinary opportunity your{" "}
          <span className="text-aisa-yellow font-semibold italic">story</span>{" "}
          deserves.
        </motion.div>
      </motion.div> */}
    </div>
  );
}
