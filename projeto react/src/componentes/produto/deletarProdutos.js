export default function DeletarProdutos(props) {
    let tema = props.tema
    return(
        <>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="ID do produto" aria-label="CPF" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Deletar</button>
            </div>
        </>
    )
}