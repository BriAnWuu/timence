// import "./EventList.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import ItemDetailWithIcon from "../ItemDetailWithIcon/ItemDetailWithIcon";

interface EventListProps {
    currentDate: number;
}

function EventList({ currentDate }: EventListProps) {
    // redux state
    const events = useSelector((state: RootState) => state.events);

    return (
        <section className="day-schedule__event-list">
            <ul>{}</ul>
        </section>
    );
}

export default EventList;

const EventDetail = ({}) => {
    return (
        <div className="day-schedule__event-detail">
            <ItemDetailWithIcon />
            <ItemDetailWithIcon />
            <ItemDetailWithIcon />
            <ItemDetailWithIcon />
            <ItemDetailWithIcon />
            <ItemDetailWithIcon />
        </div>
    );
};
