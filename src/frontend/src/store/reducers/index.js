import { combineReducers } from "redux"
import { nivelReducer as niveis } from "./nivel"
import { linksReducer as links } from "./links"
import { desenvolvedorReducer as desenvolvedores } from "./desenvolvedor"

export default combineReducers({
    niveis: niveis,
    desenvolvedores: desenvolvedores,
    links: links
})