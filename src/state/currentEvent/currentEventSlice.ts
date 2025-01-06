import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type Event } from "react-big-calendar";
import { CalendarEventInfo } from "../../ts/interfaces/event.interface";

const initialState: Event | CalendarEventInfo = {};

const currentEventSlice = createSlice({
    name: "currentEvent",
    initialState,
    reducers: {
        setCurrentEvent: (state, action: PayloadAction<Event | CalendarEventInfo>) => {
            return action.payload
        },
        deselectCurrentEvent: () => {
            return {}
        }
    },
});

export const { setCurrentEvent, deselectCurrentEvent } = currentEventSlice.actions;

export default currentEventSlice.reducer;