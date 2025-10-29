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
  const [origin, setOrigin] = useState([0, 0]);

  const BASE_DELAY = 0.5;
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

  const getDistance = (row, col) => {
    return (
      Math.sqrt((row - origin[0]) ** 2 + (col - origin[1]) ** 2) /
      (3 * Math.sqrt(2))
    );
  };

  const coordinates = [
    {
      index: 0,
      coordinate: [0, 0],
    },
    {
      index: 1,
      coordinate: [0, 1],
    },
    {
      index: 2,
      coordinate: [0, 2],
    },
    {
      index: 3,
      coordinate: [1, 0],
    },
    {
      index: 4,
      coordinate: [1, 1],
    },
    {
      index: 5,
      coordinate: [1, 2],
    },
    {
      index: 6,
      coordinate: [2, 0],
    },
    {
      index: 7,
      coordinate: [2, 1],
    },
    {
      index: 8,
      coordinate: [2, 2],
    },
  ];

  const handleClick = (i) => {
    setIndex(i);
    setOrigin(coordinates[i].coordinate);
  };

  const icons = [
    {
      icon: <Medal size={40} strokeWidth={1} />,
    },
    {
      icon: <Earth size={40} strokeWidth={1} />,
    },
    {
      icon: <BookOpenCheck size={40} strokeWidth={1} />,
    },
    {
      icon: <GraduationCap size={40} strokeWidth={1} />,
    },
    {
      icon: <Trophy size={40} strokeWidth={1} />,
    },
    {
      icon: <LandPlot size={40} strokeWidth={1} />,
    },
    {
      icon: <Medal size={40} strokeWidth={1} />,
    },
    {
      icon: <Earth size={40} strokeWidth={1} />,
    },
    {
      icon: <BookOpenCheck size={40} strokeWidth={1} />,
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
          <div className="w-full lg:w-1/2 grid grid-cols-3 gap-5">
            {icons.map((icon, i) => {
              const row = Math.floor(i / 3);
              const col = i % 3;
              const isOrigin = row === origin[0] && col === origin[1];
              const delay = getDistance(row, col) * BASE_DELAY;
              return (
                <motion.div
                  className={` rounded-md h-full w-full py-5 flex-center text-background cursor-pointer`}
                  key={`${i}-${origin.join("-")}`}
                  style={{ backgroundColor: isOrigin ? "#3bbbfb" : "#051737" }}
                  initial={{
                    opacity: isOrigin ? 1 : 0,
                    scale: isOrigin ? 1 : 0.3,
                  }}
                  animate={{
                    opacity: 0.8,
                    scale: 1,
                  }}
                  transition={{ type: "spring", bounce: 0.5, delay: delay }}
                  onClick={() => handleClick(i)}
                >
                  {icon.icon}
                </motion.div>
              );
            })}
          </div>

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
