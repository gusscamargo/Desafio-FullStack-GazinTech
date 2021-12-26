import { Link } from "react-router-dom"
import { Button, Icon,B } from "react-materialize"

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
                <div className="btn-group">
                    <Link to={`/nivel/${id}`}>
                        <Button
                            className="col l2 offset-l1 offset-s4 s4 orange accent-4"
                            node="button"
                            tooltip="Editar"
                            tooltipOptions={{
                                position: 'top'
                            }}
                            waves="light"
                            icon={<Icon>create</Icon>}
                        />
                    </Link>
                    <Button
                        className="col l2 offset-l1 offset-s4 s4 red"
                        node="button"
                        tooltip="Excluir"
                        tooltipOptions={{
                            position: 'top'
                        }}
                        waves="light"
                        icon={<Icon>block</Icon>}
                    />
                </div>
            </td>
        </tr>
    )
}
