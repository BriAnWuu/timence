import { ReduxCalendarEventInfo } from "../../ts/interfaces/event.interface";
import { getDates } from "../../utils/adjustMockDataDate";

const { year, month } = getDates();

const mockEvents: ReduxCalendarEventInfo[] = [
    {
        title: "Lunch Party at Midtown",
        start: new Date(year, month, 5).getTime(),
        end: new Date(year, month, 5).getTime(),
        allDay: true,
        _id: "1",
        // description: "Lunch Party at Midtown by Google",
        // tagId?: string
    },
    {
        title: "Meeting with Sam",
        start: new Date(year, month, 5).getTime(),
        end: new Date(year, month, 5).getTime(),
        allDay: true,
        _id: "2",
        // description: "Meeting with Sam on Google Meet",
        // tagId?: string
    },
    {
        title: "Dental appointment",
        start: new Date(year, month, 7).getTime(),
        end: new Date(year, month, 7).getTime(),
        allDay: true,
        _id: "3",
        // description: "Dental appointment at 404 Main St",
        // tagId?: string
    },
    {
        title: "Dinner at Toronto Blue",
        start: new Date(year, month, 8).getTime(),
        end: new Date(year, month, 8).getTime(),
        allDay: true,
        _id: "4",
        // description: "Dinner at Toronto Blue",
        tagId: "2",
    },
    {
        title: "Medication",
        start: new Date(year, month, 8).getTime(),
        end: new Date(year, month, 10, 23, 59).getTime(),
        allDay: true,
        _id: "5",
        // description: "Medication",
        // tagId?: string
    },
    {
        title: "Dinner at Toronto Blue",
        start: new Date(year, month, 8).getTime(),
        end: new Date(year, month, 8).getTime(),
        allDay: true,
        _id: "6",
        // description: "Dinner at Toronto Blue",
        tagId: "3",
    },
    {
        title: "Dinner at Toronto Blue",
        start: new Date(year, month, 8).getTime(),
        end: new Date(year, month, 8).getTime(),
        allDay: true,
        _id: "7",
        // description: "Dinner at Toronto Blue",
        // tagId?: string
    },
    {
        title: "Dinner at Toronto Blue",
        start: new Date(year, month, 8).getTime(),
        end: new Date(year, month, 8).getTime(),
        allDay: true,
        _id: "8",
        // description: "Dinner at Toronto Blue",
        // tagId?: string
    },
];

export default mockEvents;
