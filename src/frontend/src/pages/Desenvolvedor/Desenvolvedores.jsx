import { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from "react-materialize"

import Body from "./components/Body"
import Head from "./components/Head"

const URL_API = "http://127.0.0.1:4000"

export default function Desenvolvedor() {
    const [devData, setDevData] = useState([])

    const getDesenvolvedores = async () => {
        const response = await axios.get(`${URL_API}/desenvolvedor/`)

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
            <Table className="striped">
                <Head />
                <Body 
                    data={devData}
                />
            </Table>
        </div>
    )
}
