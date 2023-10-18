import { Header } from "@/widgets/Header";
import "./Head.css";
import { TourForm } from "../../../features/TourForm/ui/TourForm";

export const Head = () => {
	return (
		<div className="background">
			<Header />
			<div className="flex flex-col p-20 gap-8">
				<p className="text-white text-[3.125rem] font-bold ">Насладись прогулкой в горах с командой единомышленников</p>
				<TourForm />
			</div>
		</div>
	);
};
