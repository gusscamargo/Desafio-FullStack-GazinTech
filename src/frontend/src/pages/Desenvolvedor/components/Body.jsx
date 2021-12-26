import Row from './Row'

export default function Body({data}) {

    return (
        <tbody>
            {
                data.map(
                    (item, index)  => 
                    <Row
                        key={index}
                        id={item.id}
                        nome={item.nome}
                        nivel={item.Nivel.nivel}
                        idade={item.idade}
                        sexo={item.sexo} 
                    />
                )
            }
        </tbody>
    )
}
