"use client";

export default function Intro({ title, text }) {
  return (
    <div className="py-20">
      <div className="space-y-5 max-w-4xl mx-auto text-foreground text-center wrapper ">
        <h2 className="font-serif text-4xl lg:text-5xl">{title}</h2>
        <p className="lg:text-lg mb-10">{text}</p>
      </div>
    </div>
  );
}
