"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Curriculum() {
  return (
    <div className="pb-20 lg:pb-40">
      <div className="wrapper flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-40">
        <motion.div
          className="w-full lg:w-1/2 space-y-5 font-light order-2 lg:order-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px 0px", once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-serif text-4xl lg:text-5xl">
            Pillars of Our Curriculum
          </h2>
          <ul className="list-disc ml-5 space-y-6">
            <li>
              <strong className="font-bold">Inquiry-Based Learning:</strong> A
              project- and theme-based educational model that encourages
              students to explore not only what they learn but also how and why.
            </li>
            <li>
              <strong className="font-bold">
                Foundational Literacy and Mathematical Thinking:
              </strong>{" "}
              Interactive applications that build early skills in reading,
              writing, and critical thinking, while making mathematics a part of
              daily life.
            </li>
            <li>
              <strong className="font-bold">Science and Discovery:</strong> An
              approach that enables our students to understand the world by
              observing their environment, asking questions, and conducting
              experiments through science and nature activities.
            </li>
            <li>
              <strong className="font-bold">
                Global Awareness and Character Education:
              </strong>{" "}
              A program that fosters global citizenship from a young age by
              introducing different cultures and promoting universal values such
              as respect, honesty, and empathy.
            </li>
            <li>
              <strong className="font-bold">
                Artistic and Physical Development:
              </strong>{" "}
              Enriching our students&apos; creativity and self-expression
              through music, visual arts, and sports, while supporting their
              physical health and coordination.
            </li>
          </ul>
        </motion.div>
        <div className="w-full lg:w-1/2 relative order-1 lg:order-2 mb-20 lg:mb-0">
          <div>
            <Image
              src="/images/elem/elem-1.jpg"
              width={350}
              height={350}
              className="object-cover rounded-md lg:hidden h-[350px] object-top w-full"
              alt="preschool_pic"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px 0px", once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative h-full w-full">
              <Image
                src="/images/elem/elem-1.jpg"
                width={1000}
                height={1000}
                className="object-cover rounded-md hidden lg:block max-h-[600px]"
                alt="preschool_pic"
              />

              <Image
                src="/images/elem/elem-2.jpg"
                width={250}
                height={250}
                className="object-cover absolute bottom-0 h-[250px] object-top 
                -translate-x-1/2 translate-y-1/2 rounded-md hidden lg:block"
                alt="preschool_pic"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
