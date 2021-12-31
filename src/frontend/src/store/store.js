import { configureStore } from "@reduxjs/toolkit";
import niveisReducer from "../features/niveis"
import nivelReducer from "../features/nivel"
import thunk from 'redux-thunk'

// Reducers

export default configureStore({
    reducer: {
        niveis: niveisReducer,
        nivel: nivelReducer
    },
    middleware: [
        thunk
    ]
})