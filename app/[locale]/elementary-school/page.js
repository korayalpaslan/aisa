import Curriculum from "@/components/ElementarySchoolPage/Curriculum";
import Hero from "@/components/shared/Hero";
import Intro from "@/components/shared/Intro";
import React from "react";

export default function ElementarySchoolPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero title="Elementary School" subtitle="Nurturing Curious Minds" />
      <Intro
        title="Our Approach"
        text="In our Elementary School, we cultivate each child's innate curiosity and enthusiasm for learning in a safe and inspiring environment. Our goal is to build a strong academic foundation through an inquiry-based approach while strengthening our students' social and emotional intelligence, raising them as self-confident, respectful, and lifelong learners. We see their small steps as the most solid foundation for their future great achievements."
      />
      <Curriculum />
    </div>
  );
}
