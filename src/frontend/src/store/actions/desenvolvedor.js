import { ATUALIZAR_DESENVOLVEDOR_DATA, GET_DESENVOLVEDOR_ID } from "./types"
import bd from "../../services/desenvolvedorService"

export const atualizarDesenvolvedores = async dispatch => {
    try{
        const res = await bd.getAll()
        dispatch({
            type: ATUALIZAR_DESENVOLVEDOR_DATA,
            payload: res
        })
    }catch(err){
        return Promise.reject(err)
    }
}

export const getDesenvolvedorId = async (dispatch, id) => {
    try{
        const res = await bd.get(id)
        dispatch({
            type: GET_DESENVOLVEDOR_ID,
            payload: res
        })
    }catch(err){
        return Promise.reject(err)
    }
}