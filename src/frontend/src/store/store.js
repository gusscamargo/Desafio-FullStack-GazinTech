import { configureStore } from "@reduxjs/toolkit";
import nivelReducer from "../features/nivel"
import thunk from 'redux-thunk'

// Reducers

export default configureStore({
    reducer: {
        nivel: nivelReducer
    },
    middleware: [
        thunk
    ]
})