import Curriculum from "@/components/HighSchoolPage/Curriculum";
import Hero from "@/components/shared/Hero";
import Intro from "@/components/shared/Intro";
import React from "react";

export default function HighSchoolPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero
        title="High School"
        subtitle="Shaping Future Global Citizens"
        className="bg-foreground"
      />
      <Intro
        title="Our Approach"
        text="Our High School program is a journey that merges academic excellence with personal passion, designed to prepare our students for the world's most prestigious universities and a meaningful future. Our approach is to foster their intellectual independence, offer a flexible path to specialize in their fields of interest, and develop them into visionary leaders who are sensitive to global issues and solution-oriented."
      />
      <Curriculum />
    </div>
  );
}
