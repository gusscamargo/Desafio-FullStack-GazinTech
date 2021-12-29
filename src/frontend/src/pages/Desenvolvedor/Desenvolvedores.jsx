import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Textarea, Autocomplete, Row, Select } from 'react-materialize'


// Componentes
import Table from '../../components/Table'
import Acoes from "../../components/Acoes"
import AddButton from '../../components/AddButton'

// Ferramentas
import { atualizarDesenvolvedores } from '../../store/actions/desenvolvedor'


const verificarSeHaDesenvolvedores = data => {
    if (data.length > 0){
        return (
            data.map((item, index) => (
                <tr key={index}>
                    <td>{item.nome}</td>
                    <td>{item.Nivel.nivel}</td>
                    <td>
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
                    </td>
                </tr>
            ))
        )
    }
}

// Função principal
const Desenvolvedor = ({ desenvolvedores, devNameList }) => {

    return (
        <div>
            <div className="container">
                <Row>
                    <h2>Desenolvedores</h2>
                </Row>
                <Row>
                    <Autocomplete
                        id="search-dev"
                        options={{
                            data: devNameList
                        }}
                        placeholder="Escreva aqui"
                        title='Procurar desenvolvedor'
                        s={9}
                    />
                    <Select
                        id="select-nivel"
                        multiple={false}
                        label='Escolha ordenação'
                        onChange={function noRefCheck() { }}
                        options={{
                            classes: '',
                            dropdownOptions: {
                                alignment: 'left',
                                autoTrigger: true,
                                closeOnClick: true,
                                constrainWidth: true,
                                coverTrigger: true,
                                hover: false,
                                inDuration: 150,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                outDuration: 250
                            }
                        }}
                        s={3}
                    >
                        <option
                            disabled
                            value=""
                        >
                            Escolha sua opção
                        </option>
                        <option value="0">
                            Nenhuma
                        </option>
                        <option value="1">
                            Nome
                        </option>
                        <option value="2">
                            Nivel
                        </option>
                    </Select>
                </Row>

                <Table
                    heads={["Nome", "Nivel"]}>
                    {verificarSeHaDesenvolvedores(desenvolvedores)}
                </Table>
            </div>
            <AddButton />
        </div>
    )
}

const getNameDevs = data => {
    if (data.length === 0) return {}

    // Devs final list
    const devs = {}

    data.map(
        (item, index) => {
            devs[item.nome] = null
        }
    )

    return devs
}

const mapStateToProps = state => {
    const {desenvolvedores} = state
    const devNameList = getNameDevs(desenvolvedores)

    return {
        desenvolvedores: desenvolvedores,
        devNameList: devNameList
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
