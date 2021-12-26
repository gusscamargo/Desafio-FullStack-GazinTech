import { Link } from "react-router-dom"
import { Button, Icon, Modal } from "react-materialize"

export default function Acoes({id, modalView}) {
    const { pathname } = window.location
    
    return (
        <div className="btn-group">
            <Modal
                actions={[
                    <Button flat modal="close" node="button" waves="green">Fechar</Button>
                ]}
                bottomSheet={false}
                fixedFooter
                header={pathname.split("/")[1].charAt(0).toUpperCase() + pathname.split("/")[1].slice(1)}
                id={`Modal-${id}`}
                open={false}
                options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                }}
                trigger={
                    <Button
                        className="col l2 offset-l1 offset-s4 s4 blue"
                        node="button"
                        tooltip="Ver mais"
                        tooltipOptions={{
                            position: 'top'
                        }}
                        waves="light"
                        icon={<Icon>visibility</Icon>}
                    />
                }
            >
                {modalView}
            </Modal>
            
            <Link to={`${pathname}/${id}`}>
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
                icon={<Icon>delete</Icon>}
            />
        </div>
    )
}
