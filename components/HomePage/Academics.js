"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useInView, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Academics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -300px 0px", once: true });
  return (
    <div className="bg-foreground text-background py-20">
      <div className="wrapper" ref={ref}>
        <div className="lg:h-[50vh] lg:sticky lg:top-16 lg:mb-32 mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="font-serif text-4xl lg:text-5xl text-center mb-2"
          >
            Explore our learning pathway
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="font-sans text-xl text-center mb-5"
          >
            From Early Years to High School, students grow with purpose.
          </motion.p>
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <button className="bg-aisa-yellow px-6 py-2 rounded-4xl font-semibold text-foreground text-sm hover:bg-yellow-500 duration-300 transition-all ease-in-out cursor-pointer">
              Start your application
            </button>
          </motion.div> */}
        </div>

        <motion.ul
          className="lg:hidden flex flex-col items-center space-y-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <li className="w-auto flex items-center">
            <div className="h-[400px] w-full sm:w-[350px] rounded-md bg-aisa-blue flex flex-col relative">
              <Image
                src="/images/prep.jpg"
                width={320}
                height={300}
                alt="prep"
                className="h-80 w-full object-cover rounded-t-md"
              />
              <div className="space-y-1 flex flex-col justify-center grow px-6">
                <h3 className="text-xl font-semibold flex items-center">
                  Prep School{" "}
                  <span className="ml-2">
                    <ArrowUpRight />
                  </span>
                </h3>
                <p className="text-sm font-light">Ages 3 - 6</p>
              </div>
            </div>
          </li>
          <li className="w-auto flex items-center">
            <div className="h-[400px] w-full sm:w-[350px] rounded-md bg-aisa-yellow flex flex-col relative">
              <Image
                src="/images/primary.jpg"
                width={320}
                height={300}
                alt="prep"
                className="h-80 w-full object-cover rounded-t-md"
              />
              <div className="space-y-1 flex flex-col justify-center grow px-6">
                <h3 className="text-xl font-semibold flex items-center">
                  Primary School{" "}
                  <span className="ml-2">
                    <ArrowUpRight />
                  </span>
                </h3>
                <p className="text-sm font-light">Ages 7 - 10</p>
              </div>
            </div>
          </li>
          <li className="w-auto flex items-center">
            <div className="h-[400px] w-full sm:w-[350px] rounded-md bg-aisa-red flex flex-col relative">
              <Image
                src="/images/middle.jpg"
                width={320}
                height={300}
                alt="prep"
                className="h-80 w-full object-cover rounded-t-md"
              />
              <div className="space-y-1 flex flex-col justify-center grow px-6">
                <h3 className="text-xl font-semibold flex items-center">
                  Middle School{" "}
                  <span className="ml-2">
                    <ArrowUpRight />
                  </span>
                </h3>
                <p className="text-sm font-light">Ages 11 - 14</p>
              </div>
            </div>
          </li>
          <li className="w-auto flex items-center">
            <div className="h-[400px] w-full sm:w-[350px] rounded-md bg-aisa-green flex flex-col relative">
              <Image
                src="/images/high.jpg"
                width={320}
                height={300}
                alt="prep"
                className="h-80 w-full object-cover rounded-t-md"
              />
              <div className="space-y-1 flex flex-col justify-center grow px-6">
                <h3 className="text-xl font-semibold flex items-center">
                  High School{" "}
                  <span className="ml-2">
                    <ArrowUpRight />
                  </span>
                </h3>
                <p className="text-sm font-light">Ages 14 - 17</p>
              </div>
            </div>
          </li>
        </motion.ul>
        <ul className="margin-t-[50vh] margin-b-[100vh] relative items-center hidden lg:inline-block">
          <li className="h-[50vh] w-auto flex items-center sticky top-48">
            <div className="h-[400px] w-[350px] rounded-md bg-aisa-blue flex flex-col relative">
              <Image
                src="/images/prep.jpg"
                width={320}
                height={300}
                alt="prep"
                className="h-80 w-full object-cover rounded-t-md"
              />
              <div className="space-y-1 flex flex-col justify-center grow px-6">
                <h3 className="text-xl font-semibold flex items-center">
                  Prep School{" "}
                  <span className="ml-2">
                    <ArrowUpRight />
                  </span>
                </h3>
                <p className="text-sm font-light">Ages 3 - 6</p>
              </div>
            </div>
          </li>
          <li className="h-[50vh] lg:translate-x-[275px] w-auto flex items-center sticky top-56">
            <div className="h-[400px] w-[350px] rounded-md bg-aisa-yellow flex flex-col relative">
              <Image
                src="/images/primary.jpg"
                width={320}
                height={300}
                alt="prep"
                className="h-80 w-full object-cover rounded-t-md"
              />
              <div className="space-y-1 flex flex-col justify-center grow px-6">
                <h3 className="text-xl font-semibold flex items-center">
                  Primary School{" "}
                  <span className="ml-2">
                    <ArrowUpRight />
                  </span>
                </h3>
                <p className="text-sm font-light">Ages 7 - 10</p>
              </div>
            </div>
          </li>
          <li className="h-[50vh] lg:translate-x-[550px] w-auto flex items-center sticky top-64">
            <div className="h-[400px] w-[350px] rounded-md bg-aisa-red flex flex-col text-background relative">
              <Image
                src="/images/middle.jpg"
                width={320}
                height={300}
                alt="prep"
                className="h-80 w-full object-cover rounded-t-md"
              />
              <div className="space-y-1 flex flex-col justify-center grow px-6">
                <h3 className="text-xl font-semibold flex items-center">
                  Middle School{" "}
                  <span className="ml-2">
                    <ArrowUpRight />
                  </span>
                </h3>
                <p className="text-sm font-light">Ages 11 - 14</p>
              </div>
            </div>
          </li>
          <li className="h-[50vh] lg:translate-x-[825px] w-auto flex items-center sticky top-72 cursor-pointer">
            <div className="h-[400px] w-[350px] rounded-md bg-aisa-green flex flex-col text-background relative">
              <Image
                src="/images/high.jpg"
                width={320}
                height={300}
                alt="prep"
                className="h-80 w-full object-cover rounded-t-md"
              />
              <div className="space-y-1 flex flex-col justify-center grow px-6">
                <h3 className="text-xl font-semibold flex items-center">
                  High School{" "}
                  <span className="ml-2">
                    <ArrowUpRight />
                  </span>
                </h3>
                <p className="text-sm font-light">Ages 14 - 17</p>
              </div>
            </div>
          </li>
          <li className="h-[50vh] sticky top-100 content-none"></li>
        </ul>
      </div>
    </div>
  );
}
