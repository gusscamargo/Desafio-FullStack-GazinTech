import { combineReducers } from "redux"
import { nivelReducer as niveis } from "./nivel"
import { linksReducer as links } from "./links"

export default combineReducers({
    niveis: niveis,
    links: links
})