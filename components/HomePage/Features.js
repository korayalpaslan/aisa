"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Medal,
  Earth,
  BookOpenCheck,
  GraduationCap,
  Trophy,
  LandPlot,
} from "lucide-react";

export default function Features() {
  const [index, setIndex] = useState(0);
  const stats = [
    {
      figure: "400+",
      title: "Enrolled Student",
      description:
        " Students from around the world come together across our two lively Alanya campuses, learning, growing, and making lifelong friends.",
    },
    {
      figure: "300+",
      title: "Title 2",
      description:
        " Students from around the world come together across our two lively Alanya campuses, learning, growing, and making lifelong friends.",
    },
    {
      figure: "200+",
      title: "Title 3",
      description:
        " Students from around the world come together across our two lively Alanya campuses, learning, growing, and making lifelong friends.",
    },
    {
      figure: "100+",
      title: "Title 4",
      description:
        " Students from around the world come together across our two lively Alanya campuses, learning, growing, and making lifelong friends.",
    },
    {
      figure: "50+",
      title: "Title 5",
      description:
        " Students from around the world come together across our two lively Alanya campuses, learning, growing, and making lifelong friends.",
    },
    {
      figure: "20+",
      title: "Title 6",
      description:
        " Students from around the world come together across our two lively Alanya campuses, learning, growing, and making lifelong friends.",
    },
    {
      figure: "400+",
      title: "Enrolled Student",
      description:
        " Students from around the world come together across our two lively Alanya campuses, learning, growing, and making lifelong friends.",
    },
    {
      figure: "300+",
      title: "Title 2",
      description:
        " Students from around the world come together across our two lively Alanya campuses, learning, growing, and making lifelong friends.",
    },
    {
      figure: "200+",
      title: "Title 3",
      description:
        " Students from around the world come together across our two lively Alanya campuses, learning, growing, and making lifelong friends.",
    },
  ];

  const icons = [
    {
      icon: <Medal size={40} />,
    },
    {
      icon: <Earth size={40} />,
    },
    {
      icon: <BookOpenCheck size={40} />,
    },
    {
      icon: <GraduationCap size={40} />,
    },
    {
      icon: <Trophy size={40} />,
    },
    {
      icon: <LandPlot size={40} />,
    },
    {
      icon: <Medal size={40} />,
    },
    {
      icon: <Earth size={40} />,
    },
    {
      icon: <BookOpenCheck size={40} />,
    },
  ];
  return (
    <div className="py-20 lg:py-40 bg-foreground">
      <div className="wrapper">
        <motion.h1
          className="font-serif text-4xl lg:text-5xl text-center lg:text-left text-background mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px 0px", once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Highlights
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px 0px", once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-20 lg:items-center"
        >
          <ul className="w-full lg:w-1/2 grid grid-cols-3 gap-5">
            {icons.map((icon, i) => {
              return (
                <li
                  className={`border  rounded-md h-full w-full py-5 flex-center text-background cursor-pointer ${
                    index === i
                      ? "bg-aisa-blue border-aisa-blue"
                      : "border-background"
                  }`}
                  key={i}
                  onClick={() => setIndex(i)}
                >
                  {icon.icon}
                </li>
              );
            })}
          </ul>

          <motion.div
            className="w-full lg:w-1/2 text-background text-center lg:text-left"
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl text-aisa-blue mb-5">
              {stats[index].figure}
            </h2>
            <h4 className="font-semibold text-xl mb-2">{stats[index].title}</h4>
            <p className="lg:w-2/3">{stats[index].description}</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
