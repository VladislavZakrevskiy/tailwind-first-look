import { Star } from "@/app/assets/svgs/Star";
import { cn } from "@/shared/lib/classNames";
import { FC } from "react";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Button } from "@/shared/ui/Button";
import "./Tour.css";

interface Props {
	className?: string;
	src: string;
	title: string;
	postTitle: string;
	paragraph: string;
	price: string;
	rating: number;
}

export const Tour: FC<Props> = ({ className, src, paragraph, postTitle, price, rating, title }) => {
	return (
		<div className={cn(`relative overflow-y-hidden`, {}, [className])}>
			<img src={src} alt="Tour Photo" className="overflow-hidden" />
			<div className="absolute backdrop-blur-lg bg-[rgba(255,255,255,0.3)] flex justify-between items-center gap-1 p-2 top-[15%] right-0 rounded-s">
				<Star /> {rating}
			</div>
			<VStack className="slide w-[100%] h-[100%] rounded-[2rem]">
				<HStack className="justify-between w-[100%] p-5" align="center">
					<VStack align="start">
						<h2 className={`text-2xl text-white font-bold`}>{title}</h2>
						<h3 className={`text-sm text-white`}>{postTitle}</h3>
					</VStack>
					<p className="backdrop-blur-lg bg-[rgba(255,255,255,0.3)] p-[0.5rem_1rem] text-xl text-white font-bold rounded">
						{price}
					</p>
				</HStack>
				<p className="text-[1.125rem] p-[0.5rem_1rem] text-white">{paragraph}</p>
				<Button className="mt-14 m-4 self-start" theme="mini">
					Подробнее
				</Button>
			</VStack>
		</div>
	);
};
