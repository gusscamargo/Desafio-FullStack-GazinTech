import { Table as TableMaterialize } from "react-materialize"

import Head from '../Head'

function Table({ heads, children}) {
    return (
        <TableMaterialize className="striped">
            <Head 
                heads={heads}
            />
            <tbody>
                {children}
            </tbody>
        </TableMaterialize>
    )
}

export default Table
