import { Button } from "@/shared/ui/Button";
import { HStack, VStack } from "@/shared/ui/Stack";

export const FeedbackForm = () => {
	return (
		<HStack className="w-[80%] bg-white absolute top-[-33%] right-[11%] p-10 rounded-3xl">
			<VStack align={"start"}>
				<p className={`text-xl text-yellow`}>актуально</p>
				<p className={`text-3xl text-[#000] font-bold`}>Получайте полезные рассылки о путешествиях</p>
			</VStack>
			<VStack align="start" gap="4">
				<p className="font-semibold">Введите e-mail адрес</p>
				<HStack gap="32">
					<input type="text" className="p-3 rounded" placeholder="name@domain.com" />
					<Button theme="mini">Подписаться на новости</Button>
				</HStack>
				<p className="font-semibold text-sm">
					подписываясь на новости, вы автоматически соглашаетесь с условиями обработки персональных данных и правилами
					рекламных рассылок
				</p>
			</VStack>
		</HStack>
	);
};
