/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

export default class ListaPets extends Component<props>{
    render() {

        // STYLES
        let tema = this.props.tema
        

        return (
            <div className="container-fluid">
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">Pet 1</a>
                    <a href="#" className="list-group-item list-group-item-action">Pet 2</a>
                    <a href="#" className="list-group-item list-group-item-action">Pet 3</a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }} >Pet 4</a>
                    <a href="#" className="list-group-item list-group-item-action">Pet 5</a>
                    <a href="#" className="list-group-item list-group-item-action">Pet 6</a>
                </div>
            </div>
        )
    }
}