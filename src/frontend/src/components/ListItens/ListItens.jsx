import { Table } from "react-materialize"

import Head from './Head'
import Body from './Body'

function ListItens({heads, data}) {
    return (
        <Table className="striped">
            <Head 
                heads={heads}
            />
            <Body
                data={data}
            />
        </Table>
    )
}

export default ListItens
