import {useState, useEffect} from 'react'
import axios from 'axios'

import Row from './Row'

const URL_API = "http://127.0.0.1:4000"

export default function Body() {

    const [devData, setDevData] = useState([])

    const getDesenvolvedores = async () => {
        const response = await axios.get(`${URL_API}/desenvolvedor/`)

        setDevData(response.data.data)
    }

    // Puxando dados da API
    useEffect(
        () => getDesenvolvedores(),
        []
    )

    return (
        <tbody>
            {
                devData.map(
                    (item, index)  => 
                    <Row
                        key={index}
                        id={item.id}
                        nome={item.nome}
                        nivel={item.Nivel.nivel}
                        idade={item.idade}
                        sexo={item.sexo} 
                    />
                )
            }
        </tbody>
    )
}
