import React from 'react'
import Acoes from '../../../components/Acoes/Acoes'

export default function Row({id, nome, nivel, idade, sexo}) {
    return (
        <tr>
            <td>{nome}</td>
            <td>{nivel}</td>
            <td>{idade}</td>
            <td>{sexo}</td>
            <td>
                <Acoes
                    id={id}
                />
            </td>
        </tr>
    )
}
