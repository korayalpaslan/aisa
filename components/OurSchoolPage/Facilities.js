"use client";
import { motion } from "motion/react";
import React from "react";
import {
  Soup,
  Clover,
  Binary,
  Palette,
  Dumbbell,
  FlaskConical,
} from "lucide-react";

const facilitiesItems = [
  {
    id: 1,
    title: "Canteen",
    description:
      "    Our school cafeteria is spacious, bright, and filled with natural light. Fresh and balanced menus are prepared every day. Our students enjoy their meals in a hygienic and safe environment.",
    icon: <Soup />,
  },
  {
    id: 2,
    title: "Robotics Lab",
    description:
      "  Our Robotics and Coding Lab is equipped with modern technology.Here, our students enhance their creativity by designing robots,writing code, and developing projects.",
    icon: <Binary />,
  },
  {
    id: 3,
    title: "Art Studio",
    description:
      "Our bright and spacious Art Studio, with its view of nature, is a place where students can freely explore art. It provides an ideal environment for drawing, painting, music, crafts, and creative art activities.",
    icon: <Palette />,
  },
  {
    id: 4,
    title: "Gymnasium",
    description:
      "Our spacious, safe gymnasium is fully equipped for children’s development, where they enhance balance, flexibility, and coordination through fun activities.",
    icon: <Dumbbell />,
  },
  {
    id: 5,
    title: "School Garden",
    description:
      "In our School Garden, students plant and grow their own vegetables,harvest them, and collect eggs from our chickens, learning about nature and developing responsibility.",
    icon: <Clover />,
  },
  {
    id: 6,
    title: "Science Lab",
    description:
      "Our spacious and modern science laboratory is equipped with microscopes and advanced scientific materials. Students learn science hands-on by conducting experiments in a safe environment.",
    icon: <FlaskConical />,
  },
];

export default function Facilities() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 50,
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
  return (
    <div className="py-20">
      <div className="space-y-5 max-w-4xl mx-auto text-foreground text-center wrapper ">
        <motion.h2
          className="font-serif text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px 0px", once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Facilities
        </motion.h2>
        <motion.p
          className="lg:text-lg mb-10 lg:w-1/2 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px 0px", once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet consectetur. Malesuada elit fringilla
          tellus etiam. Consequat felis faucibus metus turpis pretium. Risus
          ultrices enim netus et nisl vulputate risus turpis et.
        </motion.p>
      </div>
      <div className="mt-20 grid lg:grid-cols-3 gap-6 wrapper">
        {facilitiesItems.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={item.id}
              className="space-y-3 p-6 border border-foreground rounded-md"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-md ">
                {item.icon}
              </div>

              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p className="">{item.description}</p>
            </motion.div>
          );
        })}
        {/* <div className="space-y-3 p-6 border border-foreground rounded-md">
          <div className="w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-md ">
            <Soup />
          </div>

          <h2 className="font-semibold text-lg">Canteen</h2>
          <p className="">
            Our school cafeteria is spacious, bright, and filled with natural
            light. Fresh and balanced menus are prepared every day. Our students
            enjoy their meals in a hygienic and safe environment.
          </p>
        </div>
        <div className="space-y-3 p-6 border border-foreground rounded-md">
          <div className="w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-md ">
            <Binary />
          </div>

          <h2 className="font-semibold text-lg">Robotics Lab</h2>
          <p className="">
            Our Robotics and Coding Lab is equipped with modern technology.
            Here, our students enhance their creativity by designing robots,
            writing code, and developing projects.
          </p>
        </div>
        <div className="space-y-3 p-6 border border-foreground rounded-md">
          <div className="w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-md ">
            <Palette />
          </div>

          <h2 className="font-semibold text-lg">Art Studio</h2>
          <p className="">
            Our bright and spacious Art Studio, with its view of nature, is a
            place where students can freely explore art. It provides an ideal
            environment for drawing, painting, music, crafts, and creative art
            activities.
          </p>
        </div>
        <div className="space-y-3 p-6 border border-foreground rounded-md">
          <div className="w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-md ">
            <Dumbbell />
          </div>

          <h2 className="font-semibold text-lg">Gymnasium</h2>
          <p className="">
            Our spacious, safe gymnasium is fully equipped for children’s
            development, where they enhance balance, flexibility, and
            coordination through fun activities.
          </p>
        </div>
        <div className="space-y-3 p-6 border border-foreground rounded-md">
          <div className="w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-md ">
            <Clover />
          </div>

          <h2 className="font-semibold text-lg">School Garden</h2>
          <p className="">
            In our School Garden, students plant and grow their own vegetables,
            harvest them, and collect eggs from our chickens, learning about
            nature and developing responsibility.
          </p>
        </div>
        <div className="space-y-3 p-6 border border-foreground rounded-md">
          <div className="w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-md ">
            <FlaskConical />
          </div>

          <h2 className="font-semibold text-lg">Science Lab</h2>
          <p className="">
            Our spacious and modern science laboratory is equipped with
            microscopes and advanced scientific materials. Students learn
            science hands-on by conducting experiments in a safe environment.
          </p>
        </div> */}
      </div>
    </div>
  );
}
