/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

export default class ListagemPS extends Component {
    render() {
        return(
            <>
                <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Opções</label>
                <select className="form-select" id="inputGroupSelect01">
                    <option selected>Escolha...</option>
                    <option value="1">Produto</option>
                    <option value="2">Serviço</option>
                </select>
                </div>
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">Produto 1: x | QUANTIDADE: y</a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 2: x | QUANTIDADE: y</a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 3: x | QUANTIDADE: y</a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 4: x | QUANTIDADE: y</a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 5: x | QUANTIDADE: y</a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 6: x | QUANTIDADE: y</a>
                </div>
            </>
        )
    }
}