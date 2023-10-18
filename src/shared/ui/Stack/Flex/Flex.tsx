import { cn } from "@/shared/lib/classNames";
import { FC, ReactNode } from "react";

export type FlexJustify = "start" | "center" | "end" | "between" | "evenly";
export type FlexAlign = "start" | "center" | "end";
export type FlexDirection = "row" | "column";
export type FlexGap = "0" | "4" | "8" | "16" | "32";

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
	className?: string;
	children: ReactNode;
	justify?: FlexJustify;
	align?: FlexAlign;
	direction?: FlexDirection;
	gap?: FlexGap;
	max?: boolean;
}

const justifyClasses: Record<FlexJustify, string> = {
	start: "justify-start",
	end: "justify-end",
	center: "justify-center",
	between: "justify-between",
	evenly: "justify-evenly",
};

const alignClasses: Record<FlexAlign, string> = {
	start: "items-start",
	end: "items-end",
	center: "items-center",
};

const directionClasses: Record<FlexDirection, string> = {
	row: "flex-row",
	column: "flex-col",
};

const gapClasses: Record<FlexGap, string> = {
	"0": "gap-0",
	"4": "gap-1",
	"8": "gap-2",
	"16": "gap-4",
	"32": "gap-8",
};

export const Flex: FC<FlexProps> = (props) => {
	const {
		className,
		children,
		direction = "row",
		align = "center",
		justify = "start",
		gap = "0",
		max = false,
		...otherProps
	} = props;

	const classNames = [
		className,
		justifyClasses[justify],
		alignClasses[align],
		directionClasses[direction],
		gapClasses[gap],
	];

	const mods = {
		["w-[100%]"]: max,
	};

	return (
		<div {...otherProps} className={cn("flex ", mods, classNames)}>
			{children}
		</div>
	);
};
