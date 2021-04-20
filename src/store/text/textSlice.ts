import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TextState = {
    value: string
}

const initialState: TextState = {
    value: "Test text from the Redux Store"
}

const textSlice = createSlice({
    name: "text",
    initialState,
    reducers: {
        changeText: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const { changeText } = textSlice.actions

export default textSlice.reducer