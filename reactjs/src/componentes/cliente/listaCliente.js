import { useEffect, useState } from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaCliente(props) {
    const [clientes, setClientes] = useState([])

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
    // let tema = props.tema
    return (
        <div className="container-fluid">
            <div className="list-group">
                {clientes.map((cliente, index) => (
                    <a href="#" className="list-group-item list-group-item-action">ID: {cliente.id} | {cliente.nome}</a>
                ))}
                {/* <a href="#" className="list-group-item list-group-item-action">Cliente 2</a>
                <a href="#" className="list-group-item list-group-item-action">Cliente 3</a>
                <a href="#" className="list-group-item list-group-item-action">Cliente 4</a>
                <a href="#" className="list-group-item list-group-item-action">Cliente 5</a>
                <a href="#" className="list-group-item list-group-item-action">Cliente 6</a> */}
            </div>
        </div>
    )
}