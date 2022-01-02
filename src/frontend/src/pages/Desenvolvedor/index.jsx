import { useEffect, useState } from 'react'
import { Autocomplete, Row, Select } from 'react-materialize'
import { useSelector, useDispatch } from 'react-redux'

// Componentes
import Table from '../../components/Table'
import AddButton from '../../components/AddButton'
import DesenvolvedorRowTable from '../../components/Desenvolvedor/DesenvolvedorRowTable'

// Ferramentas
import { fetchAllDevs } from '../../store/features/desenvolvedores/fetchAllDevs'
import { ordenacaoByItem } from '../../services/tools/ordenacaoByItem'
import { searchByString } from '../../services/tools/searchByString'


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

// Função principal
const Desenvolvedor = () => {
    const dispatch = useDispatch()
    const desenvolvedoresResponse = useSelector(state => state.desenvolvedores)

    const [linhasTable, setLinhasTable] = useState(<DesenvolvedorRowTable />)
    const [data, setData] = useState([])
    const [devNameList, setDevNameList] = useState({})
    const [searchNome, setSearchNome] = useState("")
    const [selectOrdenacao, setSelectOrdenacao] = useState("nenhuma")
    const [selectFormaOrndenacao, setSelectFormaOrndenacao] = useState("crescente")

    useEffect(
        () => {
            Array(4).fill(0).map(() => dispatch(fetchAllDevs()))
        },
        [window.location.pathname]
    )

    useEffect(
        () => {
            dispatch(fetchAllDevs())
        },
        []
    )

    useEffect(
        () => setData(desenvolvedoresResponse.value.data),
        [desenvolvedoresResponse]
    )

    useEffect(
        () => {
            setLinhasTable(
                <DesenvolvedorRowTable data={data} />
            )
            setDevNameList(
                getNameDevs(data)
            )

        },
        [data, window.location.pathname, desenvolvedoresResponse]
    )

    // Ordenção da lista por topico em ordem crescente ou decrescente
    useEffect(
        () => {
            setLinhasTable(
                <DesenvolvedorRowTable
                    data={
                        ordenacaoByItem(data, selectOrdenacao, selectFormaOrndenacao)
                    }
                />
            )
        },
        [selectOrdenacao, selectFormaOrndenacao]
    )

    // Ordenação da lista de acordo com a barra de pesquisa de nomes
    useEffect(
        () => {
            setLinhasTable(
                <DesenvolvedorRowTable
                    data={
                        searchByString(data, searchNome, "nome")
                    }
                />
            )
        },
        [searchNome]
    )

    return (
        <div>
            <div className="container">
                <Row>
                    <h2>Desenvolvedores <AddButton /></h2>
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
                        onChange={
                            e => {
                                setSearchNome(e.target.value)
                            }
                        }
                    />
                    <Select
                        id="select-nivel"
                        multiple={false}
                        label='Escolha ordenação'
                        onChange={e => {
                            setSelectOrdenacao(e.target.value)
                        }}
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
                        <option value="Nivel.nivel">
                            Nivel
                        </option>
                    </Select>
                    <Select
                        id="select-ordem"
                        multiple={false}
                        label='Escolha a forma'
                        onChange={e => {
                            setSelectFormaOrndenacao(e.target.value)
                        }}
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
