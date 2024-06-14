/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

export default class ListagemPSPet extends Component {
    render() {
        const flex = {
            display: "flex",
            gap: "1rem"
        }
        return(
            <>
                <section style={flex}>
                    <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Opções</label>
                    <select className="form-select" id="inputGroupSelect01">
                        <option selected>Escolha...</option>
                        <option value="1">Produto</option>
                        <option value="2">Serviço</option>
                    </select>
                    </div>
                    <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Opções</label>
                    <select className="form-select" id="inputGroupSelect01">
                        <option selected>Escolha...</option>
                        <option value="1">Tipo</option>
                        <option value="2">Raça</option>
                    </select>
                    </div>      
                </section>
                <div className="container-fluid">
                <div className="list-group">
                    <h4>Cachorro</h4>
                    <a href="#" className="list-group-item list-group-item-action">Produto 1: x | QUANTIDADE: y</a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 2: x | QUANTIDADE: y</a>
                    <h4>Gato</h4>
                    <a href="#" className="list-group-item list-group-item-action">Produto 1: x | QUANTIDADE: y</a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 2: x | QUANTIDADE: y</a>
                </div>
            </div>
            </>
        )
    }
}