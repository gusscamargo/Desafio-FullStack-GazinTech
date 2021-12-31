import React from 'react'
import { Textarea } from 'react-materialize'
import Acoes from '../Acoes'

export default function DesenvolvedorRowTable({data = []}) {
    if (data.length > 0) {
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
    } else {
        return (
            <tr>
                <td>Sem dados</td>
            </tr>
        )
    }
}
