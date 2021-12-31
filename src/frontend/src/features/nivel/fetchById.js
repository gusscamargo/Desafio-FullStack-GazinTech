import { createAsyncThunk } from "@reduxjs/toolkit"
import bd from "../../services/nivelService"

export const fetchById = createAsyncThunk(
    "nivel/getById",
    async id => {
        const response = await bd.get(id)
        return response
    }
)