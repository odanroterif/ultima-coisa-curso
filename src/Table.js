



export default function table({vetor}){
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Selecionar</th>
                </tr>
            </thead>
            <tbody>
                {
                    vetor.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.mark}</td>
                            <td><button className="btn btn-sucess"></button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}