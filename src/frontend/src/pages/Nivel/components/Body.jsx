import {useState, useEffect} from "react"
import axios from "axios"

import Row from './Row'

const API_URL = "http://127.0.0.1:4000"

export default function Body() {  

    const [nivelData, setNivelData] = useState([])

    const getNivelData = async () => {
        const response = await axios.get(`${API_URL}/nivel/`)
        
        setNivelData(response.data.data)
    }

    // Puxando dados da API
    useEffect(
            () => getNivelData(),
            []
        )

    return (
        <tbody>
            {
                nivelData.map((item, index) => 
                    <Row 
                        key={index}
                        id={item.id}
                        nivel={item.nivel}
                        numeroDevs={item.numeroDevs} 
                    />
                )
            }
        </tbody>
    )
}
