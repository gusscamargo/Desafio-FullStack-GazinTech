import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import ListItens from "../../components/ListItens/ListItens"
import { atualizarNiveis } from"../../store/actions/nivel"

const Nivel = ({niveis}) => {

    return (
        <div className="container">
            <h2>Niveis</h2>
            <ListItens
                heads={[
                    "Nome",
                    "Numero de desenvolvedores"
                ]}
                data={
                    niveis
                }
            />
        </div>
    )
}

const mapDispatchToProp = dispatch => (
    bindActionCreators(
        atualizarNiveis(dispatch),
        dispatch
    )
)

const mapStateToProps = state => {
    return {
        niveis: state.niveis
    }
}

export default connect(
        mapStateToProps,
        mapDispatchToProp
    )(Nivel)
