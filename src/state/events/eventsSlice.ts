import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import mockEvents from "../../api/mock/mockEvents";
import { CalendarEventInfo } from "../../ts/interfaces/event.interface";
import { generateId } from "../../utils/generateId";

const initialState: CalendarEventInfo[] = mockEvents;

const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        addOneEvent: (state, action: PayloadAction<CalendarEventInfo>) => {
            const newEvent = {
                ...action.payload,
                _id: generateId(),
            }
            state.push(newEvent);
        },
        deleteEvent: () => {

        },
    },
});

export const { addOneEvent, deleteEvent } = eventsSlice.actions;

export default eventsSlice.reducer;