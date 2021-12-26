import {useState, useEffect} from 'react'
import axios from 'axios'

import Row from './Row'

const URL_API = "http://127.0.0.1:4000"

export default function Body() {

    const [devData, setDevData] = useState([])

    const getNiveis = async () => {
        const response = await axios.get(`${URL_API}/desenvolvedor/`)

        setDevData(response.data.data)
    }

    useEffect(
        () => getNiveis(),
        []
    )

    return (
        <tbody>
            {
                devData.map(
                    (item, index)  => 
                    <Row
                        key={index}
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
