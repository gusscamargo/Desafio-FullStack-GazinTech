import { createSlice } from "@reduxjs/toolkit"

import { fetchAllDevs } from "./fetchAllDevs"

export const desenvolvedoresSlice = createSlice({
    name: "desenvolvedores",
    initialState: {
        value: {
            data: []
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchAllDevs.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export default desenvolvedoresSlice.reducer