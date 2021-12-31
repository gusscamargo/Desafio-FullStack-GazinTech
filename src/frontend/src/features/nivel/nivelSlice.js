import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import bd from "../../services/nivelService"


export const fetchAllNiveis = createAsyncThunk(
    "nivel/getAll",
    async () => {
        const response = await bd.getAll()
        return response
    }
)


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
    }
})

// export const {getAll} = niveSlice.actions

export default niveSlice.reducer