import { createSlice } from "@reduxjs/toolkit"

import { fetchAllNiveis } from "./fetchAllNiveis"
import { fetchById } from "./fetchById"

export const niveSlice = createSlice({
    name: "nivel",
    initialState: {
        value: {
            data: []
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchAllNiveis.fulfilled, (state, action) => {
            state.value = action.payload
        })

        builder.addCase(fetchById.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export default niveSlice.reducer