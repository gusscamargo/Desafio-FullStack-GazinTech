import { ATUALIZAR_NIVEL_DATA, GET_NIVEL_ID } from "../actions/types"

const initialState = []

export const nivelReducer = (niveis = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case ATUALIZAR_NIVEL_DATA:
            return payload

        case GET_NIVEL_ID:
            return payload

        default:
            return niveis
    }
}