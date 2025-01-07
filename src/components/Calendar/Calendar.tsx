import { format } from "date-fns/format";
import { getDay } from "date-fns/getDay";
import { enUS } from "date-fns/locale/en-US";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { ReactNode, useState } from "react";
import { Calendar as BigCalendar, dateFnsLocalizer, type Event } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { deselectCurrentEvent, setCurrentDate, setCurrentEvent } from "../../state/currentEvent/currentEventSlice";
import { RootState } from "../../state/store";
import { CalendarEventInfo } from "../../ts/interfaces/event.interface";
import { deserializeDate, serializeDate } from "../../utils/serializeDate";
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
    // redux states
    const events = useSelector((state: RootState) => state.events);
    const dispatch = useDispatch();

    // local states
    const [openAddEventModel, setOpenAddEventModal] = useState<boolean>(false);
    

    // handle functions
    const handleSelectEvent = (event: CalendarEventInfo) => {
        console.log(event)
        dispatch(setCurrentEvent(serializeDate(event)))
    }
    const handleSelectSlot = (event: Event) => {
        console.log(event)
        setOpenAddEventModal(true)
        dispatch(setCurrentDate(serializeDate({
            start: event.start,
            end: event.end,
        })))
    }
    const handleModalClose = () => {
        setOpenAddEventModal(false)
        dispatch(deselectCurrentEvent())
        // clear eventform
    }



    return (
        <section className="calendar">
            <h2>A Beautiful Calendar</h2>
            <BigCalendar
                className="calendar__big-calendar"
                localizer={localizer}
                events={ events.map((event) => (
                    deserializeDate(event)
                ))}
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
                onModalClose={handleModalClose}
            />
        </section>
    )
};

export default Calendar;
