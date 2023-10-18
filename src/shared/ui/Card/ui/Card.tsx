import { FC } from "react";
import { ReactNode } from "react";
import { HStack, VStack } from "../../Stack";

interface CardProps {
	className?: string;
	leftSide: ReactNode;
	rightTopSide: ReactNode;
	interactiveSide: ReactNode;
}

export const Card: FC<CardProps> = ({ className, leftSide, interactiveSide, rightTopSide }) => {
	return (
		<HStack gap="8" className={"w-[100%]" + className}>
			<div className="w-1/2">{leftSide}</div>
			<VStack className="w-1/2 justify-center gap-10 ">
				{rightTopSide}
				{interactiveSide}
			</VStack>
		</HStack>
	);
};
