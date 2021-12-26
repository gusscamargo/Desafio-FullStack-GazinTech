import { Table } from "react-materialize"

import Head from "./components/Head"
import Body from "./components/Body"

export default function Nivel() {
    return (
        <div className="container">
            <h2>Niveis</h2>
            <Table className="striped">
                <Head />
                <Body />
            </Table>
        </div>
    )
}
