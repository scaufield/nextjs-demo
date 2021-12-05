import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: "main",
    initialState: {
        language: "RU",
    },
    reducers: {
        selectRussian(state) {
            state.language = "RU";
        },
        selectEnglish(state) {
            state.language = "EN";
        },
    }
});

export default mainSlice.reducer

export const {selectRussian, selectEnglish} = mainSlice.actions
