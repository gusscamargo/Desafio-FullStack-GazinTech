import { createSlice } from "@reduxjs/toolkit"

import { fetchAllNiveis } from "./fetchAllNiveis"

export const niveSlice = createSlice({
    name: "desenvolvedores",
    initialState: {
        value: {
            data: []
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchAllNiveis.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export default niveSlice.reducer