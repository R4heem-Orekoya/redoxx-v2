import DashedLine from "@/components/dashed-line";
import Contact from "@/components/sections/contact";
import Intro from "@/components/sections/intro";
import Personal from "@/components/sections/personal";
import Projects from "@/components/sections/projects";
import Stack from "@/components/sections/stack";
import Writings from "@/components/sections/writings";

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
