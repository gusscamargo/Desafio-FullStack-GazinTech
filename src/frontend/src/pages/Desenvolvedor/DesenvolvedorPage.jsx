import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Row , TextInput, Select, Textarea, Button, Icon} from "react-materialize"

import { getDesenvolvedorId } from "../../store/actions/desenvolvedor"
import { atualizarNiveis } from "../../store/actions/nivel"

const DesenvolvedorPage = ({data, niveis}) => {
    return (
        <div className="container">
            <Row>
                <h2>Desenvolvedor</h2>
            </Row>
            <form onSubmit={() => console.log("Submit form nivel")}>
                <Row>
                    <TextInput
                        id="nome"
                        label="Nome"
                        s={9}
                    />
                    <Select
                        id="sexo"
                        label="Sexo"
                        multiple={false}
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
                        value="2"
                        s={3}
                    >
                        <option value="">
                            Nenhum deles
                        </option>
                        <option value="M">
                            Homem
                        </option>
                        <option value="F">
                            Mulher
                        </option>
                        
                    </Select>
                </Row>
                <Row>
                    <TextInput
                        id="datanascimento"
                        label="Sua data de nascimento"
                        s={4}
                    />
                    <TextInput
                        id="idade"
                        label="Sua idade"
                        s={4}
                    />
                    <Select
                        id="Select-16"
                        label="Escolha seu nivel"
                        multiple={false}
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
                        value="2"
                        s={4}
                    >
                        <option value="">
                            Nenhum
                        </option>

                        {
                            niveis.map((item, index) => {
                                return (
                                    <option value={item.id}>
                                        {item.nivel}
                                    </option>
                                )
                            })
                        }
                        


                        <option value="3">
                            Option 3
                        </option>
                    </Select>
                </Row>
                <Row>
                    <Textarea
                        id={"hobbies"}
                        s={12}
                        label={"Escreva mais sobre você e seus hobbies..."}
                        
                    >
                        
                    </Textarea>
                </Row>
                <Row>
                    <Button
                        className="blue"
                        node="button"
                        type="submit"
                        waves="light"
                    >
                        Salvar
                        <Icon right>
                            send
                        </Icon>
                    </Button>
                </Row>
            </form>
            
        </div>
    )
}


const mapStateToProps = state => {
    const { desenvolvedores, niveis } = state
    const dataDev = typeof desenvolvedores.data === "undefined" ? [] : desenvolvedores.data
    const dataNiveis = typeof niveis.data === "undefined" ? [] : niveis.data

    console.log(state)
    return {
        data: dataDev,
        status: desenvolvedores.status,
        niveis: dataNiveis
    }

    
}

const mapDispatchToProp = dispatch => {
    // Gambiarra eu sei
    const id = window.location.pathname.match("[1-9][0-9]*")

    if (id !== null) {
        return (
            bindActionCreators(
                getDesenvolvedorId(dispatch, id),
                dispatch
            )
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(DesenvolvedorPage)
