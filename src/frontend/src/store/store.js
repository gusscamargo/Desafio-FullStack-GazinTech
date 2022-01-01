import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'

import niveisReducer from "./features/niveis"
import nivelReducer from "./features/nivel"
import desenvolvedoresReducer from "./features/desenvolvedores";
import desenvolvedorReducer from "./features/desenvolvedor";
import links from "./features/links";

// Reducers

export default configureStore({
    reducer: {
        niveis: niveisReducer,
        nivel: nivelReducer,
        desenvolvedores: desenvolvedoresReducer,
        desenvolvedor: desenvolvedorReducer,
        links: links
    },
    middleware: [
        thunk
    ]
})