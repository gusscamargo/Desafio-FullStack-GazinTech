import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'

import niveisReducer from "./features/niveis"
import nivelReducer from "./features/nivel"
import desenvolvedores from "./features/desenvolvedores";
import desenvolvedor from "./features/desenvolvedor";
import links from "./features/links";

// Reducers

export default configureStore({
    reducer: {
        niveis: niveisReducer,
        nivel: nivelReducer,
        desenvolvedores: desenvolvedores,
        desenvolvedor: desenvolvedor,
        links: links
    },
    middleware: [
        thunk
    ]
})