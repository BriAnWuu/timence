import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { PropsWithChildren, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { formatDate, formatDateDash } from "../../utils/formatDate";
import EventList from "../EventList/EventList";
import WordOfTheDay from "../WordOfTheDay/WordOfTheDay";
import "./DaySchedule.scss";

function DaySchedule({ children }: PropsWithChildren) {
    // redux states
    const currentEvent = useSelector((state: RootState) => state.currentEvent);

    // local stage
    // display in page format when multiple time slots selected
    const [page, setPage] = useState<number>(0);

    // handle functions
    const handleNavigate = (navPage: number) => {
        if (!pages) return;
        const newPage = Math.max(0, Math.min(page + navPage, pages - 1));
        setPage(newPage);
    };

    // render component
    const currentDates: number[] | undefined = currentEvent.slots;
    const pages: number | undefined = currentDates?.length;

    if (!currentDates) return;
    if (pages && page >= pages) setPage(0);
    const targetDate = currentDates[page];
    const title = formatDate(targetDate);
    return (
        <div className="day-schedule">
            <section className="day-schedule__schedule-page">
                <div key={title} className="day-schedule__title-container">
                    <NavigateBeforeIcon
                        onClick={() => handleNavigate(-1)}
                        style={{
                            visibility: page <= 0 ? "hidden" : "visible",
                        }}
                    />
                    <h3 className="day-schedule__title">{title}</h3>
                    <NavigateNextIcon
                        onClick={() => handleNavigate(1)}
                        style={{
                            visibility:
                                page + 1 === pages ? "hidden" : "visible",
                        }}
                    />
                </div>
                {children}

                <div key={targetDate}>
                    <EventList currentDate={targetDate} />
                    <WordOfTheDay currentDate={formatDateDash(targetDate)} />
                </div>
            </section>
        </div>
    );
}

export default DaySchedule;
