import { format } from "date-fns/format";
import { getDay } from "date-fns/getDay";
import { enUS } from "date-fns/locale/en-US";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
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


function Calendar() {
    return (
        <section className="calendar">
            <h2>A Beautiful Calendar</h2>
            <BigCalendar
                className="calendar__big-calendar"
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
            />

        </section>
    )
};

export default Calendar;
