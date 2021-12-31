import { useState, useEffect } from 'react'
import { ToastContainer, toast } from "react-toastify"
import { Row, TextInput, Button, Icon } from 'react-materialize'

const NivelForm = ({nivel = ""}) => {

    const [inputNivel, setInputNivel] = useState(nivel)
    
    useEffect(
        () => setInputNivel(nivel),
        [nivel]
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

export default NivelForm