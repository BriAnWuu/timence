import {
    CalendarEventInfo,
    CurrentEvent,
    ReduxCalendarEventInfo,
} from "../ts/interfaces/event.interface";
import { Slot } from "../ts/interfaces/slot.interface";

export const serializeDate = (event: any) => {
    const { start, end, ...newCopy } = event;
    return {
        ...newCopy,
        start: start.getTime(),
        end: end.getTime(),
    };
};

export const serializeDateArray = (event: Slot | CurrentEvent) => {
    const { slots, ...newCopy } = event;
    const newSlots = slots?.map((slot) => {
        if (typeof slot !== "number") {
            return slot.getTime();
        }
    });
    return {
        ...newCopy,
        slots: newSlots,
    };
};

export const deserializeDate = (
    event: ReduxCalendarEventInfo
): CalendarEventInfo => {
    const { start, end, ...newCopy } = event;

    return {
        ...newCopy,
        start: new Date(start),
        end: new Date(end),
    };
};
