import Acoes from "../../../components/Acoes/Acoes"

export default function Row({ id, nivel, numeroDevs}) {
    return (
        <tr>
            <td>
                {nivel}
            </td>
            <td>
                {numeroDevs}
            </td>
            <td>
                <Acoes
                    id={id}
                />
            </td>
        </tr>
    )
}
