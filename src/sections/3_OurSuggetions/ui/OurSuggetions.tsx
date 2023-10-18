import { People } from "@/app/assets/svgs/People";
import { Shield } from "@/app/assets/svgs/Shield";
import { Tag } from "@/app/assets/svgs/Tag";
import { Suggetion } from "@/entities/Suggetions";
import { AppImage } from "@/shared/ui/AppImage";
import { Button } from "@/shared/ui/Button";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Title } from "@/shared/ui/Title";

export const OurSuggetions = () => {
	return (
		<HStack justify="center" className="mt-8">
			<VStack align="start" className="gap-10 p-5">
				<Title paragraph="наше предложение" title="Лучшие программы для тебя" />
				<p>
					Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад.
					Ричард МакКлинток, профессор латыни из колледжа.
				</p>
				<VStack className="gap-10">
					<Suggetion
						Icon={<People className="w-[11%] " />}
						title="Опытный гид"
						paragraph="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации."
					/>
					<Suggetion
						Icon={<Shield className="w-[10%] " />}
						title="Безопасный поход"
						paragraph="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации."
					/>
					<Suggetion
						Icon={<Tag className="w-[7%] " />}
						title="Лояльные цены"
						paragraph="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации."
					/>
				</VStack>
				<Button className="text-left" theme="mini">
					Стоимость программ
				</Button>
			</VStack>

			<div className="grid grid-cols-2 grid-rows-2 w-[100%] gap-5">
				<AppImage src={`${__API__}/pictures/RTtour.png`} className="justify-self-end" />
				<AppImage src={`${__API__}/pictures/LTtour.png`} className="" />
				<AppImage src={`${__API__}/pictures/LBtour.png`} className="justify-self-end" />
				<AppImage src={`${__API__}/pictures/RBtour.png`} className="" />
			</div>
		</HStack>
	);
};
