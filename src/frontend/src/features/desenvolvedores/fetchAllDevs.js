import { createAsyncThunk } from "@reduxjs/toolkit"
import bd from "../../services/bd/desenvolvedorService"

export const fetchAllDevs = createAsyncThunk(
    "desenvolvedores/getAll",
    async () => {
        const response = await bd.getAll()
        return response
    }
)