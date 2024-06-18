import { URI } from "../services"
import Buscador from "./interfaceBusca"

export default class BuscadorClientes implements Buscador {
    public async buscar() {
        let json = await fetch(URI.CLIENTES).then(resposta => resposta.json())
        return json
    }
}