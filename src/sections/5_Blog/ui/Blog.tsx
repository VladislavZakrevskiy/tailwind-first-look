import { Blogs } from "@/entities/Blog";
import { Button } from "@/shared/ui/Button";
import { VStack } from "@/shared/ui/Stack";
import { Title } from "@/shared/ui/Title";

export const Blog = () => {
	return (
		<VStack className="mt-5 gap-10">
			<Title paragraph="делимся впечатлениями" title="Блог о путешествиях" isStart={false} className="justify-center" />
			<Blogs />
			<Button theme="max" className="font-semibold">
				Другие материалы
			</Button>
		</VStack>
	);
};
