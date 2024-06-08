import { Component } from "react";
import FormularioCadastroServico from "./servico/formularioCadastroServico";
import AlteraServicos from "./servico/alteraServicos";
import ListaServicos from "./servico/listaServicos";
import DeletarServicos from "./servico/deletaServicos";

export default class Servicos extends Component {

    render() {
        const div = {
            marginLeft: "1rem"
        }
        return(
            <>
                <main style={div}>
                    <h2>Cadastro</h2>
                    <FormularioCadastroServico tema="#e3f2fd" />

                    <hr/>

                    <h2>Listagem</h2>
                    <ListaServicos tema="" />

                    <hr/>

                    <h2>Alteração</h2>
                    <AlteraServicos tema="#e3f2fd" />

                    <hr/>

                    <h2>Deletar</h2>
                    <DeletarServicos tema="#e3f2fd" />
                </main>
            </>
        );
    }
}