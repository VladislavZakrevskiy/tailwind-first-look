import { FC } from "react";
import { Flex, FlexProps } from "../Flex/Flex";

type Props = Omit<FlexProps, "direction">;

export const HStack: FC<Props> = (props) => {
	return <Flex direction="row" {...props} />;
};
