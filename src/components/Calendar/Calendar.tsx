import { format } from "date-fns/format";
import { getDay } from "date-fns/getDay";
import { enUS } from "date-fns/locale/en-US";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { ReactNode, useState } from "react";
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import AddEventModal from "../AddEventModal/AddEventModal";
import "./Calendar.scss";

const locales = {
    "en-US": enUS,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

interface CalendarProps {
    children?: ReactNode
}

function Calendar({ children }: CalendarProps) {
    const events = useSelector((state: RootState) => state.events);
    // const dispatch = useDispatch();

    const [openAddEventModel, setOpenAddEventModal] = useState<boolean>(false);

    const handleSelectEvent = () => {

    }

    const handleSelectSlot = () => {
        setOpenAddEventModal(true)
    }

    const handleModalClose = () => {
        setOpenAddEventModal(false)
    }

    return (
        <section className="calendar">
            <h2>A Beautiful Calendar</h2>
            <BigCalendar
                className="calendar__big-calendar"
                localizer={localizer}
                events={events}
                selectable
                onSelectEvent={handleSelectEvent}
                onSelectSlot={handleSelectSlot}
                popup
                startAccessor="start"
                endAccessor="end"
                views={ ["month"] }
            />
            {children}
            <AddEventModal
                open={openAddEventModel}
                onClose={handleModalClose}
            />
        </section>
    )
};

export default Calendar;
