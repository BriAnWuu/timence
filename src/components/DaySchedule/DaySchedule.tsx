import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { PropsWithChildren, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
// import { CurrentEvent } from "../../ts/interfaces/event.interface";
import { formatDate, formatDateDash } from "../../utils/formatDate";
import WordOfTheDay from "../WordOfTheDay/WordOfTheDay";
import "./DaySchedule.scss";

interface DayScheduleProps extends PropsWithChildren {
    // currentEvent: CurrentEvent;
}

function DaySchedule({ children }: DayScheduleProps) {
    const currentEvent = useSelector((state: RootState) => state.currentEvent);

    const [page, setPage] = useState<number>(0);

    const currentDates: number[] | undefined = currentEvent.slots;
    const pages: number | undefined = currentDates?.length;

    const handleNavigate = (navPage: number) => {
        if (!pages) return;
        const newPage = Math.max(0, Math.min(page + navPage, pages - 1));
        setPage(newPage);
    };

    if (!currentDates) return;
    if (pages && page >= pages) setPage(0);
    const title = formatDate(currentDates[page]);
    const pageDate = formatDateDash(currentDates[page]);
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
                <WordOfTheDay key={pageDate} currentDate={pageDate} />
            </section>
        </div>
    );
}

export default DaySchedule;
