import { createSlice } from "@reduxjs/toolkit"

import { fetchById } from "./fetchById"

export const desenvolvedorSlice = createSlice({
    name: "desenvolvedor",
    initialState: {
        value: {
            data: {}
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchById.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export default desenvolvedorSlice.reducer