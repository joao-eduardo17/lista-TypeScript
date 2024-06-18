import AlteraPets from "./pet/alteraPets"
import DeletarPets from "./pet/deletarPets"
import FormularioCadastroPet from "./pet/formularioCadastroPet"
import ListaPets from "./pet/listaPets"

export default function Pets() {
    const div = {
        marginLeft: "1rem"
    }
    return(
        <main style={div}>
            <h2>Cadastro</h2>
            <FormularioCadastroPet tema="#e3f2fd" />

            <hr/>

            <h2>Listagem</h2>
            <ListaPets />

            <hr/>

            <h2>Alteração</h2>
            <AlteraPets tema="#e3f2fd" />  

            <hr/>

            <h2>Deletar</h2>
            <DeletarPets tema="#e3f2fd" />
        </main>
    )
}