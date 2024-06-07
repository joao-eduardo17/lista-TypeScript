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
                    <h1>Cadastro</h1>
                    <FormularioCadastroPet tema="#e3f2fd" />

                    <hr/>

                    <h1>Listagem</h1>
                    <ListaPets tema="" />

                    <hr/>

                    <h1>Alteração</h1>
                    <AlteraPets tema="#e3f2fd" />

                    <hr/>

                    <h1>Deletar</h1>
                    <DeletarPets tema="#e3f2fd" />
                </main>
            </>
        );
    }
}