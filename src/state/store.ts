import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./events/eventsSlice";
import selectedDateScheduleReducer from "./selectedDateSchedule/selectedDateScheduleSlice";
import tagsReducer from "./tags/tagsSlice";

export const store = configureStore({
    reducer: {
        events: eventsReducer,
        selectedDateSchedule: selectedDateScheduleReducer,
        tags: tagsReducer,
        // eventform, tags,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;