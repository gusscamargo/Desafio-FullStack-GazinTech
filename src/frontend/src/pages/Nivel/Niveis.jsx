import { Table } from "react-materialize"
import { useState, useEffect } from "react"
import axios from "axios"

import Head from "./components/Head"
import Body from "./components/Body"

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
            <Table className="striped">
                <Head />
                <Body
                    data={nivelData}
                />
            </Table>
        </div>
    )
}
