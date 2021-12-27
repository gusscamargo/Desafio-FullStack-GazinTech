import {createStore, combineReducers} from 'redux'
import axios from "axios"

const API_URL = "http://127.0.0.1:4000"

const reducers = combineReducers({
    niveis:  async (state, action) => {
            return await axios.get(`${API_URL}/nivel/`)
    },
    links: (state, action) => {
        return {
            github: "https://github.com/gusscamargo",
            linkedIn: "https://www.linkedin.com/in/gustavo-michels-de-camargo/",
            desafio: {
                titulo: "Desafio-FullStack / Gazin Tech",
                url: "https://github.com/gazin-tech/Desafio-FullStack"
            }
        }
    }
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig