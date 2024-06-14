import ListagemPS from "./listagem/listagemPS"
import ListagemPSCliente from "./listagem/listagemPSCliente"
import ListagemPSPet from "./listagem/listagemPSPet"

export default function Listagem() {
    const div = {
        margin: "1rem"
    }
    return(
        <main style={div}>
            <h2>Clientes que mais consumiram por quantidade ou preço</h2>
            <ListagemPSCliente /> 

            <hr/>

            <h2>Produtos ou serviços mais consumidos</h2>
            <ListagemPS />

            <hr/>

            <h2>Raças ou tipos de pet que mais consumiram</h2>
            <ListagemPSPet />
        </main>
    )
}