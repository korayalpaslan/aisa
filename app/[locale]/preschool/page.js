import Curriculum from "@/components/PrepSchoolPage/Curriculum";
import Hero from "@/components/PrepSchoolPage/Hero";
import Intro from "@/components/PrepSchoolPage/Intro";
import React from "react";

export default function PrepSchoolPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Intro />
      <Curriculum />
    </div>
  );
}
