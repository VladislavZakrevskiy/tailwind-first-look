import { cn } from "@/shared/lib/classNames";
import React, { FC, ReactNode } from "react";
import { Listbox as HListBox } from "@headlessui/react";
import { HStack } from "@/shared/ui/Stack";
import { Button } from "../../Button";
import { Arrow } from "@/app/assets/svgs/Arrow.";

export interface ListBoxItem {
	value: string;
	content: ReactNode;
}

interface Props {
	className?: string;
	items: ListBoxItem[];
	value?: string;
	defaultValue?: string;
	onChange?: <T extends string>(value: T) => void;
	readOnly?: boolean;
	label?: string;
}

export const Select: FC<Props> = ({ className, items, value, defaultValue, onChange, readOnly, label }) => {
	return (
		<HStack gap="4" className={"relative " + className}>
			{label && <span className="absolute bottom-[-2rem] text-white text-base">{label}</span>}
			<HListBox disabled={readOnly} as={"div"} value={value} onChange={onChange}>
				<HListBox.Button className={"bg-none border-none outline-none p-0 m-0"}>
					<Button onClick={() => {}} theme="opacity" className="flex items-center font-semibold">
						{value ?? defaultValue} <Arrow className="ml-8" />
					</Button>
				</HListBox.Button>
				<HListBox.Options className={cn("absolute w-[100%] border-white rounded-t", {}, [])}>
					<HListBox.Option disabled key={defaultValue} value={""} as={React.Fragment}>
						{() => (
							<li
								className={cn("pt-4 pb-4 pr-1 pl-1 font-bold text-white cursor-pointer bg-[#133030] w-[100%]", {
									defaultValue,
								})}
							>
								{value}
							</li>
						)}
					</HListBox.Option>
					{items.map((item) => {
						return (
							<HListBox.Option key={item.value} value={item.value} as={React.Fragment}>
								{() => (
									<li
										className={cn(
											"pt-4 pb-4 pr-1 pl-1 text-[#000] bg-white cursor-pointer hover:bg-tahiti hover:text-white w-[100%]",
											{}
										)}
									>
										{item.content}
									</li>
								)}
							</HListBox.Option>
						);
					})}
				</HListBox.Options>
			</HListBox>
		</HStack>
	);
};
