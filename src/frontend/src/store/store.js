import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import nivelReducer from "../features/nivel/nivelSlice"
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