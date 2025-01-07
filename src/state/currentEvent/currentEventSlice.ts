import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentEvent, ReduxCalendarEventInfo, SerializedEvent } from "../../ts/interfaces/event.interface";

const initialState: CurrentEvent = {
    start: undefined,
    end: undefined,
    _id: undefined,
};

const currentEventSlice = createSlice({
    name: "currentEvent",
    initialState,
    reducers: {
        setCurrentEvent: (state, action: PayloadAction<ReduxCalendarEventInfo>) => {
            const { start, end, _id, ...rest} = action.payload
            state.start = start
            state.end = end
            state._id = _id
        },
        setCurrentDate: (state, action: PayloadAction<SerializedEvent>) => {
            const { start, end, ...rest } = action.payload
            state.start = start
            state.end = end
        },
        deselectCurrentEvent: () => {
            return initialState
        }
    },
});

export const { setCurrentEvent, setCurrentDate, deselectCurrentEvent } = currentEventSlice.actions;

export default currentEventSlice.reducer;