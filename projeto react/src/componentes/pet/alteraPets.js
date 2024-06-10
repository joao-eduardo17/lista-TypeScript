export default function AlteraPets(props) {
    let tema = props.tema
    const flex = {
        display: "flex",
        gap: "1rem"
    }
    return(
        <main>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="CPF do dono" aria-label="CPF" aria-describedby="basic-addon1" />
            </div>
            <section style={flex}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome do Pet" aria-label="CPF" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-text">
                        <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                    </div>
                    <input type="text" className="form-control" placeholder="Novo nome" aria-label="Text input with checkbox"/>
                </div>
            </section>
            <section>
                <div className="input-group mb-3">
                    <div className="input-group-text">
                        <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                    </div>
                    <input type="text" className="form-control" placeholder="Tipo" aria-label="Text input with checkbox"/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-text">
                        <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                    </div>
                    <input type="text" className="form-control" placeholder="Raça" aria-label="Text input with checkbox"/>
                </div>
            </section>
            <div className="input-group mb-3">
                <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                </div>
                <input type="text" className="form-control" placeholder="Gênero" aria-label="Text input with checkbox"/>
            </div>
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Alterar</button>
            </div>
        </main>
    )
}