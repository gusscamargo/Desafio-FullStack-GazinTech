import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Row, TextInput, Button, Icon } from 'react-materialize'
import { ToastContainer, toast } from "react-toastify"
import { useSelector, useDispatch } from "react-redux"
import { fetchById } from "../../features/nivel/fetchById"


const NivelPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const nivel = useSelector(state => state.nivel)

    const [data, setData] = useState(nivel.value.data)
    const [inputNivel, setInputNivel] = useState("")
    console.log(nivel.value.data.nivel)

    // Baixar dados
    useEffect(
        () => dispatch(fetchById(id)),
        []
    )
    
    // Setar dados
    useEffect(
        () => setData(nivel.value.data),
        [nivel]
    )
    
    // Dat valor pro input
    useEffect(
        () => setInputNivel(data.nivel),
        [data]
    )

    return (
        <div className='container'>
            <Row>
                <h2>Nivel</h2>
            </Row>
            <form onSubmit={() => console.log("Submit form nivel")}>
                <Row>
                    <TextInput
                        id="nivel"
                        label="Nome do nivel"
                        s={9}
                        value={inputNivel}
                        onChange={
                            w => setInputNivel(w.target.value)
                        }
                    />
                    <Button
                        className='red'
                        node="button"
                        type="submit"
                        waves="light"
                        s={3}
                    >
                        Salvar
                        <Icon right>
                            send
                        </Icon>
                    </Button>
                </Row>
            </form>
            <ToastContainer />
        </div>
    )
}

export default NivelPage
