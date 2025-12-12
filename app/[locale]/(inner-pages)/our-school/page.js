import CampusContainer from "@/components/OurSchoolPage/CampusContainer";
import SafeGuarding from "@/components/OurSchoolPage/Safeguarding";
import Facilities from "@/components/OurSchoolPage/Facilities";
import Philosophy from "@/components/OurSchoolPage/Philosophy";
import SchoolIntro from "@/components/OurSchoolPage/SchoolIntro";
import Why from "@/components/OurSchoolPage/Why";
import Hero from "@/components/shared/Hero";
import React from "react";

export default function OurSchoolPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero
        title="Our School"
        subtitle="From Curiosity to Academic Mastery"
        className="bg-red-950"
      />

      <SchoolIntro />
      <Why />
      {/* <CampusContainer /> */}
      <Facilities />
      <Philosophy />
      <SafeGuarding />
    </div>
  );
}
