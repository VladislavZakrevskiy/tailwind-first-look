import { cn } from "@/shared/lib/classNames";
import { FC } from "react";

interface Props {
	className?: string;
	onClick?: () => void;
}

export const Overlay: FC<Props> = ({ className, onClick }) => {
	return (
		<div
			onClick={onClick}
			style={{ background: "rgb(26 62 62 / var(--tw-bg-opacity))" }}
			className={cn(
				"bg-tahiti opacity-90 flex items-center justify-center fixed top-0 right-0 left-0 bottom-0 z-10 cursor-pointer",
				{},
				[className]
			)}
		/>
	);
};
