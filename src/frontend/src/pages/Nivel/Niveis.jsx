import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { TextInput } from "react-materialize"
import Table from "../../components/Table"
import Acoes from "../../components/Acoes"

import { atualizarNiveis } from"../../store/actions/nivel"

const Nivel = ({niveis}) => {

    return (
        <div className="container">
            <h2>Niveis</h2>
            <Table heads={["Nome", "Numero de desenvolvedores"]}>
                {
                    niveis.map((item, index) =>(
                        <tr>
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
                                            <h5><strong>Numero de desenvolvedores pertencentes ao nivel {item.nivel}:</strong> {item.numeroDevs}</h5>
                                        </div>
                                    }
                                />
                            </td>
                        </tr>
                    ))
                }
            </Table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        niveis: state.niveis
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
