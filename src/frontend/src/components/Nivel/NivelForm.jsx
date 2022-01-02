import { useState, useEffect } from 'react'
import { toast } from "react-toastify"
import { Row, TextInput, Button, Icon } from 'react-materialize'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postNivel } from '../../store/features/nivel/post'

const NivelForm = ({nivel}) => {

    const dispatch = useDispatch()
    const navagate = useNavigate()
    const [inputNivel, setInputNivel] = useState(nivel || "")
    
    useEffect(
        () => setInputNivel(nivel || ""),
        [nivel]
    )

    const onCreate = () => {
        if(inputNivel !== ""){
            const data = {
                nivel: inputNivel
            }

            if (typeof nivel.id !== "undefined") {
                data.id = nivel.id
            }else{
                dispatch(postNivel(data))           
            }
            
            navagate("/nivel")

        }else{
            toast.error('Campo nivel esta vazio', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <div className='container'>
            <Row>
                <h2>Nivel</h2>
            </Row>
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
                        waves="light"
                        s={3}
                        onClick={
                            () => {
                                onCreate()
                            }
                        }
                    >
                        Salvar
                        <Icon right>
                            send
                        </Icon>
                    </Button>
                </Row>
        </div>
    )
}

export default NivelForm