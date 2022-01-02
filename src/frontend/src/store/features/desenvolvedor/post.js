import { createAsyncThunk } from "@reduxjs/toolkit"
import bd from "../../../services/bd/desenvolvedorService"

export const postDesenvolvedor = createAsyncThunk(
    "desenvolvedor/create",
    async data => {
        const response = await bd.create(data)
        
        return response
    }
)