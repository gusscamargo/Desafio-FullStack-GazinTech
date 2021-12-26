import { Table } from "react-materialize"
import Body from "./components/Body"
import Head from "./components/Head"

export default function Desenvolvedor() {
    return (
        <div className="container">
            <h2>Desenolvedores</h2>
            <Table className="striped">
                <Head />
                <Body />
            </Table>
        </div>
    )
}
