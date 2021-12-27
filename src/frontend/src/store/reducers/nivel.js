import { ATUALIZAR_NIVEL_DATA } from "../actions/types"

const initialState = []

export const nivelReducer = (niveis = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case ATUALIZAR_NIVEL_DATA:
            return payload

        default:
            return niveis
    }
}