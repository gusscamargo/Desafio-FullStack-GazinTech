import Row from './Row'

export default function Body({data}) {  
    return (
        <tbody>
            {
                data.map((item, index) => 
                    <Row 
                        key={index}
                        id={item.id}
                        nivel={item.nivel}
                        numeroDevs={item.numeroDevs} 
                    />
                )
            }
        </tbody>
    )
}
