import { FC } from "react";
import { VStack } from "../../Stack";

interface TitleProps {
	className?: string;
	title: string;
	paragraph: string;
	customTextSizes?: { title?: string; paragraph?: string };
	isStart?: boolean;
}

export const Title: FC<TitleProps> = ({ className, paragraph, title, customTextSizes, isStart = true }) => {
	return (
		<VStack className={className} align={isStart ? "start" : undefined}>
			<p className={`text-${customTextSizes?.paragraph ? `[${customTextSizes.paragraph}]` : "2xl"} text-yellow`}>
				{paragraph}
			</p>
			<p className={`text-${customTextSizes?.title ? `[${customTextSizes.title}]` : "4xl"} text-[#000] font-bold`}>
				{title}
			</p>
		</VStack>
	);
};
