import { Component } from "react";
import FormularioCadastroCliente from "./formularioCadastroCliente";

export default class Clientes extends Component {
    render() {
        const styleH1 = {
            paddingLeft: "1rem",
            // color: "red"
        }
        return(
            <>
                <h1 style={styleH1}>Cadastro</h1>
                <FormularioCadastroCliente tema="#e3f2fd" />
            </>
        );
    }
}