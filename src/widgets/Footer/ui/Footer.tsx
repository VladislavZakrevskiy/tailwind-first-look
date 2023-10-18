import { Pip } from "@/app/assets/svgs/Pip";
import { AppLink } from "@/shared/ui/Link";
import { HStack, VStack } from "@/shared/ui/Stack";
import { FeedbackForm } from "../../../features/FeedbackForm/ui/FeedbackForm";

const Point = ({ text }: { text: string }) => (
	<AppLink theme="secondary" className="flex gap-2 justify-center items-center">
		<Pip /> {text}
	</AppLink>
);

export const Footer = () => {
	const ourServicesTexts = [
		"Прогулки в горы летом",
		"Зимние походы в горы",
		"Посещение храмов в горах",
		"Экстремальные виды туризма",
		"Походы в джунглях Амазонии",
		"Поездка в Африку",
	];

	const importantForJourneyTexts = [
		"Как собрать в долгий поход?",
		"Жизненно важные предметы для похода",
		"Медицинская страховка, гарантии безопасности",
		"Если вы врач — загляните сюда",
	];

	return (
		<div className="relative">
			<FeedbackForm />
			<VStack>
				<HStack className="bg-tahiti p-12 pt-16 w-[100%] ">
					<VStack className="w-1/2 gap-10 h-[100%]" align="start" justify="start">
						<h3 className="text-white text-2xl font-semibold ">Компания «РумТибет»</h3>
						<p className="text-white text-sm">
							Его корни уходят в один фрагмент классической латыни 45 года н. э., то есть более двух тысячелетий назад.
							Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney.
						</p>
						<HStack gap="32">
							<AppLink theme="secondary">info@domain.com</AppLink>
							<AppLink theme="secondary">+7 (123) 456-78-90</AppLink>
						</HStack>
					</VStack>
					<VStack className="w-1/4 h-[100%] gap-10" justify="start">
						<h3 className="text-white text-2xl font-semibold ">Наши услуги</h3>
						<VStack className="gap-3">
							{ourServicesTexts.map((text) => (
								<Point text={text} />
							))}
						</VStack>
					</VStack>
					<VStack className="w-1/4 gap-10 h-[100%] " justify="start">
						<h3 className="text-white text-2xl font-semibold ">Важно для путешествий</h3>
						<VStack className="gap-3">
							{importantForJourneyTexts.map((text) => (
								<Point text={text} />
							))}
						</VStack>
					</VStack>
				</HStack>
				<HStack className="bg-[#000] pr-10 pl-10 pt-5 pb-5" max justify="between">
					<p className="text-white">ИП Константинопольский К.К., 2023</p>
					<AppLink theme="secondary">Политика обработки персональных данных</AppLink>
				</HStack>
			</VStack>
		</div>
	);
};
