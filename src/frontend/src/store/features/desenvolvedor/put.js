import { createAsyncThunk } from "@reduxjs/toolkit"
import bd from "../../../services/bd/desenvolvedorService"

export const putDesenvolvedor = createAsyncThunk(
    "desenvolvedor/edit",
    async data => {
        const response = await bd.update(data)

        return response
    }
)