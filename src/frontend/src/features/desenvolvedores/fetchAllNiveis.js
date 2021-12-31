import { createAsyncThunk } from "@reduxjs/toolkit"
import bd from "../../services/desenvolvedorService"

export const fetchAllNiveis = createAsyncThunk(
    "desenvolvedores/getAll",
    async () => {
        const response = await bd.getAll()
        return response
    }
)