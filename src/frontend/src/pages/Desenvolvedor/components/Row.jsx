import React from 'react'

export default function Row({nome, nivel, idade, sexo}) {
    return (
        <tr>
            <td>{nome}</td>
            <td>{nivel}</td>
            <td>{idade}</td>
            <td>{sexo}</td>
        </tr>
    )
}
