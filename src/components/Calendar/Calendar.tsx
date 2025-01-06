import { current } from "@reduxjs/toolkit";
import { format } from "date-fns/format";
import { getDay } from "date-fns/getDay";
import { enUS } from "date-fns/locale/en-US";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { ReactNode, useState } from "react";
import { Calendar as BigCalendar, dateFnsLocalizer, type Event } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { deselectCurrentEvent, setCurrentEvent } from "../../state/currentEvent/currentEventSlice";
import { RootState } from "../../state/store";
import { CalendarEventInfo } from "../../ts/interfaces/event.interface";
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
    const currentEvent = useSelector((state: RootState) => state.currentEvent);
    const dispatch = useDispatch();


    const [openAddEventModel, setOpenAddEventModal] = useState<boolean>(false);
    


    const handleSelectEvent = (event: CalendarEventInfo) => {
        dispatch(setCurrentEvent(event))
    }

    const handleSelectSlot = (event: Event) => {
        console.log(event)
        setOpenAddEventModal(true)
        dispatch(setCurrentEvent(event))
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
                onModalClose={handleModalClose}
            />
        </section>
    )
};

export default Calendar;
