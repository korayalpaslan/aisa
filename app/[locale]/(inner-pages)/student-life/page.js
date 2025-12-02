import Hero from "@/components/shared/Hero";
import Intro from "@/components/shared/Intro";
import Arts from "@/components/StudentLifePage/Arts";
import Athletics from "@/components/StudentLifePage/Athletics";
import Club from "@/components/StudentLifePage/Club";
import Community from "@/components/StudentLifePage/Community";
import React from "react";

export default function StudentLifePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero
        title="Student Life"
        subtitle="A World Beyond the Classroom"
        className="bg-yellow-500"
        light={true}
      />
      <Intro
        title=""
        text="At our school, education extends far beyond the classroom walls. Our Student Life program offers a dynamic and enriching experience that integrates our students' academic achievements with social, artistic, and athletic development. This is where they discover new interests, build lifelong friendships, develop leadership skills, and realize their full potential. We believe in creating a vibrant community where every student feels a sense of belonging, is supported, and shines."
      />
      <Club />
      <Athletics />
      <Arts />
      <Community />
    </div>
  );
}
