import { createSlice } from "@reduxjs/toolkit"

import { fetchById } from "./fetchById"
import { postDesenvolvedor } from "./post"
import { putDesenvolvedor } from "./put"
import { deleteDesenvolvedor } from "./delete"

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

        builder.addCase(postDesenvolvedor.fulfilled)

        builder.addCase(putDesenvolvedor.fulfilled)

        builder.addCase(deleteDesenvolvedor.fulfilled)
    }
})

export default desenvolvedorSlice.reducer