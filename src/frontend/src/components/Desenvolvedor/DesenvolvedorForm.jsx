import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, TextInput, Select, Textarea, Button, Icon, DatePicker } from "react-materialize"
import { useNavigate } from 'react-router-dom'
import { fetchAllNiveis } from '../../store/features/niveis/fetchAllNiveis'

import { postDesenvolvedor } from '../../store/features/desenvolvedor/post'
import { putDesenvolvedor } from '../../store/features/desenvolvedor/put'

import { convertFormatTime, convertDbFormatToHuman } from '../../services/tools/convertFormatTime'
import { toastError } from '../../services/tools/toastError'

export default function DesenvolvedorForm({data = {}}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()
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


    const onChangeSave = () => {
        if(nome === ""){
            toastError('Campo nome não pode estar vazio')
        }

        if(idade === ""){
            toastError("Campo idade não pode estar vazio")
        }

        if (datanascimento === ""){
            toastError("Campo idade de nascimento não pode estar vazio")
        }

        if(nivel === ""){
            toastError("Campo nivel não pode estar com nada seleiconado")
        }

        if(nome !== "" && idade !== "" && datanascimento !== "" && nivel !== ""){
            if(typeof data.id === "undefined"){
                dispatch(postDesenvolvedor({
                    nome,
                    idade,
                    datanascimento,
                    sexo,
                    nivel_id: nivel,
                    hobby: hobbies
                }))
            }else{
                dispatch(putDesenvolvedor({
                    id: data.id,
                    nome,
                    idade,
                    datanascimento,
                    sexo,
                    nivel_id: nivel,
                    hobby: hobbies
                }))
            }

            navigate("/desenvolvedor")
        }
    }

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
                    value={sexo.toString()}
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
                <DatePicker
                    id="DatePicker-7"
                    s={4}
                    label="Sua data de nascimento"
                    value={convertDbFormatToHuman(datanascimento)}
                    options={{
                        autoClose: true,
                        container: null,
                        setDefaultDate: true,
                        defaultDate: new Date(datanascimento),
                        disableDayFn: null,
                        disableWeekends: false,
                        events: [],
                        firstDay: 0,
                        format: 'dd mmm yyyy',
                        i18n: {
                            cancel: 'Cancelar',
                            clear: 'Limpar',
                            done: 'Ok',
                            months: [
                                'Janeiro',
                                'Fevereiro',
                                'Março',
                                'Abril',
                                'Maio',
                                'Junho',
                                'Julho',
                                'Agosto',
                                'Setembro',
                                'Outubro',
                                'Novembro',
                                'Dezembro'
                            ],
                            monthsShort: [
                                'Jan',
                                'Fev',
                                'Mar',
                                'Abr',
                                'Mai',
                                'Jun',
                                'Jul',
                                'Ago',
                                'Set',
                                'Out',
                                'Nov',
                                'Dez'
                            ],
                            nextMonth: '›',
                            previousMonth: '‹',
                            weekdays: [
                                'Domingo',
                                'Segunda',
                                'Terça',
                                'Quarta',
                                'Quinta',
                                'Sexta',
                                'Sabado'
                            ],
                            weekdaysAbbrev: [
                                'D',
                                'S',
                                'T',
                                'Q',
                                'Q',
                                'S',
                                'S'
                            ],
                            weekdaysShort: [
                                'Dom',
                                'Seg',
                                'Ter',
                                'Qua',
                                'Qui',
                                'Sex',
                                'Sab'
                            ]
                        },
                        isRTL: true,
                        maxDate: null,
                        minDate: new Date("1970-01-01"),
                        onClose: null,
                        onDraw: null,
                        onOpen: null,
                        onSelect: null,
                        parse: null,
                        setDefaultDate: false,
                        showClearBtn: false,
                        showDaysInNextAndPreviousMonths: false,
                        showMonthAfterYear: false,
                        yearRange: 10
                    }}
                    onChange={
                        e => setDatanascimento(convertFormatTime(e))
                    }
                    readOnly
                    
                />
                <TextInput
                    id="idade"
                    label="Sua idade"
                    s={4}
                    value={idade.toString()}
                    onChange={
                        e => {
                            const value = e.target.value
                            console.log(parseInt(value))
                            if (isNaN(parseInt(value)) === false && value.length <= 3){
                                setIdade(value)
                            }else{
                                toastError("Digite uma idade valida")
                                setIdade("")
                            }
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
                    value={nivel.toString()}
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
                    onClick={
                        onChangeSave
                    }
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
