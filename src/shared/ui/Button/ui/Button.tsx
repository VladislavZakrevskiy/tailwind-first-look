import { cn } from "@/shared/lib/classNames";
import { FC, ReactNode, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: ReactNode;
	theme: ButtonTheme;
	onClick?: () => void;
	placeholder?: string;
}

type ButtonTheme = "clear" | "mini" | "max" | "opacity";

export const Button: FC<Props> = ({ className, children, theme, onClick, placeholder }) => {
	const ThemeMaper: Record<ButtonTheme, string> = {
		mini: "pt-3 pb-3 pr-6 pl-6 text-white bg-tahiti hover:border-tahiti hover:bg-white hover:text-tahiti ",
		max: "pt-4 pb-4 pr-9 pl-9 text-white bg-tahiti hover:border-tahiti hover:bg-white hover:text-tahiti",
		clear: "pt-3 pb-3 pr-6 pl-6 text-tahiti  bg-white hover:border-white hover:bg-tahiti hover:text-white",
		opacity: "pt-3 pb-3 pr-6 pl-6 text-white bg-transparent border-white ",
	};

	return (
		<button
			placeholder={placeholder}
			onClick={() => {
				onClick?.();
			}}
			className={cn(
				"border-solid border-2 font-semibold border-tahiti hover:border-solid hover:border-2 rounded transition duration-150 ease-linear",
				{},
				[className, ThemeMaper[theme]]
			)}
		>
			{children}
		</button>
	);
};
