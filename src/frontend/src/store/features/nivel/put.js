import { createAsyncThunk } from "@reduxjs/toolkit"
import bd from "../../../services/bd/nivelService"

export const putNivel = createAsyncThunk(
    "nivel/edit",
    async data => {
        const response = await bd.update(data)

        return response
    }
)