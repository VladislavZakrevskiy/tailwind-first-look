import { VStack } from "@/shared/ui/Stack";
import { Title } from "@/shared/ui/Title";
import { Tours } from "@/entities/Tours";
import { Button } from "@/shared/ui/Button";

export const PopularTours = () => {
	return (
		<VStack className="gap-12">
			<Title
				paragraph="по версии отдыхающих"
				title="Популярные направления"
				isStart={false}
				className="justify-center"
			/>
			<Tours />
			<Button theme="max">Рейтинг направлений</Button>
		</VStack>
	);
};
