import { Component } from "react";

export default class Homepage extends Component {
    render() {

        // Styles
        const div = {
            paddingLeft: "1rem",
            // background: "#eff4f7"
        }

        return(
            <>
                <main style={div}>
                    <h1>PetLovers</h1>
                    <h3>Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias</h3>
                    <h4>Aqui estão algumas de nossas funções:</h4>
                    <ul>
                        <li>Clientes / Pets / Produtos / Serviços</li>
                        <ul>
                            <li>Cadastro</li>
                            <li>Listagem</li>
                            <li>Alteração</li>
                            <li>Deletar</li>
                        </ul>
                        <li>Adições</li>
                        <ul>
                            <li>Vincular produtos e serviços aos clientes</li>
                            <li>Vincular produtos e serviços aos pets</li>
                            <li>Adicionar RG e número de telefone ao cliente</li>
                        </ul>
                        <li>Listagens</li>
                        <ul>
                            <li>Clientes que mais consumiram</li>
                            <li>Produtos ou serviços mais consumidos</li>
                            <li>Produtos ou serviços mais consumidos por tipo e raça de pet</li>
                        </ul>
                    </ul>
                </main>
            </>
        );
    }
}