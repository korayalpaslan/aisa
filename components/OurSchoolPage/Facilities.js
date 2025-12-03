import React from "react";
import {
  Soup,
  Clover,
  Binary,
  Palette,
  Dumbbell,
  FlaskConical,
} from "lucide-react";
export default function Facilities() {
  return (
    <div className="py-20">
      <div className="space-y-5 max-w-4xl mx-auto text-foreground text-center wrapper ">
        <h2 className="font-serif text-4xl lg:text-5xl">Our Facilities</h2>
        <p className="lg:text-lg mb-10 lg:w-1/2 mx-auto">
          Lorem ipsum dolor sit amet consectetur. Malesuada elit fringilla
          tellus etiam. Consequat felis faucibus metus turpis pretium. Risus
          ultrices enim netus et nisl vulputate risus turpis et.
        </p>
      </div>
      <div className="mt-20 grid lg:grid-cols-3 gap-6 wrapper">
        <div className="space-y-3 p-6 border border-foreground rounded-md">
          <div className="w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-md ">
            <Soup />
          </div>

          <h2 className="font-semibold text-lg">Canteen</h2>
          <p className="">
            Our school cafeteria is spacious, bright, and filled with natural
            light. Fresh and balanced menus are prepared every day. Our students
            enjoy their meals in a hygienic and safe environment.
          </p>
        </div>
        <div className="space-y-3 p-6 border border-foreground rounded-md">
          <div className="w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-md ">
            <Binary />
          </div>

          <h2 className="font-semibold text-lg">Robotics Lab</h2>
          <p className="">
            Our Robotics and Coding Lab is equipped with modern technology.
            Here, our students enhance their creativity by designing robots,
            writing code, and developing projects.
          </p>
        </div>
        {/* <div className="space-y-3 p-6 border border-foreground rounded-md">
          <div className="w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-md ">
            <Music4 />
          </div>

          <h2 className="font-semibold text-lg">Music Studio</h2>
          <p className="">
            Our Music Studio provides a comfortable environment where students
            can develop their rhythm, melody, and instrumental skills. While
            exploring music, our children also build self-confidence.
          </p>
        </div> */}
        <div className="space-y-3 p-6 border border-foreground rounded-md">
          <div className="w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-md ">
            <Palette />
          </div>

          <h2 className="font-semibold text-lg">Art Studio</h2>
          <p className="">
            Our bright and spacious Art Studio, with its view of nature, is a
            place where students can freely explore art. It provides an ideal
            environment for drawing, painting, music, crafts, and creative art
            activities.
          </p>
        </div>
        <div className="space-y-3 p-6 border border-foreground rounded-md">
          <div className="w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-md ">
            <Dumbbell />
          </div>

          <h2 className="font-semibold text-lg">Gymnasium</h2>
          <p className="">
            Our spacious, safe gymnasium is fully equipped for children’s
            development, where they enhance balance, flexibility, and
            coordination through fun activities.
          </p>
        </div>
        <div className="space-y-3 p-6 border border-foreground rounded-md">
          <div className="w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-md ">
            <Clover />
          </div>

          <h2 className="font-semibold text-lg">School Garden</h2>
          <p className="">
            In our School Garden, students plant and grow their own vegetables,
            harvest them, and collect eggs from our chickens, learning about
            nature and developing responsibility.
          </p>
        </div>
        <div className="space-y-3 p-6 border border-foreground rounded-md">
          <div className="w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-md ">
            <FlaskConical />
          </div>

          <h2 className="font-semibold text-lg">Science Lab</h2>
          <p className="">
            Our spacious and modern science laboratory is equipped with
            microscopes and advanced scientific materials. Students learn
            science hands-on by conducting experiments in a safe environment.
          </p>
        </div>
      </div>
    </div>
  );
}
