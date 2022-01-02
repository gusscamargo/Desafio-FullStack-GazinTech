import React from 'react'
import { Row } from 'react-materialize'

import DesenvolvedorForm from "../../components/Desenvolvedor/DesenvolvedorForm"

export default function DesenvolvedorCreate() {
    return (
        <div className="container">
            <Row>
                <h2>Desenvolvedor</h2>
            </Row>
               <DesenvolvedorForm />
        </div>
    )
}
