import { createAsyncThunk } from "@reduxjs/toolkit"
import bd from "../../../services/bd/desenvolvedorService"

export const deleteDesenvolvedor = createAsyncThunk(
    "desenvolvedor/delete",
    async id => {
        const response = await bd.delete({
            id
        })

        return response
    }
)