import Contact from "@/components/sections/contact";
import DashedLine from "@/components/dashed-line";
import Personal from "@/components/sections/personal";
import Writings from "@/components/sections/writings";
import Stack from "@/components/sections/stack";
import Projects from "@/components/sections/projects";
import Intro from "@/components/sections/intro";

export default function Home() {
   return (
      <div className="space-y-12">
         <Intro />
         <Projects />
         <Stack />
         <Writings />
         <Personal />
         <DashedLine />
         <Contact />
      </div>
   );
}
