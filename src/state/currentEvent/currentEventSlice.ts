import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    CurrentEvent,
    ReduxCalendarEventInfo,
    SerializedEvent,
} from "../../ts/interfaces/event.interface";

const initialState: CurrentEvent = {
    _id: undefined,
    start: undefined,
    end: undefined,
    slots: undefined,
};

const currentEventSlice = createSlice({
    name: "currentEvent",
    initialState,
    reducers: {
        setCurrentEvent: (
            state,
            action: PayloadAction<ReduxCalendarEventInfo>
        ) => {
            const { start, end, _id, ...rest } = action.payload;
            state._id = _id;
            state.start = start;
            state.end = end;
            state.slots = undefined;
            // state.allDay = allDay
        },
        setCurrentSlot: (state, action: PayloadAction<SerializedEvent>) => {
            const { start, end, slots, ...rest } = action.payload;
            state._id = undefined;
            state.start = start;
            state.end = end;
            state.slots = slots;
        },
        deselectCurrentEvent: () => {
            return initialState;
        },
    },
});

export const { setCurrentEvent, setCurrentSlot, deselectCurrentEvent } =
    currentEventSlice.actions;

export default currentEventSlice.reducer;
