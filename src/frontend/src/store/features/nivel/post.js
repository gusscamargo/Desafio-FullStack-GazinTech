import { createAsyncThunk } from "@reduxjs/toolkit"
import bd from "../../../services/bd/nivelService"

export const postNivel = createAsyncThunk(
    "nivel/create",
    async data => {
        const response = await bd.create(data)

        return response
    }
)