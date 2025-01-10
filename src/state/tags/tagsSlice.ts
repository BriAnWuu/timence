import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryTag } from "../../ts/interfaces/tag.interface";
import { generateId } from "../../utils/generateId";

const initialState: CategoryTag[] = [];

const tags = createSlice({
    name: "tags",
    initialState,
    reducers: {
        fetchTags: (state, action: PayloadAction<CategoryTag[]>) => {
            return action.payload;
        },
        addTag: (state, action: PayloadAction<CategoryTag>) => {
            const newTag = {
                ...action.payload,
                _id: generateId(),
            };
            state.push(newTag);
        },
    },
});

export const { addTag, fetchTags } = tags.actions;

export default tags.reducer;
