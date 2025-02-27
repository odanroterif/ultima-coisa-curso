




export default function form() {
    return (
        <form>       
            <input type="text" placeholder="Marca" className="form-control" />
            <input type="text" placeholder="Modelo" className="form-control" />
            <input type="text" placeholder="Ano de Fabricação" className="form-control" />
            <input type="button" value="Cadastrar" className="btn btn-primary" />
            <div>
                <input type="button" value="Corrigir" className=" btn btn-warning" />
                <input type="button" value="Retirar" className="btn btn-danger" />
                <input type="button" value="Cancelar" className="btn btn-secondary" />
            </div>
        </form>
    );
}