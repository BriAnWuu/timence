import { type Event } from "react-big-calendar";

export interface CalendarEventInfo extends Event {
    _id: string
    description: string
    tagId?: string
}