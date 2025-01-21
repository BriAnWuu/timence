import { ReduxCalendarEventInfo } from "../ts/interfaces/event.interface";
import { CategoryTag } from "../ts/interfaces/tag.interface";

export const getEventDetail = (
    id: string | undefined,
    events: ReduxCalendarEventInfo[]
): ReduxCalendarEventInfo | undefined => {
    return events.find((event) => event._id === id);
};

export const getDailySchedule = (
    timestamp: number,
    events: ReduxCalendarEventInfo[]
) => {
    return events.filter(
        (event) =>
            event.start === timestamp ||
            event.end === timestamp ||
            (event.start < timestamp && event.end > timestamp)
    );
};

export const getTagColor = (tagId: string | undefined, tags: CategoryTag[]) => {
    const foundColor = tags.find((tag) => tag._id === tagId)?.color;
    return foundColor ? foundColor : null;
};
