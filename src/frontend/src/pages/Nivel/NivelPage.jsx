import { Table } from "react-materialize"

import Head from "./components/Head"
import Body from "./components/Body"

export default function Nivel() {
    return (
        <div className="container">
            <Table className="striped">
                <Head />
                <Body />
            </Table>
        </div>
    )
}
