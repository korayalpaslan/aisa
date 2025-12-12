"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useInView, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import prep from "@/public/images/prep.jpg";
import primary from "@/public/images/primary.jpg";
import middle from "@/public/images/middle.jpg";
import high from "@/public/images/high.jpg";

export default function Academics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -300px 0px", once: true });
  return (
    <div className="bg-foreground text-background py-20">
      <div className="wrapper" ref={ref}>
        <div className="lg:h-[50vh] lg:sticky lg:top-16 lg:mb-36 mb-16">
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
            The Perfect Start for Your Child&apos;s Global Journey
          </motion.p>
        </div>

        <motion.ul
          className="lg:hidden flex flex-col items-center space-y-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Link className="w-full" href="/en/preschool">
            <div className="w-auto">
              <div className="h-[350px] w-full rounded-md bg-aisa-blue flex flex-col relative">
                <Image
                  src={prep}
                  fill
                  alt="prep"
                  className="h-80 w-full object-cover rounded-t-md"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="space-y-1 flex flex-col justify-center grow px-6 cursor-pointer bg-aisa-blue py-3 rounded-b-md">
              <h3 className="text-xl font-semibold flex items-center">
                Preschool{" "}
                <span className="ml-2">
                  <ArrowUpRight />
                </span>
              </h3>
              <p className="text-sm font-light">Ages 3 - 6</p>
            </div>
          </Link>
          <Link href="/en/elementary-school" className="w-full">
            <div className="w-auto">
              <div className="h-[350px] w-full  rounded-md bg-aisa-yellow flex flex-col relative">
                <Image
                  src={primary}
                  fill
                  alt="prep"
                  className="h-80 w-full object-cover rounded-t-md"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="space-y-1 flex flex-col justify-center grow px-6 bg-aisa-yellow py-3 rounded-b-md">
              <h3 className="text-xl font-semibold flex items-center">
                Primary School{" "}
                <span className="ml-2">
                  <ArrowUpRight />
                </span>
              </h3>
              <p className="text-sm font-light">Ages 7 - 10</p>
            </div>
          </Link>
          <Link href="/en/middle-school" className="w-full">
            <div className="w-auto">
              <div className="h-[350px] w-full rounded-md bg-aisa-red flex flex-col relative">
                <Image
                  src={middle}
                  fill
                  alt="prep"
                  className="h-80 w-full object-cover rounded-t-md"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="space-y-1 flex flex-col justify-center grow px-6 bg-aisa-red py-3 rounded-b-md">
              <h3 className="text-xl font-semibold flex items-center">
                Middle School{" "}
                <span className="ml-2">
                  <ArrowUpRight />
                </span>
              </h3>
              <p className="text-sm font-light">Ages 11 - 14</p>
            </div>
          </Link>
          <Link href="/en/high-school" className="w-full">
            <div className="w-auto">
              <div className="h-[350px] w-full rounded-md bg-aisa-green flex flex-col relative">
                <Image
                  src={high}
                  fill
                  alt="prep"
                  className="h-80 w-full object-cover rounded-t-md"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="space-y-1 flex flex-col justify-center grow px-6 bg-aisa-green py-3 rounded-b-md">
              <h3 className="text-xl font-semibold flex items-center">
                High School{" "}
                <span className="ml-2">
                  <ArrowUpRight />
                </span>
              </h3>
              <p className="text-sm font-light">Ages 14 - 17</p>
            </div>
          </Link>
        </motion.ul>
        <ul className="margin-t-[50vh] margin-b-[100vh] relative items-center hidden lg:inline-block">
          <li className="h-[50vh] w-auto flex items-center sticky top-48 z-10">
            <Link href="/en/preschool">
              <div className="h-[400px] w-[350px] rounded-md bg-aisa-blue flex flex-col relative">
                <Image
                  src={prep}
                  fill
                  alt="prep"
                  className="h-80 w-full object-cover rounded-t-md"
                  placeholder="blur"
                />
              </div>
              <div className="space-y-1 flex flex-col justify-center grow px-6 py-3 bg-aisa-blue rounded-b-md">
                <h3 className="text-xl font-semibold flex items-center">
                  Preschool{" "}
                  <span className="ml-2">
                    <ArrowUpRight />
                  </span>
                </h3>
                <p className="text-sm font-light">Ages 3 - 6</p>
              </div>
            </Link>
          </li>
          <li className="h-[50vh] lg:translate-x-[275px] w-auto flex items-center sticky top-56 z-20">
            <Link href="/en/elementary-school">
              <div className="h-[400px] w-[350px] rounded-md bg-aisa-yellow flex flex-col relative">
                <Image
                  src={primary}
                  fill
                  alt="prep"
                  className="h-80 w-full object-cover rounded-t-md"
                  placeholder="blur"
                />
              </div>
              <div className="space-y-1 flex flex-col justify-center grow px-6 py-3  bg-aisa-yellow rounded-b-md">
                <h3 className="text-xl font-semibold flex items-center">
                  Primary School{" "}
                  <span className="ml-2">
                    <ArrowUpRight />
                  </span>
                </h3>
                <p className="text-sm font-light">Ages 7 - 10</p>
              </div>
            </Link>
          </li>
          <li className="h-[50vh] lg:translate-x-[550px] w-auto flex items-center sticky top-64 z-30">
            <Link href="/en/middle-school">
              <div className="h-[400px] w-[350px] rounded-md bg-aisa-red flex flex-col text-background relative">
                <Image
                  src={middle}
                  fill
                  alt="prep"
                  className="h-80 w-full object-cover rounded-t-md"
                  placeholder="blur"
                />
              </div>
              <div className="space-y-1 flex flex-col justify-center grow px-6 py-3 bg-aisa-red rounded-b-md">
                <h3 className="text-xl font-semibold flex items-center">
                  Middle School{" "}
                  <span className="ml-2">
                    <ArrowUpRight />
                  </span>
                </h3>
                <p className="text-sm font-light">Ages 11 - 14</p>
              </div>
            </Link>
          </li>
          <li className="h-[50vh] lg:translate-x-[825px] w-auto flex items-center sticky top-72 cursor-pointer z-40">
            <Link href="/en/high-school">
              <div className="h-[400px] w-[350px] rounded-md bg-aisa-green flex flex-col text-background relative">
                <Image
                  src={high}
                  fill
                  alt="prep"
                  className="h-80 w-full object-cover rounded-t-md"
                  placeholder="blur"
                />
              </div>
              <div className="space-y-1 flex flex-col justify-center grow px-6 py-3 bg-aisa-green rounded-b-md">
                <h3 className="text-xl font-semibold flex items-center">
                  High School{" "}
                  <span className="ml-2">
                    <ArrowUpRight />
                  </span>
                </h3>
                <p className="text-sm font-light">Ages 14 - 17</p>
              </div>
            </Link>
          </li>

          <li className="h-[50vh] sticky top-100 content-none"></li>
        </ul>
      </div>
    </div>
  );
}
