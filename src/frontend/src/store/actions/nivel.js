import {ATUALIZAR_NIVEL_DATA} from "./types"
import bd from "../../services/nivelService"

export const atualizarNiveis = async dispatch => {
    try{
        const res = await bd.getAll()
        dispatch({
            type: ATUALIZAR_NIVEL_DATA,
            payload: res.data
        })
    }catch(err){
        return Promise.reject(err)
    }
}