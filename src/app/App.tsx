import { OurSuggetions } from "@/sections/3_OurSuggetions";
import { Head } from "../sections/1_Header";
import { AboutHike } from "../sections/2_AboutHike";
import { PopularTours } from "../sections/4_PopularTours/ui/PopularTours";
import { Blog } from "../sections/5_Blog/ui/Blog";
import { Experience } from "@/sections/6_Experience";
import { Footer } from "@/widgets/Footer";

export const App = () => {
	return (
		<>
			<Head />
			<AboutHike />
			<OurSuggetions />
			<PopularTours />
			<Blog />
			<Experience />
			<Footer />
		</>
	);
};
