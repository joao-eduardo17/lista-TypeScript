import { Component } from "react";

type props = {
    tema: string
}

export default class AlteraProdutos extends Component<props> {
    render() {
        let tema = this.props.tema

        return(
            <>
                <main>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="ID do produto" aria-label="CPF" aria-describedby="basic-addon1" />
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
                        <input type="text" className="form-control" placeholder="Novo valor" aria-label="Text input with checkbox"/>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Alterar</button>
                    </div>
                </main>
            </>
        )
    }
}