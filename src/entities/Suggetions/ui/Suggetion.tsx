import { HStack, VStack } from "@/shared/ui/Stack";
import { ReactNode, FC } from "react";
interface SuggetionProps {
	title: string;
	paragraph: string;
	Icon: ReactNode;
}

export const Suggetion: FC<SuggetionProps> = ({ Icon, paragraph, title }) => {
	return (
		<HStack gap="32">
			{Icon}
			<VStack gap="4" align="start">
				<h2 className="text-[1.125rem] font-bold">{title}</h2>
				<p className="text-sm">{paragraph}</p>
			</VStack>
		</HStack>
	);
};
