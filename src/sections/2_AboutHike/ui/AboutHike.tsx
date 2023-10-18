import { AppImage } from "@/shared/ui/AppImage";
import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { Title } from "../../../shared/ui/Title/ui/Title";

export const AboutHike = () => {
	return (
		<Card
			className="w-[100%]"
			leftSide={
				<div>
					<AppImage
						src={`${__API__}/pictures/House.png`}
						className="z-10 w-[50%] translate-x-[75%] translate-y-[100%]"
					/>
					<AppImage src={`${__API__}/pictures/Mountain.png`} className="z-0 w-[50%]  translate-y-[-50%]" />
				</div>
			}
			rightTopSide={
				<div className="flex flex-col gap-10">
					<Title
						paragraph="о нашем походе"
						title="Исследуйте все горные массивы мира вместе с нами"
						customTextSizes={{ title: "2rem" }}
					/>
					<p className="text-[1.125rem] text-[#000]">
						Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад.
						Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных
						слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.
					</p>
				</div>
			}
			interactiveSide={
				<div className="flex justify-start w-[100%]">
					<Button theme="mini">Программа тура</Button>
				</div>
			}
		/>
	);
};
