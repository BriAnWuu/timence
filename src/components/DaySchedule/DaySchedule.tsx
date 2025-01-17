import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { formatDate, formatDateDash } from "../../utils/formatDate";
import RandomFact from "../RandomFact/RandomFact";
import WordOfTheDay from "../WordOfTheDay/WordOfTheDay";
import "./DaySchedule.scss";

function DaySchedule({}) {
    const currentEvent = useSelector((state: RootState) => state.currentEvent);
    if (!currentEvent.start) return;

    const [page, setPage] = useState<number>(0);
    // const [scrollPosition, setScrollPosition] = useState<number>(0);
    // const scrollerRef = useRef(null);

    const currentDates: number[] | undefined = currentEvent.slots;
    const pages: number | undefined = currentDates?.length;

    // const handleScroll = (direction: string) => {
    //     if (!scrollerRef.current) return;
    //     const vw = window.innerWidth;
    //     let newScrollPosition =
    //         direction === "right" ? scrollPosition + vw : scrollPosition - vw;

    //     newScrollPosition = Math.max(
    //         0,
    //         Math.min(newScrollPosition, scrollerRef.current.scrollWidth)
    //     );

    //     setScrollPosition(newScrollPosition);

    //     scrollerRef.current.scrollTo({
    //         left: newScrollPosition,
    //         behavior: "smooth",
    //     });
    // };

    return (
        <div className="day-schedule">
            <div className="day-schedule__scroller">
                {currentDates?.map((date) => (
                    <section key={date} className="day-schedule__scroller-item">
                        <div className="day-schedule__title-container">
                            <NavigateBeforeIcon
                                // onClick={() => handleScroll("left")}
                                onClick={() => setPage((prev) => prev - 1)}
                                style={{
                                    visibility:
                                        page === 0 ? "hidden" : "visible",
                                }}
                            />
                            <h3 className="day-schedule__title">
                                {formatDate(date)}
                            </h3>
                            <NavigateNextIcon
                                // onClick={() => handleScroll("right")}
                                onClick={() => setPage((prev) => prev + 1)}
                                style={{
                                    visibility:
                                        page + 1 === pages
                                            ? "hidden"
                                            : "visible",
                                }}
                            />
                        </div>
                        <RandomFact />
                        <WordOfTheDay currentDate={formatDateDash(date)} />
                    </section>
                ))}
            </div>
        </div>
    );
}

export default DaySchedule;
