import { ATUALIZAR_DESENVOLVEDOR_DATA } from "../actions/types"

const initialState = []

export const desenvolvedorReducer = (desenvolvedores = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case ATUALIZAR_DESENVOLVEDOR_DATA:
            return payload

        default:
            return desenvolvedores
    }
}