"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const listItems = [
  {
    id: 1,
    image: "/images/ourschool/why-icon-1.svg",
    title: "Caring Environment",
    description:
      "Specially designed for students aged 3-10. We prioritize emotional safety and smooth adaptation for expatriate children.",
  },
  {
    id: 2,
    image: "/images/ourschool/why-icon-2.svg",
    title: "English Immersion",
    description:
      "Children learn English naturally through play and inquiry, not pressure. Full support for non-native speakers.",
  },
  {
    id: 3,
    image: "/images/ourschool/why-icon-3.svg",
    title: "Healthy Growth",
    description:
      "Nutritious meals, active outdoor play, and a curriculum that balances screen-free learning with modern skills.",
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (number) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: 0.25 * number,
      duration: 0.3, // <-- ADD DURATION HERE
      ease: "easeOut",
    },
  }),
};
export default function Why() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 0px -300px 0px",
    once: true,
  });

  return (
    <div className="py-20">
      <div
        className="space-y-5 max-w-4xl mx-auto text-foreground text-center wrapper "
        ref={ref}
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-4xl lg:text-5xl mb-20"
        >
          Why AISA is the best place for your child?
        </motion.h2>
        <motion.div className="flex flex-col lg:flex-row gap-20">
          {listItems.map((item) => {
            return (
              <motion.div
                className="flex-1 flex flex-col items-center"
                key={item.id}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={item.id}
              >
                <Image
                  src={item.image}
                  height={100}
                  width={100}
                  alt="why_aisa"
                  className="mb-4"
                />
                <h2 className="font-serif text-3xl mb-5">{item.title}</h2>
                <p>{item.description}</p>
              </motion.div>
            );
          })}

          {/* <motion.div className="flex-1 flex flex-col items-center">
            <Image
              src="/images/ourschool/why-icon-2.svg"
              height={100}
              width={100}
              alt="why_aisa"
              className="mb-4"
            />
            <h2 className="font-serif text-3xl mb-5">English Immersion</h2>
            <p>
              Children learn English naturally through play and inquiry, not
              pressure. Full support for non-native speakers.
            </p>
          </motion.div> */}
          {/* <motion.div className="flex-1 flex flex-col items-center">
            <Image
              src="/images/ourschool/why-icon-3.svg"
              height={100}
              width={100}
              alt="why_aisa"
              className="mb-4"
            />
            <h2 className="font-serif text-3xl mb-5">Healthy Growth</h2>
            <p>
              Nutritious meals, active outdoor play, and a curriculum that
              balances screen-free learning with modern skills.
            </p>
          </motion.div> */}
        </motion.div>
      </div>
    </div>
  );
}
