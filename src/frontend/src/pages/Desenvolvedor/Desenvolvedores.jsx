import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { atualizarDesenvolvedores } from '../../store/actions/desenvolvedor'

import Table from '../../components/Table'
import Acoes from "../../components/Acoes"
import { Textarea } from 'react-materialize'


const verificarSeHaDesenvolvedores = data => {
    console.log(data)
    if (data.length > 0){
        return (
            data.map((item, index) => (
                <tr>
                    <td>{item.nome}</td>
                    <td>{item.Nivel.nivel}</td>
                    <Acoes
                        id={item.id}
                        modalView={
                            <div className='container'>
                                <h5><strong>Nome:</strong> {item.nome}</h5>
                                <h5><strong>Sexo:</strong> {item.sexo}</h5>
                                <h5><strong>Data de nascimento:</strong> {item.datanascimento}</h5>
                                <h5><strong>Idade:</strong> {item.idade}</h5>
                                <h5><strong>Nivel:</strong> {item.Nivel.nivel}</h5>
                                <h5><strong>Hobby:</strong> {item.hobby === "" ? "Hobbies não informados" : ""}</h5>
                                {item.hobby !== "" ? <Textarea disabled={true} value={item.hobby} /> : ""}
                            </div>
                        }
                    />
                </tr>
            ))
        )
    }
}


const Desenvolvedor = ({ desenvolvedores }) => {
    return (
        <div className="container">
            <h2>Desenolvedores</h2>
            <Table
                heads={[
                    "Nome",
                    "Nivel"
                ]}>
                { verificarSeHaDesenvolvedores(desenvolvedores) }
            </Table>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        desenvolvedores: state.desenvolvedores
    }
}

const mapDispatchToProp = dispatch => (
    bindActionCreators(
        atualizarDesenvolvedores(dispatch),
        dispatch
    )
)

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Desenvolvedor)
