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
              <strong className="font-bold">Play-Based Discovery:</strong> We
              believe that play is the most natural way to learn. Our curriculum
              allows children to learn by experiencing the world, solving
              problems, and using their imagination through both structured and
              free-play activities.
            </li>
            <li>
              <strong className="font-bold">
                Social and Emotional Development:
              </strong>{" "}
              At the heart of our program is helping children recognize and
              express their feelings, build empathy, and develop positive
              relationships with their peers. They learn to share, collaborate,
              and become part of a community.
            </li>
            <li>
              <strong className="font-bold">
                Early Language and Communication Skills:
              </strong>{" "}
              We provide a rich linguistic environment through storytime, songs,
              rhymes, and interactive dialogues. Our students gain confidence in
              expressing themselves by being introduced to both their native
              language and English at an early age.
            </li>
            <li>
              <strong className="font-bold">
                Physical Development and Motor Skills:
              </strong>{" "}
              We support the development of fine motor skills through art
              activities, clay play, and building blocks, while enhancing gross
              motor skills and physical coordination through garden games,
              sports, and dance.
            </li>
            <li>
              <strong className="font-bold">Arts and Creativity:</strong> We
              Music, rhythm, drama, and visual arts are integral parts of our
              program. We encourage our students to express themselves freely
              using their creativity.
            </li>
            <li>
              <strong className="font-bold">
                Introduction to Science and Math Concepts:
              </strong>{" "}
              We introduce the foundations of science and mathematics in a fun
              and tangible way through nature observation, simple experiments,
              counting, sorting, and pattern recognition.
            </li>
          </ul>
        </motion.div>
        <div className="w-full lg:w-1/2 relative order-1 lg:order-2 mb-20 lg:mb-0">
          <div>
            <Image
              src="/images/pre/pre-2.jpg"
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
                src="/images/pre/pre-2.jpg"
                width={1000}
                height={1000}
                className="object-cover rounded-md hidden lg:block max-h-[600px]"
                alt="preschool_pic"
              />

              <Image
                src="/images/pre/pre-1.jpg"
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
