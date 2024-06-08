/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

export default class ListaServicos extends Component<props>{
    render() {

        // STYLES
        let tema = this.props.tema
        

        return (
            <div className="container-fluid">
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">Serviços 1</a>
                    <a href="#" className="list-group-item list-group-item-action">Serviços 2</a>
                    <a href="#" className="list-group-item list-group-item-action">Serviços 3</a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }} >Serviços 4</a>
                    <a href="#" className="list-group-item list-group-item-action">Serviços 5</a>
                    <a href="#" className="list-group-item list-group-item-action">Serviços 6</a>
                </div>
            </div>
        )
    }
}