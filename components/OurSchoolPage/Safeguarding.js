"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function SafaGuarding() {
  return (
    <div className="pt-20 pb-20 lg:pb-60">
      <div className="wrapper flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-40">
        <motion.div
          className="w-full lg:w-1/2 space-y-5 font-light order-2 lg:order-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px 0px", once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-serif text-4xl lg:text-5xl">
            Safe Guardingn Policy
          </h2>
          <ul className="list-disc ml-5 space-y-6">
            <li>
              <strong className="font-bold">Advanced Academic Program:</strong>{" "}
              An enriched curriculum in science, mathematics, social studies,
              and humanities that emphasizes analytical thinking and
              problem-solving to prepare students for high school level courses.
            </li>
            <li>
              <strong className="font-bold">
                Critical Thinking and Innovation:
              </strong>{" "}
              Interdisciplinary, project-based work and debate activities that
              enable students to find creative solutions to complex problems.
            </li>
            <li>
              <strong className="font-bold">
                Digital Citizenship and Media Literacy:
              </strong>{" "}
              Equipping students to become responsible members of the digital
              world by teaching them to use technology consciously, ethically,
              and effectively.
            </li>
            <li>
              <strong className="font-bold">
                Leadership and Community Service:
              </strong>{" "}
              Encouraging students to take initiative, learn teamwork, and make
              a positive impact on society through student council, club
              activities, and social responsibility projects.
            </li>
            <li>
              <strong className="font-bold">
                World Languages and Intercultural Communication:
              </strong>{" "}
              Providing a global perspective by enabling students to achieve
              fluency in a second foreign language and gain a deep understanding
              of different cultures.
            </li>
          </ul>
        </motion.div>
        <div className="w-full lg:w-1/2 relative order-1 lg:order-2 mb-10 lg:mb-0">
          <div>
            <Image
              src="/images/ourschool/safeguarding-1.jpg"
              width={500}
              height={500}
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
                src="/images/ourschool/safeguarding-1.jpg"
                width={1000}
                height={1000}
                className="object-cover rounded-md hidden lg:block max-h-[600px]"
                alt="preschool_pic"
              />

              <Image
                src="/images/ourschool/safeguarding-2.jpg"
                width={500}
                height={500}
                className="object-cover absolute bottom-0 h-[250px] w-[250px] object-top 
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
