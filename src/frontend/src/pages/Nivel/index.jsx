import { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Autocomplete, Row, Select} from 'react-materialize'

// Componentes
import Table from "../../components/Table"
import Acoes from "../../components/Acoes"
import AddButton from "../../components/AddButton"

// Ferramentas
import { fetchAllNiveis } from "../../features/niveis/fetchAllNiveis"



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


const gerarRowTable = data => {
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
                            blockDeleteButton={ item.numeroDevs > 0 }
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

// Função principal
const Nivel = () => {

    // Dados essenciais
    const dispatch = useDispatch()
    const niveisResponse = useSelector(state => state.niveis)
    const nivelNameList = getNameNiveis(niveisResponse.value.data)
    
    // Mundaças de estado da pagina
    const [searchNivel, setSearchNivel] = useState("")
    const [data, setData] = useState(niveisResponse.value.data)
    const [selectOrdenacao, setSelectOrdenacao] = useState("nenhuma")
    const [selectFormaOrndenacao, setSelectFormaOrndenacao] = useState("crescente")
    const [preenchimentoTable, setPreenchimentoTable] = useState(gerarRowTable(data))


    // Atualizar data ao iniciar tela
    useEffect(
        () => {
            dispatch(fetchAllNiveis())
        },
        []
    )
    
    // Mudança de estado da tada
    useEffect(
        () => setData(niveisResponse.value.data),
        [niveisResponse]
    )

    // Preenchimento incial da lista
    useEffect(
        () => setPreenchimentoTable(gerarRowTable(
            data
        )),
        [data]
    )

    // Ordenção da lista por topico em ordem crescente ou decrescente
    useEffect(
        () => {
            ordenacaoByItem()
        },
        [selectOrdenacao, selectFormaOrndenacao]
    )

    // Ordenação da lista de acordo com a barra de pesquisa de nomes
    useEffect(
        () => searchByString(searchNivel),
        [searchNivel]
    )

    const ordenacaoByItem = () => {
        if (selectOrdenacao === "nenhuma"){
            setPreenchimentoTable(gerarRowTable(
                data
            ))
        }else{
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
                    <h2>Niveis <AddButton /></h2>
                    
                </Row>
                <Row>
                    <Autocomplete
                        id="search-dev"
                        options={{
                            data: nivelNameList
                        }}
                        placeholder="Escreva aqui"
                        title='Procurar nivel'
                        s={8}
                        value={
                            searchNivel
                        }
                        onChange={
                            e => setSearchNivel(e.target.value)
                        }
                    />
                    <Select
                        id="select-nivel"
                        multiple={false}
                        label='Escolha ordenação'
                        onChange={
                            e => { 
                                setSelectOrdenacao(e.target.value)
                            }
                        }

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
                        <option disabled value="">
                            Escolha sua opção
                        </option>
                        <option value="nenhuma">
                            Nenhuma
                        </option>
                        <option value="nivel">
                            Nome
                        </option>
                        <option value="numeroDevs">
                            Numero devs
                        </option>
                    </Select>
                    <Select
                        id="select-ordem"
                        multiple={false}
                        label='Escolha a forma'
                        onChange={
                            e => {
                                setSelectFormaOrndenacao(e.target.value)
                            }
                        }
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

                <Table heads={["Nome", "Numero de desenvolvedores"]}>
                    {
                        preenchimentoTable
                    }
                </Table>
            </div>
            
        </div>
    )
}

export default Nivel
