import { type Event } from "react-big-calendar";

// Event {
// title: string,
// start: Date,
// end: Date,
// allDay?: boolean
// resource?: any,
// }

export interface CalendarEventInfo extends Omit<Event, "start" | "end"> {
    start: Date;
    end: Date;
    // allDay?: boolean
    _id: string;
    tagId?: string;
}

export interface ReduxCalendarEventInfo extends Omit<Event, "start" | "end"> {
    start: number;
    end: number;
    // allDay?: boolean
    _id: string;
    tagId?: string;
}

export interface SerializedEvent extends Omit<Event, "start" | "end"> {
    _id?: string;
    start: number;
    end: number;
}

export interface CurrentEvent {
    _id?: string;
    start?: number;
    end?: number;
}
