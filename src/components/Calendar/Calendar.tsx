import { Box, Button, ButtonGroup } from "@mui/material";
import { format } from "date-fns/format";
import { getDay } from "date-fns/getDay";
import { enUS } from "date-fns/locale/en-US";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { PropsWithChildren, useEffect, useState } from "react";
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch, useSelector } from "react-redux";
import EventsService from "../../api/events/service";
import TagsService from "../../api/tags/service";
import {
    setCurrentEvent,
    setCurrentSlot,
} from "../../state/currentEvent/currentEventSlice";
import { fetchEvents } from "../../state/events/eventsSlice";
import { RootState } from "../../state/store";
import { fetchTags } from "../../state/tags/tagsSlice";
import { CalendarEventInfo } from "../../ts/interfaces/event.interface";
import { Slot } from "../../ts/interfaces/slot.interface";
import {
    deserializeDate,
    serializeDate,
    serializeDateArray,
} from "../../utils/serializeDate";
import AddEventModal from "../AddEventModal/AddEventModal";
import AddTagModal from "../AddTagModal/AddTagModal";
import DeleteEventModal from "../DeleteEventModal/DeleteEventModal";
import Loading from "../Loading/Loading";
import "./Calendar.scss";

const locales = {
    "en-US": enUS,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

function Calendar({ children }: PropsWithChildren) {
    // redux states
    const events = useSelector((state: RootState) => state.events);
    const tags = useSelector((state: RootState) => state.tags);
    const dispatch = useDispatch();

    // local states
    const [openAddTagModel, setOpenAddTagModal] = useState<boolean>(false);
    const [openAddEventModel, setOpenAddEventModal] = useState<boolean>(false);
    const [openDeleteEventModal, setOpenDeleteEventModal] =
        useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    // fetch data
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [fetchedEvents, fetchedTags] = await Promise.all([
                    EventsService.getMockEvents(),
                    TagsService.getMockTags(),
                ]);
                dispatch(fetchEvents(fetchedEvents));
                dispatch(fetchTags(fetchedTags));
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // handle functions
    const handleSelectEvent = (event: CalendarEventInfo) => {
        setOpenDeleteEventModal(true);
        dispatch(setCurrentEvent(serializeDate(event)));
    };
    const handleSelectSlot = (event: Slot) => {
        setOpenAddEventModal(true);
        dispatch(setCurrentSlot(serializeDate(serializeDateArray(event))));
        console.log("select slot");
    };

    // render component
    if (loading) {
        return (
            <div className="calendar__load-error">
                <Loading />
            </div>
        );
    }
    if (error) {
        return (
            <div className="calendar__load-error">
                Error occurred when fetching calendar data
            </div>
        );
    }
    return (
        <section className="calendar">
            <h2 className="calendar__title">Timence is A Beautiful Calendar</h2>
            <Box sx={{ display: "flex", marginBottom: 1 }}>
                <ButtonGroup size="small">
                    <Button
                        onClick={() => setOpenAddTagModal(true)}
                        color="info"
                    >
                        Create Tag
                    </Button>
                </ButtonGroup>
            </Box>
            <BigCalendar
                className="calendar__big-calendar"
                localizer={localizer}
                events={events.map((event) => deserializeDate(event))}
                selectable
                onSelectEvent={handleSelectEvent}
                onSelectSlot={handleSelectSlot}
                popup
                startAccessor="start"
                endAccessor="end"
                views={["month"]}
                eventPropGetter={(event) => {
                    const hasTag = tags.find((tag) => tag._id === event.tagId);
                    return {
                        style: {
                            backgroundColor: hasTag ? hasTag.color : "#06448f",
                            borderColor: hasTag ? hasTag.color : "#06448f",
                        },
                    };
                }}
            />
            {children}
            <AddTagModal
                open={openAddTagModel}
                setModalOpen={setOpenAddTagModal}
            />
            <AddEventModal
                open={openAddEventModel}
                setModalOpen={setOpenAddEventModal}
            />
            <DeleteEventModal
                open={openDeleteEventModal}
                setModalOpen={setOpenDeleteEventModal}
            />
        </section>
    );
}

export default Calendar;
