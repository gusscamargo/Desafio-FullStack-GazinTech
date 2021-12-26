import React from 'react'

export default function Head({}) {
    return (
        <thead>
            <tr>
                <th data-field="name">
                    Nome
                </th>
                <th data-field="numberDevs">
                    Numero de Desenvolvedores
                </th>
                <th data-field="actions">
                    Ações
                </th>
            </tr>
        </thead>
    )
}
