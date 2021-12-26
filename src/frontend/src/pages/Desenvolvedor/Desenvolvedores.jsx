import { useState, useEffect } from 'react'
import axios from 'axios'

import ListItens from '../../components/ListItens/ListItens'

const URL_API = "http://127.0.0.1:4000"

export default function Desenvolvedor() {
    const [devData, setDevData] = useState([])

    const getDesenvolvedores = async () => {
        const response = await axios.get(`${URL_API}/desenvolvedor/`)
        console.log(response.data)
        setDevData(response.data)
    }

    // Puxando dados da API
    useEffect(
        () => getDesenvolvedores(),
        []
    )
    return (
        <div className="container">
            <h2>Desenolvedores</h2>
            <ListItens 
                heads={[
                    "Nome",
                    "Nivel"
                ]}
                data={devData}
            />
        </div>
    )
}
