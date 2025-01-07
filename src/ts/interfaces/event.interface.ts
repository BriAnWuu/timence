import { type Event } from "react-big-calendar";

// Event {
    // title: string,
    // start: Date,
    // end: Date,
    // allDay?: boolean
    // resource?: any,
// }

export interface CalendarEventInfo extends Omit<Event, "start" | "end"> {
    // title: string
    start: Date 
    end: Date 
    // allDay?: boolean
    // resource?: any
    _id: string
    tagId?: string
}

export interface ReduxCalendarEventInfo extends Omit<Event, "start" | "end"> {
    start: number 
    end: number 
    _id: string
    // description: string
    tagId?: string
}

export interface SerializedEvent extends Omit<Event, "start" | "end"> {
    start: number
    end: number
}

export interface CurrentEvent {
    start: number | undefined
    end: number | undefined
    _id: string | undefined
}