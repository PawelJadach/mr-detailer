import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Gallery />
			<Pricing />
			<Contact />
		</>
	);
}
