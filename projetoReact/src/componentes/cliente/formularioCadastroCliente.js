export default function FormularioCadastroCliente(props) {
    let tema = props.tema
    const flex = {
        display: "flex",
        gap: "1rem"
    }
    return (
        <div className="container-fluid">
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                </div>
                <section style={flex}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="date" className="form-control" placeholder="Data de expedição" aria-label="Data de expedição" aria-describedby="basic-addon1" />
                    </div>
                </section>
                <section style={flex}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="date" className="form-control" placeholder="Data de expedição" aria-label="Data de expedição" aria-describedby="basic-addon1" />
                    </div>
                </section>
                <div className="input-group mb-3">
                    <input type="tel" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" />
                </div>

                {/* <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                    <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                </div> */}
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}