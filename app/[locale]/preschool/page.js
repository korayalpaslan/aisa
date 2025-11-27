import Curriculum from "@/components/PrepSchoolPage/Curriculum";
import Hero from "@/components/shared/Hero";
import Intro from "@/components/shared/Intro";
import React from "react";

export default function PrepSchoolPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero title="Preschool" subtitle="The Magical Beginning of Learning" />
      <Intro
        title="Our Approach"
        text="ur Preschool marks the first and most precious step in our children's educational lives. In this magical period, our approach is to provide a journey of discovery rooted in play within a loving environment where every child feels safe, happy, and valued. Our goal is to nurture their innate curiosity and creativity while developing their social, emotional, and motor skills. By enabling them to see learning as an adventure, we instill in them a lifelong love of learning."
      />
      <Curriculum />
    </div>
  );
}
