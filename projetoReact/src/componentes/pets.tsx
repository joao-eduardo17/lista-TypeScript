import { Component } from "react";
import FormularioCadastroPet from "./pet/formularioCadastroPet";
import ListaPets from "./pet/listaPets";
import AlteraPets from "./pet/alteraPets";
import DeletarPets from "./pet/deletarPets";

export default class Pets extends Component {

    render() {
        const div = {
            marginLeft: "1rem"
        }
        return(
            <>
                <main style={div}>
                    <h2>Cadastro</h2>
                    <FormularioCadastroPet tema="#e3f2fd" />

                    <hr/>

                    <h2>Listagem</h2>
                    <ListaPets tema="" />

                    <hr/>

                    <h2>Alteração</h2>
                    <AlteraPets tema="#e3f2fd" />

                    <hr/>

                    <h2>Deletar</h2>
                    <DeletarPets tema="#e3f2fd" />
                </main>
            </>
        );
    }
}