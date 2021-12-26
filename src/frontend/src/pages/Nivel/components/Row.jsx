import React from 'react'

export default function Row({ nivel, numeroDevs}) {
    return (
        <tr>
            <td>
                {nivel}
            </td>
            <td>
                {numeroDevs}
            </td>
        </tr>
    )
}
