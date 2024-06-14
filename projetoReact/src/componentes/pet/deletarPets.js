export default function DeletarPets(props) {
    let tema = props.tema
    return(
        <main>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="CPF do dono" aria-label="CPF" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Nome do Pet" aria-label="CPF" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Deletar</button>
            </div>
        </main>
    )
}