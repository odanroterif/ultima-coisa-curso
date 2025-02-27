


export default function form({ button, keyevent, registrate, obj, cancel, del, alter }) {
    return (
        <form>                                
            <input type="text" value={obj.name} onChange={keyevent} name="name" placeholder="Nome" className="form-control" />
            <input type="text" value={obj.mark} onChange={keyevent} name="mark" placeholder="Marca" className="form-control" />
            {
                button
                    ?
                    <input type="button" value="Cadastrar" onClick={registrate} className="btn btn-primary" />
                    :
                    <div>
                        <input type="button" onClick={alter} value="Alterar" className=" btn btn-warning" />
                        <input type="button" onClick={del} value="Remover" className="btn btn-danger" />
                        <input type="button" onClick={cancel} value="Cancelar" className="btn btn-secondary" />
                    </div>
            }
        </form>
    );
}