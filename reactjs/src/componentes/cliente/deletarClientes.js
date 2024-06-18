import { useEffect, useRef, useState } from "react"

export default function DeletarClientes(props) {
    const [cliente, setClientes] = useState([])
    const id = useRef(null)

    useEffect(() => {
        buscaClientes()
    }, [])

    const buscaClientes = async() => {
        try {
            const response = await fetch('http://localhost:32831/cliente/clientes', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const result = await response.json();
            setClientes(result)

        } catch (error) {
            alert('Erro ao conectar com o servidor');
            console.error(error);
            return null
        }
    }

    const deletaCliente = async() => {
        const response = await fetch('http://localhost:32831/cliente/excluir', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id.current.value
            })
        })
        id.current.value = ""
        const result = await response.json()
        setClientes(result)
    }

    let tema = props.tema
    return(
        <main>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="ID" aria-label="CPF" aria-describedby="basic-addon1" ref={id} />
            </div>
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={deletaCliente}>Deletar</button>
            </div>
        </main>
    )
}