import { createSlice } from "@reduxjs/toolkit"

export const linksSlice = createSlice({
    name: "links",
    initialState: {
        github: "https://github.com/gusscamargo",
        linkedIn: "https://www.linkedin.com/in/gustavo-michels-de-camargo/",
        desafio: {
            titulo: "Desafio-FullStack / Gazin Tech",
            url: "https://github.com/gazin-tech/Desafio-FullStack"
        }
    }
})

export default linksSlice.reducer