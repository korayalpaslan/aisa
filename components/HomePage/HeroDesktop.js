"use client";
import React, { useEffect, useRef } from "react";
import { useAnimate, useScroll, useTransform, motion } from "motion/react";
import Image from "next/image";

export default function HeroDesktop() {
  const [scope, animate] = useAnimate();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  useEffect(() => {
    const runAnimation = async () => {
      // animate(".box-1", { opacity: 0, x: 50 });
      // animate(".box-2", { opacity: 0, x: -50 });
      // animate(".box-3", { y: 0 });
      // animate(".box-4", { opacity: 0, y: 100 });

      // await new Promise((resolve) => setTimeout(resolve, 100)); // small delay so DOM renders
      // 1️⃣ Animate box-1 and box-2 first
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
        [".box-3", { y: -200 }, { duration: 0.8, ease: "easeOut" }],

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
    {
      type: "video",
      src: "/images/hero.webm",
      poster: "/images/hero.jpg",
      scale: scale3,
      top: "",
      left: "",
      width: "34vw",
      height: "34vh",
      blur: "",
    },
    // {
    //   src: "/images/4.jpg",
    //   scale: scale3,
    //   top: "",
    //   left: "",
    //   width: "34vw",
    //   height: "34vh",
    // },
    {
      src: "/images/1.jpg",
      scale: scale4,
      top: "15vh",
      left: "-46vw",
      width: "15vw",
      height: "40vh",
      blur: "/images/1-blur.jpg",
    },
    {
      src: "/images/2.jpg",
      scale: scale5,
      top: "15vh",
      left: "46vw",
      width: "15vw",
      height: "40vh",
      blur: "/images/2-blur.jpg",
    },
    {
      src: "/images/3.jpg",
      scale: scale6,
      top: "-10vh",
      left: "28vw",
      width: "15vw",
      height: "30vh",
      blur: "/images/3-blur.jpg",
    },
    {
      src: "/images/5.jpg",
      scale: scale7,
      top: "-10vh",
      left: "-28vw",
      width: "15vw",
      height: "30vh",
      blur: "/images/5-blur.jpg",
    },
    {
      src: "/images/6.jpg",
      scale: scale8,
      top: "25vh",
      left: "28vw",
      width: "15vw",
      height: "30vh",
      blur: "/images/6-blur.jpg",
    },
    {
      src: "/images/7.jpg",
      scale: scale9,
      top: "25vh",
      left: "-28vw",
      width: "15vw",
      height: "30vh",
      blur: "/images/7-blur.jpg",
    },
  ];
  return (
    <div ref={scope} className="hidden lg:block">
      <div className="w-full flex flex-col justify-start h-[10vh] translate-y-[40vh]">
        <div className="box-3 flex items-center space-x-[110px] mx-auto mb-5">
          <div className="box-1 opacity-0 text-foreground text-7xl font-serif">
            Learning
          </div>
          <div className="box-2 opacity-0 text-aisa-blue text-7xl font-serif">
            Without Borders
          </div>
        </div>
        {/* <div className="flex justify-center box-4 opacity-0 -translate-y-[200px]">
          <button className="bg-aisa-yellow px-6 py-2 rounded-4xl font-semibold text-foreground text-sm hover:bg-yellow-500 duration-300 transition-all ease-in-out cursor-pointer">
            Book a Campus Tour
          </button>
        </div> */}
      </div>

      <div className="h-[400vh] relative box-5 opacity-0 z-10" ref={container}>
        <div className="sticky overflow-hidden h-screen top-0 flex justify-center items-start ">
          {pictures.map((picture, i) => {
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
                      placeholder="blur"
                      blurDataURL={`${picture.blur}`}
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

      {/* <motion.div
        className="h-screen bg-foreground/80 flex flex-col items-center justify-center "
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
          className="text-4xl font-serif text-center text-background max-w-5xl mx-auto "
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
// "use client";
// import React, { useEffect, useRef } from "react";
// import { useAnimate, useScroll, useTransform, motion } from "motion/react";
// import Image from "next/image";

// export default function HeroDesktop() {
//   const [scope, animate] = useAnimate();
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   const scale3 = useTransform(scrollYProgress, [0, 1], [1, 3]);
//   const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
//   const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
//   const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
//   const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
//   const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
//   const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

//   useEffect(() => {
//     const runAnimation = async () => {
//       // animate(".box-1", { opacity: 0, x: 50 });
//       // animate(".box-2", { opacity: 0, x: -50 });
//       // animate(".box-3", { y: 0 });
//       // animate(".box-4", { opacity: 0, y: 100 });

//       // await new Promise((resolve) => setTimeout(resolve, 100)); // small delay so DOM renders
//       // 1️⃣ Animate box-1 and box-2 first
//       await animate([
//         [
//           ".box-1",
//           { opacity: [0, 1], x: 50 },
//           { duration: 0.8, ease: "easeOut", delay: 0.2 },
//         ],
//         [
//           ".box-2",
//           { opacity: [0, 1], x: -50 },
//           { duration: 0.8, ease: "easeOut", delay: 0.2 },
//         ],
//       ]);

//       // 2️⃣ Then animate box-3 and box-4
//       await animate([
//         [".box-3", { y: -200 }, { duration: 0.8, ease: "easeOut" }],
//         [
//           ".box-4",
//           { y: 0, opacity: [0, 1] },
//           { duration: 0.8, ease: "easeOut", delay: 0.2 },
//         ],
//       ]);
//     };

//     runAnimation();
//   }, [animate]);

//   const pictures = [
//     {
//       src: "/images/4.jpg",
//       scale: scale3,
//       top: "",
//       left: "",
//       width: "34vw",
//       height: "34vh",
//     },

//     {
//       src: "/images/1.jpg",
//       scale: scale4,
//       top: "15vh",
//       left: "-46vw",
//       width: "15vw",
//       height: "40vh",
//     },
//     {
//       src: "/images/2.jpg",
//       scale: scale5,
//       top: "15vh",
//       left: "46vw",
//       width: "15vw",
//       height: "40vh",
//     },
//     {
//       src: "/images/3.jpg",
//       scale: scale6,
//       top: "-10vh",
//       left: "28vw",
//       width: "15vw",
//       height: "30vh",
//     },
//     {
//       src: "/images/5.jpg",
//       scale: scale7,
//       top: "-10vh",
//       left: "-28vw",
//       width: "15vw",
//       height: "30vh",
//     },
//     {
//       src: "/images/6.jpg",
//       scale: scale8,
//       top: "25vh",
//       left: "28vw",
//       width: "15vw",
//       height: "30vh",
//     },
//     {
//       src: "/images/7.jpeg",
//       scale: scale9,
//       top: "25vh",
//       left: "-28vw",
//       width: "15vw",
//       height: "30vh",
//     },
//   ];
//   return (
//     <div ref={scope} className="hidden lg:block">
//       <div className="w-full flex items-end h-[10vh] translate-y-[40vh]">
//         <div className="box-3 flex items-center space-x-[110px] mx-auto">
//           <div className="box-1 opacity-0 translate-x-[50px] text-foreground text-7xl font-serif">
//             Learn Here,
//           </div>
//           <div className="box-2 opacity-0 translate-x-[50px] text-aisa-blue text-7xl font-serif">
//             Belong Everywhere
//           </div>
//         </div>
//       </div>

//       <div
//         className="h-[400vh] relative box-4 opacity-0 z-10 hidden lg:block overflow-hidden"
//         ref={container}
//       >
//         <div className="sticky overflow-hidden h-screen top-0 flex justify-center items-start ">
//           {pictures.map((picture, i) => {
//             return (
//               <motion.div
//                 className="flex justify-center items-center absolute top-0 h-full "
//                 key={picture.src}
//                 style={{ scale: picture.scale }}
//               >
//                 <div
//                   style={{
//                     top: picture.top,
//                     width: picture.width,
//                     height: picture.height,
//                     left: picture.left,
//                   }}
//                   className="relative"
//                 >
//                   <Image
//                     src={picture.src}
//                     fill
//                     alt="school-image"
//                     className="object-cover rounded-md"
//                   />
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
