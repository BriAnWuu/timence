import { ReduxCalendarEventInfo } from "../ts/interfaces/event.interface";

export const getEventDetail = (
    id: string | undefined,
    events: ReduxCalendarEventInfo[]
): ReduxCalendarEventInfo | undefined => {
    return events.find((event) => event._id === id);
};
