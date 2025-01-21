import CallIcon from "@mui/icons-material/Call";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import SubjectIcon from "@mui/icons-material/Subject";
import TitleIcon from "@mui/icons-material/Title";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { ReduxCalendarEventInfo } from "../../ts/interfaces/event.interface";
import { getDailySchedule, getTagColor } from "../../utils/eventDetail";
import ItemDetailWithIcon from "../ItemDetailWithIcon/ItemDetailWithIcon";
import "./EventList.scss";

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

    return (
        <section>
            <ul className="day-schedule__event-list">
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

    const boxColor = getTagColor(eventData.tagId, tags);
    const textColor = "#fff";
    const iconColor = "#f4f6f7";

    return (
        <li
            className="day-schedule__event-item"
            style={{ color: iconColor, backgroundColor: boxColor || "#06448f" }}
        >
            <div className="day-schedule__event-item-actions">
                <IconButton aria-label="edit button">
                    <EditOutlinedIcon style={{ color: iconColor }} />
                </IconButton>
                <IconButton aria-label="delete button">
                    <DeleteOutlinedIcon style={{ color: iconColor }} />
                </IconButton>
                <IconButton aria-label="email button">
                    <EmailOutlinedIcon style={{ color: iconColor }} />
                </IconButton>
                <IconButton aria-label="option button">
                    <MoreVertOutlinedIcon style={{ color: iconColor }} />
                </IconButton>
            </div>
            <ItemDetailWithIcon
                icon={<TitleIcon />}
                text={eventData.title}
                textColor={textColor}
            />
            <ItemDetailWithIcon
                icon={<CallIcon />}
                text="Join by phone number"
                textColor={textColor}
            />
            <ItemDetailWithIcon
                icon={<PeopleAltOutlinedIcon />}
                text="Add a guest"
                textColor={textColor}
            />
            <ItemDetailWithIcon
                icon={<SubjectIcon />}
                text="Add a note"
                textColor={textColor}
            />
            <ItemDetailWithIcon
                icon={<RoomOutlinedIcon />}
                text="Add a location"
                textColor={textColor}
            />
            <ItemDetailWithIcon
                icon={<NotificationsActiveOutlinedIcon />}
                text="30 minutes before"
                textColor={textColor}
            />
        </li>
    );
};
