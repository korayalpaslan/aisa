import Curriculum from "@/components/MiddleSchoolPage/Curriculum";
import Hero from "@/components/shared/Hero";
import Intro from "@/components/shared/Intro";
import React from "react";

export default function MiddleSchoolPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero
        title="Middle School"
        subtitle="Empowering Young Leaders of Change"
      />
      <Intro
        title="Our Approach"
        text="Middle school is a critical period of transformation, where academic depth increases and personal identity takes shape. Our approach during this dynamic stage is to guide our students in managing their growing independence and to prepare them for more challenging intellectual goals. We see them not merely as consumers of information, but as emerging leaders who critically analyze, debate, and generate their own ideas."
      />
      <Curriculum />
    </div>
  );
}
