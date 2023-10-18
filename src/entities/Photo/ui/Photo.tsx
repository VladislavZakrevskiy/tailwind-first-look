import { AppImage } from "@/shared/ui/AppImage";
import { FC } from "react";

interface PhotoProps {
	className?: string;
	src: string;
}

export const Photo: FC<PhotoProps> = ({ src, className }) => {
	return <AppImage src={src} alt="Photo" className={className} />;
};
