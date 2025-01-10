import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReduxCalendarEventInfo } from "../../ts/interfaces/event.interface";


const initialState: ReduxCalendarEventInfo[] = [];

const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        fetchEvents: (state, action: PayloadAction<ReduxCalendarEventInfo[]>) => {
            return action.payload
        },
        addOneEvent: (state, action: PayloadAction<any>) => {  
            state.push(action.payload)
        },
        deleteEvent: () => {

        },
    },
});

export const {  addOneEvent, deleteEvent, fetchEvents } = eventsSlice.actions;

export default eventsSlice.reducer;