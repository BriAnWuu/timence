import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import mockEvents from "../../api/mock/mockEvents";
import { ReduxCalendarEventInfo } from "../../ts/interfaces/event.interface";


const initialState: ReduxCalendarEventInfo[] = mockEvents;

const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        addOneEvent: (state, action: PayloadAction<any>) => {  
            state.push(action.payload)
        },
        deleteEvent: () => {

        },
    },
});

export const { addOneEvent, deleteEvent } = eventsSlice.actions;

export default eventsSlice.reducer;