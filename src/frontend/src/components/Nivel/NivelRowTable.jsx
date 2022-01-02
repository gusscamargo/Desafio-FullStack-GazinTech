import React from 'react'
import Acoes from "../Acoes"

export default function NivelRowTable({data = []}) {
    if (data.length > 0) {
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
                            blockDeleteButton={
                                item.numeroDevs > 0
                            }
                        />
                    </td>
                </tr>
            ))
        )
    } else {
        return (
            <tr>
                <td>
                    Não há dados
                </td>
            </tr>
        )
    }
}
