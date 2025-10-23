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
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-5xl text-right h-[50vh] sticky top-16 mb-20"
        >
          Discover your place at <br></br>AISA
        </motion.h1>
        <ul className="margin-t-[50vh] margin-b-[100vh] inline-block relative">
          <li className="h-[50vh] w-auto flex items-center sticky top-32">
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
          <li className="h-[50vh] translate-x-[290px] w-auto flex items-center sticky top-40">
            <div className="h-[400px] w-[320px] rounded-md bg-aisa-yellow flex flex-col relative">
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
          <li className="h-[50vh] translate-x-[580px] w-auto flex items-center sticky top-48">
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
          <li className="h-[50vh] translate-x-[820px] w-auto flex items-center sticky top-56 cursor-pointer">
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
