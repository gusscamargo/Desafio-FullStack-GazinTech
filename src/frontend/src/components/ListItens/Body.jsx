import Row from './Row'

export default function Body({data}) {  
    return (
        <tbody>
            {
                data.map((item, index) => (
                        <Row
                            key={index}
                            data={item}
                        />
                    )
                )
            }
        </tbody>
    )
}
