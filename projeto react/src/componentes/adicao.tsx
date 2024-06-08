import { Component } from "react";
import FormRgTel from "./adicao/formRgTel";
import FormPSCliente from "./adicao/formPSCliente";
import FormPSPet from "./adicao/formPSPet";

export default class Adicao extends Component {
    render() {
        const div = {
            margin: "1rem"
        }
        return(
            <>
                <main style={div}>
                    <h1>Vincular produto e servico ao cliente</h1>
                    <FormPSCliente tema="#e3f2fd"/>

                    <hr/>

                    <h1>Vincular produto e servico ao pet</h1>
                    <FormPSPet tema="#e3f2fd"/>

                    <hr/>

                    <h1>Vincular RG e Telefone</h1>
                    <FormRgTel tema="#e3f2fd" />
                </main>
            </>
        );
    }
}