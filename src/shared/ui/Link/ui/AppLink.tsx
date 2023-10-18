import { cn } from "@/shared/lib/classNames/classNames";
import { memo, type FC, AnchorHTMLAttributes } from "react";

export type AppLinkTheme = "primary" | "secondary";

interface AppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = memo(({ className, theme = "primary", children, ...otherProps }) => {
	const ThemeMaper: Record<AppLinkTheme, string> = {
		primary: "text-tahiti ",
		secondary: "text-white hover:text-yellow",
	};

	return (
		<a
			{...otherProps}
			className={cn("cursor-pointer text-sm font-bold hover:underline", {}, [className, ThemeMaper[theme]])}
		>
			{children}
		</a>
	);
});
