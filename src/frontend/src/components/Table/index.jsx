import { Table as TableMaterialize } from "react-materialize"

import Head from './Head'

function Table({ heads, children}) {
    return (
        <TableMaterialize
            striped={true}
         >
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
