import { createSlice } from "@reduxjs/toolkit"

import { fetchById } from "./fetchById"
import { postNivel } from "./post"
import { putNivel } from "./put"
import { deleteNivel } from "./delete"

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
        
        builder.addCase(deleteNivel.fulfilled)
    }
})

export default niveSlice.reducer