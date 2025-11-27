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
              <strong className="font-bold">
                International University Preparatory Programs:
              </strong>{" "}
              Offering students the opportunity to take university-level courses
              and gain a competitive edge for top universities worldwide through
              internationally recognized programs like Advanced Placement (AP).
            </li>
            <li>
              <strong className="font-bold">
                Personalized Academic Pathways:
              </strong>{" "}
              A flexible and in-depth curriculum structure that allows students
              to choose courses according to their own interests and goals in
              fields such as STEM, humanities, arts, or social sciences.
            </li>
            <li>
              <strong className="font-bold">
                University and Career Counseling:
              </strong>{" "}
              Professional guidance and support at every stage, from identifying
              the most suitable universities based on each student&apos;s goals
              and potential to navigating the entire application process.
            </li>
            <li>
              <strong className="font-bold">
                Research and Capstone Project:
              </strong>{" "}
              An opportunity for students to conduct in-depth research on a
              topic of interest under the guidance of an academic advisor,
              culminating in a university-level thesis or project.
            </li>
            <li>
              <strong className="font-bold">
                Global Leadership and Real-World Experience:
              </strong>{" "}
              Providing students with opportunities to apply theoretical
              knowledge to practice and generate solutions to real-world
              problems through internship programs, international social
              responsibility projects, and entrepreneurship workshops.
            </li>
          </ul>
        </motion.div>
        <div className="w-full lg:w-1/2 relative order-1 lg:order-2 mb-20 lg:mb-0">
          <div>
            <Image
              src="/images/high/high-2.jpg"
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
                src="/images/high/high-1.jpg"
                width={1000}
                height={1000}
                className="object-cover rounded-md hidden lg:block max-h-[600px]"
                alt="preschool_pic"
              />

              <Image
                src="/images/high/high-2.jpg"
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
