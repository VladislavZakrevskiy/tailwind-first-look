import { CalendarIcon } from "./Calendar";
import { InnerCalendarIcon } from "./InnerCalendar";

export const Calendar = () => {
	return (
		<div className="relative">
			<InnerCalendarIcon className="absolute t-0" />
			<CalendarIcon />
		</div>
	);
};
