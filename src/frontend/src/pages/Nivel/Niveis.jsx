import { useState, useEffect } from "react"
import axios from "axios"
import ListItens from "../../components/ListItens/ListItens"

const API_URL = "http://127.0.0.1:4000"

export default function Nivel() {
    const [nivelData, setNivelData] = useState([])

    const getNivelData = async () => {
        const response = await axios.get(`${API_URL}/nivel/`)

        setNivelData(response.data)
    }

    // Puxando dados da API
    useEffect(
        () => getNivelData(),
        []
    )

    return (
        <div className="container">
            <h2>Niveis</h2>
            <ListItens
                heads={[
                    "Nome",
                    "Numero de desenvolvedores"
                ]}
                data={nivelData}
            />
        </div>
    )
}
