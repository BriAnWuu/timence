import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./events/eventsSlice";
import selectedDateScheduleReducer from "./selectedDateSchedule/selectedDateSchedule";

export const store = configureStore({
    reducer: {
        events: eventsReducer,
        selectedDateSchedule: selectedDateScheduleReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;