import { Card } from "@/shared/ui/Card";
import { AppLink } from "@/shared/ui/Link";
import { HStack, VStack } from "@/shared/ui/Stack";
import { FC } from "react";

interface BlogProps {
	className?: string;
	src: string;
	title: string;
	paragraph: string;
	date: string;
}

export const Blog: FC<BlogProps> = ({ date, paragraph, src, title, className }) => {
	return (
		<Card
			className={className}
			leftSide={<img src={src} alt="" />}
			rightTopSide={
				<VStack gap="4" align="start">
					<h2 className="text-[#000] text-left hover:underline hover:text-tahiti font-semibold text-2xl cursor-pointer">
						{title}
					</h2>
					<p className="text-left">{paragraph}</p>
				</VStack>
			}
			interactiveSide={
				<HStack justify="between" max>
					<p className="text-yellow text-base">{date}</p>
					<AppLink>читать статью</AppLink>
				</HStack>
			}
		/>
	);
};
