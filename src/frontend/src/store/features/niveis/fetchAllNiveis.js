import { createAsyncThunk } from "@reduxjs/toolkit"
import bd from "../../../services/bd/nivelService"

export const fetchAllNiveis = createAsyncThunk(
    "niveis/getAll",
    async () => {
        const response = await bd.getAll()
        return response
    }
)