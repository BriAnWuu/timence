import { createSlice, PayloadAction } from "@reduxjs/toolkit";





const initialState: any[] = [];

const selectedDateSchedule = createSlice({
    name: "selectedDateSchedule",
    initialState,
    reducers: {
        changeDate: (state, action: PayloadAction) => {
            
        },
    },
});

export const { changeDate } = selectedDateSchedule.actions;

export default selectedDateSchedule.reducer;