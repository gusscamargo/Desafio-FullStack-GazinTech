import {ATUALIZAR_DESENVOLVEDOR_DATA} from "./types"
import bd from "../../services/desenvolvedorService"

export const atualizarDesenvolvedores = async dispatch => {
    try{
        const res = await bd.getAll()
        dispatch({
            type: ATUALIZAR_DESENVOLVEDOR_DATA,
            payload: res.data
        })
    }catch(err){
        return Promise.reject(err)
    }
}