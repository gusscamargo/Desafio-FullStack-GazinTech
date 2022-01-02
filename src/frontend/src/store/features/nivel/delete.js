import { createAsyncThunk } from "@reduxjs/toolkit"
import bd from "../../../services/bd/nivelService"

export const deleteNivel = createAsyncThunk(
    "nivel/delete",
    async id => {
        const response = await bd.delete({id: id})

        return response
    }
)