import { VStack } from "@/shared/ui/Stack";
import { PhotoList } from "@/entities/Photo";
import { Title } from "@/shared/ui/Title";
import { Button } from "@/shared/ui/Button";

export const Experience = () => {
	return (
		<VStack className="mt-16 gap-10 mb-[10rem]">
			<Title paragraph="фото-отчет" title="Делимся впечатлениями" isStart={false} className="justify-center" />
			<PhotoList />
			<Button theme="mini">Наш pinterest</Button>
		</VStack>
	);
};
