import FormContainer from "@/components/AdmissionPage/FormContainer";
import Curriculum from "@/components/ElementarySchoolPage/Curriculum";
import Hero from "@/components/shared/Hero";
import Intro from "@/components/shared/Intro";
import React from "react";

export default function AdmissionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero
        title="Admission"
        subtitle="Shaping bright futures, one student at a time"
        className="bg-emerald-900"
      />
      <Intro
        title="Join our family"
        text="We’re more than a school — we’re a community built on trust, creativity, and growth. When you join our family, you become part of a place where students feel encouraged to explore, learn, and lead. Start your child’s journey with us by completing the admission form below."
      />
      <FormContainer />
    </div>
  );
}
