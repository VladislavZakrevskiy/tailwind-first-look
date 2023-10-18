import "./DateInput.css";

export const DateInput = ({ label }: { label?: string }) => {
	return (
		<div className="relative">
			<input
				className="input pt-3 pb-3 pr-6 pl-6 text-white bg-transparent border-white border-solid border-2 hover:border-solid hover:border-2 rounded transition duration-150 ease-linear"
				type="date"
			/>
			{label && <span className="absolute bottom-[-2rem] left-1 text-white text-base">{label}</span>}
		</div>
	);
};
