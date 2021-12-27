import { Table } from "react-materialize"

import Head from './Head'
import Body from './Body'

function ListItens({ heads, children}) {
    return (
        <Table className="striped">
            <Head 
                heads={heads}
            />
            <Body>
                {children}
            </Body>
        </Table>
    )
}

export default ListItens
