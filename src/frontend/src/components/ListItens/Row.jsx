import Acoes from "./Acoes"

export default function Row({data}) {
    return (
        <tr>
            <td>
                {data.nivel || data.nome || "NaN"}
            </td>
            <td>
                {data.numeroDevs || data.Nivel.nivel || "NaN"}
            </td>
            <td>
                <Acoes
                    id={data.id}
                />
            </td>
        </tr>
    )
}
