export default function FormularioCadastroPet(props) {
    let tema = props.tema
    const flex = {
        // display: "flex",
        gap: "1rem"
    }
    return(
        <div className="container-fluid">
            <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CPF do dono" aria-label="CPF" aria-describedby="basic-addon1" />
                    </div>
                <section style={flex}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="CPF" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                    </div>
                </section>
                <section style={flex}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Raça" aria-label="CPF" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Gênero" aria-label="Gênero" aria-describedby="basic-addon1" />
                    </div>
                </section>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}