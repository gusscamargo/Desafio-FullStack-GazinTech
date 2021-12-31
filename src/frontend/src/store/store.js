import { configureStore } from "@reduxjs/toolkit";
import niveisReducer from "../features/niveis"
import nivelReducer from "../features/nivel"
import desenvolvedores from "../features/desenvolvedores";
import desenvolvedor from "../features/desenvolvedor";
import thunk from 'redux-thunk'

// Reducers

export default configureStore({
    reducer: {
        niveis: niveisReducer,
        nivel: nivelReducer,
        desenvolvedores: desenvolvedores,
        desenvolvedor: desenvolvedor
    },
    middleware: [
        thunk
    ]
})