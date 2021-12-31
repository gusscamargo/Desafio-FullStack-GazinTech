import { createAsyncThunk } from "@reduxjs/toolkit"
import bd from "../../../services/bd/desenvolvedorService"

export const fetchById = createAsyncThunk(
    "desenvolvedor/getById",
    async id => {
        const response = await bd.get(id)
        return response
    }
)