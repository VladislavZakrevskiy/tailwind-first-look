import { HStack } from "@/shared/ui/Stack";
import { VStack } from "../../../shared/ui/Stack/VStack/VStack";
import { AppLink } from "@/shared/ui/Link";
import { Button } from "@/shared/ui/Button";
import { TitleIcon } from "@/app/assets/svgs/Title";
import { LogoIcon } from "@/app/assets/svgs/Logo";

export const Header = () => {
	return (
		<HStack justify="evenly" className="pt-4" max>
			<VStack gap="8">
				<LogoIcon />
				<TitleIcon />
			</VStack>

			<HStack gap="32">
				<AppLink>Главная</AppLink>
				<AppLink>Про гида</AppLink>
				<AppLink>Программа тура</AppLink>
				<AppLink>Стоимость</AppLink>
				<AppLink>Блог</AppLink>
				<AppLink>Контакты</AppLink>
				<Button theme="mini" onClick={() => {}}>
					{/* Какой-то запрос, здесь только мок функция, потому что задача - верстка */}
					Консультация
				</Button>
			</HStack>
		</HStack>
	);
};
