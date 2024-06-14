import { Component } from "react";

type props = {
    tema: string
}

export default class AlteraClientes extends Component<props> {
    render() {

        // STYLES
        let tema = this.props.tema
        const flex = {
            display: "flex",
            gap: "1rem"
        }
        return(
            <>
                <main>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-text">
                            <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                        </div>
                        <input type="text" className="form-control" placeholder="Novo nome" aria-label="Text input with checkbox"/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-text">
                            <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                        </div>
                        <input type="text" className="form-control" placeholder="Novo nome Social" aria-label="Text input with checkbox"/>
                    </div>
                    <section style={flex}>
                        <div className="input-group mb-3">
                            <div className="input-group-text">
                                <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                            </div>
                            <input type="text" className="form-control" placeholder="Novo RG" aria-label="Text input with checkbox"/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-text">
                                <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                            </div>
                            <input type="date" className="form-control" placeholder="RG" aria-label="Text input with checkbox"/>
                        </div>
                    </section>
                    <div className="input-group mb-3">
                        <div className="input-group-text">
                            <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                        </div>
                        <input type="tel" className="form-control" placeholder="Novo Telefone" aria-label="Text input with checkbox"/>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Alterar</button>
                    </div>
                </main>
            </>
        );
    }
}