import { CalendarEventInfo } from "../../ts/interfaces/event.interface";

const mockEvents: CalendarEventInfo[] = [
    {
        title: "Lunch Party at Midtown",
        start: new Date("2025-01-05"),
        end: new Date("2025-01-05"),
        allDay: true,
        _id: "1",
        description: "Lunch Party at Midtown by Google",
        // tagId?: string
    },
    {
        title: "Meeting with Sam",
        start: new Date("2025-01-05"),
        end: new Date("2025-01-05"),
        allDay: true,
        _id: "2",
        description: "Meeting with Sam on Google Meet",
        // tagId?: string
    },
    {
        title: "Dental appointment",
        start: new Date("2025-01-07"),
        end: new Date("2025-01-07"),
        allDay: true,
        _id: "3",
        description: "Dental appointment at 404 Main St",
        // tagId?: string
    },
    {
        title: "Dinner at Toronto Blue",
        start: new Date("2025-01-08"),
        end: new Date("2025-01-08"),
        allDay: true,
        _id: "4",
        description: "Dinner at Toronto Blue",
        // tagId?: string
    },
    {
        title: "Medication",
        start: new Date("2025-01-08"),
        end: new Date("2025-01-10"),
        allDay: true,
        _id: "5",
        description: "Medication",
        // tagId?: string
    },
    {
        title: "Dinner at Toronto Blue",
        start: new Date("2025-01-08"),
        end: new Date("2025-01-08"),
        allDay: true,
        _id: "6",
        description: "Dinner at Toronto Blue",
        // tagId?: string
    },
    {
        title: "Dinner at Toronto Blue",
        start: new Date("2025-01-08"),
        end: new Date("2025-01-08"),
        allDay: true,
        _id: "7",
        description: "Dinner at Toronto Blue",
        // tagId?: string
    },
    {
        title: "Dinner at Toronto Blue",
        start: new Date("2025-01-08"),
        end: new Date("2025-01-08"),
        allDay: true,
        _id: "8",
        description: "Dinner at Toronto Blue",
        // tagId?: string
    },
]

export default mockEvents;