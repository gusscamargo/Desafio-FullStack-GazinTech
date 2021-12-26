import React from 'react'

export default function Row({nome, nivel, idade, sexo}) {
    return (
        <tr>
            <th>{nome}</th>
            <th>{nivel}</th>
            <th>{idade}</th>
            <th>{sexo}</th>
        </tr>
    )
}
