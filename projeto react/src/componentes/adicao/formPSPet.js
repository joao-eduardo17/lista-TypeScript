export default function FormPSPet(props) {
    let tema = props.tema
    const flex = {
        display: "flex",
        gap: "1rem"
    }
    return(
        <>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="CPF do dono" aria-label="CPF" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Nome do pet" aria-label="CPF" aria-describedby="basic-addon1" />
            </div>
            <section style={flex}>
            <div className="input-group mb-3">
                <input type="number" className="form-control" placeholder="ID" aria-label="ID" aria-describedby="basic-addon1" />
            </div>
                <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Opções</label>
                <select className="form-select" id="inputGroupSelect01">
                    <option selected>Escolha...</option>
                    <option value="1">Produto</option>
                    <option value="2">Serviço</option>
                </select>
                </div>
            </section>
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Vincular</button>
            </div>
        </>
    )
}