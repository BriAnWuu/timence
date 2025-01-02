import { type Event } from "react-big-calendar";

// Event {
    // title: string,
    // start: Date,
    // end: Date,
    // allDay?: boolean
    // resource?: any,
// }
  
export interface CalendarEventInfo extends Event {
    _id: string
    description: string
    tagId?: string
}