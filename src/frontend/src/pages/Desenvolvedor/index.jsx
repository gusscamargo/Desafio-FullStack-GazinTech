import { useEffect, useState } from 'react'
import { Textarea, Autocomplete, Row, Select } from 'react-materialize'
import { useSelector, useDispatch } from 'react-redux'

// Componentes
import Table from '../../components/Table'
import Acoes from "../../components/Acoes"
import AddButton from '../../components/AddButton'

// Ferramentas
import { fetchAllDevs } from '../../store/features/desenvolvedores/fetchAllDevs'

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


const gerenciarDados = data => {
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
    }else{
        return (
            <tr>
                <td>Sem dados</td>
            </tr>
        )
    }
}

// Função principal
const Desenvolvedor = () => {
    const dispatch = useDispatch()
    const desenvolvedoresResponse = useSelector(state => state.desenvolvedores)

    const [linhasTable, setLinhasTable] = useState(gerenciarDados([]))
    const [data, setData] = useState([])
    const [devNameList, setDevNameList] = useState({})

    useEffect(
        () => dispatch(fetchAllDevs()),
        []
    )

    useEffect(
        () => setData(desenvolvedoresResponse.value.data),
        [desenvolvedoresResponse]
    )

    useEffect(
        () => {
            setLinhasTable(
                gerenciarDados(data)
            )
            setDevNameList(
                getNameDevs(data)
            )

        },
        [data]
    )

    const ordenacaoByItem = () => {
        if (selectOrdenacao === "nenhuma") {
            setPreenchimentoTable(gerarRowTable(
                data
            ))
        } else {
            if (selectFormaOrndenacao === "crescente") {
                setPreenchimentoTable(gerarRowTable(
                    [...data].sort((a, b) => (a[selectOrdenacao] > b[selectOrdenacao]) ? 1 : ((b[selectOrdenacao] > a[selectOrdenacao]) ? -1 : 0))
                ))

            } else {
                setPreenchimentoTable(gerarRowTable(
                    [...data].sort((a, b) => (a[selectOrdenacao] < b[selectOrdenacao]) ? 1 : ((b[selectOrdenacao] < a[selectOrdenacao]) ? -1 : 0))
                ))
            }
        }
    }

    const searchByString = currentSearch => {
        const result = [];

        [...data].map((item, indexo) => {
            if (item.nivel.search(currentSearch) > -1) result.push(item)
        })

        setPreenchimentoTable(gerarRowTable(
            result
        ))
    }

    return (
        <div>
            <div className="container">
                <Row>
                    <h2>Desenolvedores <AddButton /></h2>
                </Row>
                <Row>
                    <Autocomplete
                        id="search-dev"
                        options={{
                            data: devNameList
                        }}
                        placeholder="Escreva aqui"
                        title='Procurar desenvolvedor'
                        s={8}
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
                        s={2}
                    >
                        <option
                            disabled
                            value=""
                        >
                            Escolha sua opção
                        </option>
                        <option value="none">
                            Nenhuma
                        </option>
                        <option value="nome">
                            Nome
                        </option>
                        <option value="nivel">
                            Nivel
                        </option>
                    </Select>
                    <Select
                        id="select-ordem"
                        multiple={false}
                        label='Escolha a forma'
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
                        s={2}
                    >
                        <option value="crescente">
                            Crescente
                        </option>
                        <option value="decrescente">
                            Decrescente
                        </option>
                    </Select>
                </Row>

                <Table
                    heads={["Nome", "Nivel"]}>
                    {
                        linhasTable
                    }
                </Table>
            </div>
            
        </div>
    )
}



export default Desenvolvedor
