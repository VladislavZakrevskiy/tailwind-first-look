import { Button } from "@/shared/ui/Button";
import { DateInput } from "@/shared/ui/DateInput";
import { Select } from "@/shared/ui/Select";
import { HStack } from "@/shared/ui/Stack";

export const TourForm = () => {
	return (
		<HStack className="w-[100&] rounded-xl backdrop-blur-lg bg-[rgba(255,255,255,0.2)] min-h-[100px] gap-8 p-8 pb-20 justify-items-center">
			<Select
				label="Выберите из списка"
				value="Локация для тура"
				items={[
					{ content: "Великобритания", value: "uk" },
					{ content: "Россия", value: "ru" },
					{ content: "США", value: "usa" },
				]}
			/>

			<HStack>
				<DateInput label="Укажите диапазон" />
				<DateInput />
			</HStack>

			<Select
				label="минимум 4 человека"
				value="Участники"
				items={[
					{ content: "4", value: "4" },
					{ content: "5", value: "5" },
					{ content: "6", value: "6" },
				]}
			/>

			<Button className="ml-auto" theme="clear">
				Найти программу
			</Button>
		</HStack>
	);
};
