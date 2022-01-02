import { createSlice } from "@reduxjs/toolkit"

import { fetchById } from "./fetchById"
import { postNivel } from "./post"
import { putNivel } from "./put"

export const niveSlice = createSlice({
    name: "nivel",
    initialState: {
        value: {
            data: {}
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchById.fulfilled, (state, action) => {
            state.value = action.payload
        })

        builder.addCase(postNivel.fulfilled)
        
        builder.addCase(putNivel.fulfilled)
    }
})

export default niveSlice.reducer