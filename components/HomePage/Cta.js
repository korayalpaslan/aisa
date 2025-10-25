import React from "react";

export default function Cta() {
  return (
    <div className="bg-foreground py-20 text-background">
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center space-y-10 lg:space-y-0">
          <h1 className="font-serif text-4xl lg:text-5xl text-center lg:text-left text-background">
            Begin your journey at AISA today
          </h1>
          <div>
            <button className="bg-aisa-yellow px-6 py-2 rounded-4xl font-semibold text-foreground text-sm">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
