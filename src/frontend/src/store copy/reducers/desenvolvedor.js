import { ATUALIZAR_DESENVOLVEDOR_DATA, GET_DESENVOLVEDOR_ID } from "../actions/types"

const initialState = []

export const desenvolvedorReducer = (desenvolvedores = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case ATUALIZAR_DESENVOLVEDOR_DATA:
            return payload

        case GET_DESENVOLVEDOR_ID:
            return payload

        default:
            return desenvolvedores
    }
}