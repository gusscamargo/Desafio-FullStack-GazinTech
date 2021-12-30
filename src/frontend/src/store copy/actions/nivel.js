import {ATUALIZAR_NIVEL_DATA, GET_NIVEL_ID} from "./types"
import bd from "../../services/nivelService"

export const atualizarNiveis = async dispatch => {
    try{
        const res = await bd.getAll()
        dispatch({
            type: ATUALIZAR_NIVEL_DATA,
            payload: res
        })
    }catch(err){
        return Promise.reject(err)
    }
}

export const getNivelId = async (dispatch, id) => {
    try{
        const res = await bd.get(id)
        dispatch({
            type: GET_NIVEL_ID,
            payload: res
        })
    }catch(err){
        return Promise.reject(err)
    }
}