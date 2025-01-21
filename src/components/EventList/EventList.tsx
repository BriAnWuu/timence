// import "./EventList.scss";
import CallIcon from "@mui/icons-material/Call";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SubjectIcon from "@mui/icons-material/Subject";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { ReduxCalendarEventInfo } from "../../ts/interfaces/event.interface";
import { getDailySchedule, getTagColor } from "../../utils/eventDetail";
import ItemDetailWithIcon from "../ItemDetailWithIcon/ItemDetailWithIcon";

interface EventListProps {
    currentDate: number;
}
interface EventDetailProps {
    eventData: ReduxCalendarEventInfo;
}

function EventList({ currentDate }: EventListProps) {
    // redux state
    const events = useSelector((state: RootState) => state.events);

    const eventList = getDailySchedule(currentDate, events);
    console.log(eventList);
    console.log(currentDate);
    console.log(events);

    return (
        <section className="day-schedule__event-list">
            <ul>
                {eventList?.map((e) => (
                    <EventDetail key={e._id} eventData={e} />
                ))}
            </ul>
        </section>
    );
}

export default EventList;

const EventDetail = ({ eventData }: EventDetailProps) => {
    // redux state
    const tags = useSelector((state: RootState) => state.tags);

    return (
        <li className="day-schedule__event-detail">
            <ItemDetailWithIcon
                text={eventData.title}
                color={getTagColor(eventData.tagId, tags)}
            />
            <ItemDetailWithIcon
                icon={<CallIcon />}
                text="Join by phone number"
            />
            <ItemDetailWithIcon
                icon={<PeopleAltOutlinedIcon />}
                text="Add a guest"
            />
            <ItemDetailWithIcon icon={<SubjectIcon />} text="Add a note" />
            <ItemDetailWithIcon
                icon={<NotificationsActiveOutlinedIcon />}
                text="30 minutes before"
            />
        </li>
    );
};
