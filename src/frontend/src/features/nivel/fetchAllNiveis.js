import { createAsyncThunk } from "@reduxjs/toolkit"
import bd from "../../services/nivelService"

export const fetchAllNiveis = createAsyncThunk(
    "nivel/getAll",
    async () => {
        const response = await bd.getAll()
        return response
    }
)