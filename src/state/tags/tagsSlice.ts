import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import mockTags from "../../api/tags/mockTags";
import { CategoryTag } from "../../ts/interfaces/tag.interface";
import { generateId } from "../../utils/generateId";


const initialState: CategoryTag[] = mockTags;

const tags = createSlice({
    name: "tags",
    initialState,
    reducers: {
        addTag: (state, action: PayloadAction<CategoryTag>) => {
            const newTag = {
                ...action.payload,
                _id: generateId(),
            }
            state.push(newTag);
        },
    },
});

export const { addTag } = tags.actions;

export default tags.reducer;