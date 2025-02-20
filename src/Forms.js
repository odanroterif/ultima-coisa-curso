



export default function form({button,keyevent,registrate}){
    return(
        <form>
            <input type="text" onChange={keyevent} placeholder="Nome" className="form-control" />
            <input type="text" onChange={keyevent} placeholder="Marca" className="form-control" />
            {
                button
                    ?
                    <input type="button" value="Cadastrar" onClick={registrate} className="btn btn-primary" />
                    :
                    <div>
                        <input type="button" value="Alterar" className=" btn btn-warning" />
                        <input type="button" value="Remover" className="btn btn-danger" />
                        <input type="button" value="Cancelar" className="btn btn-secondary" />
                    </div>
            }
        </form>
    )
}