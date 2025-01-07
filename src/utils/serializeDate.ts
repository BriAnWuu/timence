import { CalendarEventInfo, ReduxCalendarEventInfo } from "../ts/interfaces/event.interface";

export const serializeDate = (event: any) => {
    const { start, end, ...newCopy} = event
    
    return {
        ...newCopy,
        start: start.getTime(),
        end: end.getTime(),
    }
}

export const deserializeDate = (event: ReduxCalendarEventInfo): CalendarEventInfo => {
    const { start, end, ...newCopy } = event
    
    return {
        ...newCopy,
        start: new Date(start),
        end: new Date(end),
    }
}