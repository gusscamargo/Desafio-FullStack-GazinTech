import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, TextInput, Select, Textarea, Button, Icon } from "react-materialize"
import { fetchAllNiveis } from '../../store/features/niveis/fetchAllNiveis'

export default function DesenvolvedorForm({data = {}}) {

    const dispatch = useDispatch()
    const niveisResponse = useSelector(state => state.niveis)
    const [niveisData, setNiveisData] = useState([])

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [datanascimento, setDatanascimento] = useState("")
    const [sexo, setSexo] = useState("")
    const [nivel, setNivel] = useState("")
    const [hobbies, setHobbies] = useState("")

    useEffect(
        () => {
            dispatch(fetchAllNiveis())
        },
        []
    )

    useEffect(
        () => {
            if(typeof data.Nivel !== "undefined"){
                setNome(data.nome)
                setIdade(data.idade)
                setDatanascimento(data.datanascimento)
                setSexo(data.sexo)
                setNivel(data.Nivel.id)
                setHobbies(data.hobby)
            }
        },
        [data]
    )

    useEffect(
        () => setNiveisData(niveisResponse.value.data),
        [niveisResponse]
    )

    return (
        <div>
            <Row>
                <TextInput
                    id="nome"
                    label="Nome"
                    s={9}
                    value={nome}
                    onChange={
                        e => {
                            setNome(e.target.value)
                        }
                    }
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
                    s={3}
                    value={sexo}
                    onChange={
                        e => {
                            setSexo(e.target.value)
                        }
                    }
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
                    value={datanascimento}
                    onChange={
                        e => {
                            setDatanascimento(e.target.value)
                        }
                    }
                />
                <TextInput
                    id="idade"
                    label="Sua idade"
                    s={4}
                    value={idade}
                    onChange={
                        e => {
                            setIdade(e.target.value)
                        }
                    }
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
                    s={4}
                    value={nivel}
                    onChange={
                        e => {
                            setNivel(e.target.value)
                        }
                    }
                >
                    <option value="">
                        Nenhum
                    </option>

                    {
                        niveisData.map((item, index) => {
                            return (
                                <option key={index} value={item.id} defaultChecked={item.id === nivel ? true : false}>
                                    {item.nivel}
                                </option>
                            )
                        })
                    }
                </Select>
            </Row>
            <Row>
                <Textarea
                    id={"hobbies"}
                    s={12}
                    label={"Escreva mais sobre você e seus hobbies..."}
                    value={hobbies}
                    onChange={
                        e => {
                            setHobbies(e.target.value)
                        }
                    }
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
        </div>
    )
}
