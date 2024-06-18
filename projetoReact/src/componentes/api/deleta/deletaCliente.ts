import { URI } from "../services"
import RemovedorRemoto from "./deletaRemoto"

export default class RemovedorCliente implements RemovedorRemoto {
    public remover(objeto: Object): void {
        let json = { id: objeto['id'] }
        fetch(URI.DELETAR_CLIENTE, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        })
    }
}