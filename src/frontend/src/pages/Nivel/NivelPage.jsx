import { useEffect, useState } from "react"
import { bindActionCreators } from "redux"
import { connect } from 'react-redux'
import { Row, TextInput, Button, Icon } from 'react-materialize'
import { ToastContainer, toast } from "react-toastify"

import { getNivelId } from '../../store/actions/nivel'


const NivelPage = ({data}) => {
    const [nivel, setNivel] = useState("")
    
    useEffect(
        () => setNivel(data.nivel),
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
                        value={nivel}
                        onChange={
                            w => setNivel(w.target.value)
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


const mapStateToProps = state => {
    const { niveis } = state
    const data = typeof niveis.data === "undefined" ? [] : niveis.data
    return {
        data: data,
        status: niveis.status
    }
}

const mapDispatchToProp = dispatch => {
    // Gambiarra eu sei
    const id = window.location.pathname.match("[1-9][0-9]*")
    
    if(id !== null){
        return (
            bindActionCreators(
                getNivelId(dispatch, id),
                dispatch
            )
        )    
    }    
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(NivelPage)
