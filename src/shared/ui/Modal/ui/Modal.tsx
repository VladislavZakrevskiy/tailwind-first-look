import { cn, Mods } from "@/shared/lib/classNames";
import { FC, ReactNode } from "react";
import { Portal } from "@/shared/ui/Portal";
import { Overlay } from "@/shared/ui/Overlay";
import { useModal } from "@/shared/lib/hooks/useModals/useModal";

interface Props {
	className?: string;
	children: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
	lazy?: boolean;
}

export const Modal: FC<Props> = ({ className, children, isOpen, onClose, lazy }) => {
	const { closeHandler, isClosing, isMounting } = useModal({
		isOpen,
		onClose,
		animationDelay: 300,
	});

	const mods: Mods = {
		["pointer-events-auto opacity-1 z-20 "]: isOpen,
		["opacity-0"]: !isOpen,
	};

	const modsContent: Mods = {
		["p-5 rounded-xl scale-50 max-w-[60%] z-20"]: !isOpen && !isClosing,
		["scale-100"]: isOpen,
		["scale-20"]: isClosing,
	};

	if (lazy && !isMounting) {
		return null;
	}

	return (
		<Portal>
			<div
				className={cn(
					"transition-transform fixed top-0 bottom-0 right-0 left-0 z-20 pointer-events-none text-tahiti flex justify-center items-center",
					mods,
					[className]
				)}
			>
				<Overlay onClick={closeHandler} />
				<div className={cn("", modsContent)}>{children}</div>
			</div>
		</Portal>
	);
};
