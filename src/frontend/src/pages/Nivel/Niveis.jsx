import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Autocomplete, Row } from 'react-materialize'

// Componentes
import Table from "../../components/Table"
import Acoes from "../../components/Acoes"
import AddButton from "../../components/AddButton"

// Ferramentas
import { atualizarNiveis } from"../../store/actions/nivel"


const validacaoSeHaNiveisRegistrados = data => {
    if (data.length > 0){
        return (
            data.map((item, index) => (
                <tr key={index}>
                    <td>
                        {item.nivel}
                    </td>
                    <td>
                        {item.numeroDevs}
                    </td>
                    <td>
                        <Acoes
                            id={item.id}
                            modalView={
                                <div className="container">
                                    <h5><strong>Nome:</strong> {item.nivel}</h5>
                                    <h5><strong>Numero de desenvolvedores que são deste nivel:</strong> {item.numeroDevs}</h5>
                                </div>
                            }
                        />
                    </td>
                </tr>
            ))
        )
    }else{
        return (
            <tr>
                <td>
                    Não há dados
                </td>
            </tr>
        )
    }
}


const Nivel = ({ niveis, nivelNameList}) => {
    return (
        <div>
            <div className="container">
                <Row>
                    <h2>Niveis</h2>
                </Row>
                <Row>
                    <Autocomplete
                        id="search-dev"
                        options={{
                            data: nivelNameList
                        }}
                        placeholder="Escreva aqui"
                        title='Procurar nivel'
                        s={12}
                    />
                </Row>

                <Table heads={["Nome", "Numero de desenvolvedores"]}>
                    {
                        validacaoSeHaNiveisRegistrados(niveis)
                    }
                </Table>
            </div>
            <AddButton />
        </div>
    )
}

const getNameNiveis = data => {
    if (data.length === 0) return {}

    // Niveis final list
    const niveis = {}

    data.map(
        (item, index) => {
            niveis[item.nivel] = null
        }
    )

    return niveis
}

const mapStateToProps = state => {
    const {niveis} = state
    // const nivelNameList = {}
    const nivelNameList = getNameNiveis(niveis)

    return {
        niveis: niveis,
        nivelNameList: nivelNameList
    }
}

const mapDispatchToProp = dispatch => (
    bindActionCreators(
        atualizarNiveis(dispatch),
        dispatch
    )
)

export default connect(
        mapStateToProps,
        mapDispatchToProp
    )(Nivel)
