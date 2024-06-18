/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import BuscadorClientes from "../api/busca/busca";
import RemovedorClienteLocal from "../api/deleta/deletaClienteLocal";
import RemovedorCliente from "../api/deleta/deletaCliente";

type props = {
    tema: string
}

type state = {
    clientes: Object[]
}

export default class ListaCliente extends Component<props, state>{
    constructor(props) {
        super(props)
        this.state = { clientes: [] }
        // this.excluirLocal = this.excluirLocal.bind(this)
    }

    public buscarClientes() {
        let buscadorClientes = new BuscadorClientes()
        const clientes = buscadorClientes.buscar()
        clientes.then(clientes => {
            this.setState({ clientes })
        })
    }

    componentDidMount(){
        this.buscarClientes()
    }

    public excluirRemoto(idCliente: string) {
        let removedor = new RemovedorCliente()
        removedor.remover({ id: idCliente })
    }

    public excluirLocal(id: string, e: any) {
        e.preventDefault()
        let removedorLocal = new RemovedorClienteLocal()
        let clientes = removedorLocal.remover(this.state.clientes, id)
        this.setState({
            clientes: clientes 
        })
        this.excluirRemoto(id)
    }

    render() {
        let quantidadeClientes = this.state.clientes.length
        if (quantidadeClientes >= 0) {
            let lista = this.state.clientes.map(cliente =>
                <li className="collection-item avatar" key={cliente['id']}>
                    <a href="" target={"_self"} onClick={(e) => this.excluirLocal(cliente['id'], e)} className="secondary-content">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAvZJREFUSEvFllnITVEUx3+fqQxJhoQS5TOVSMnwInmQB4UHY4Yi0wMKmZKSKSTyYCxkCGVICuVBInMiGTIlM6FIX8iw/7d16txt33P2/Tzc9XTaZ+31X2vt/xqqqJBUVQiXcoHrAv2ADkAbc/o18Ay4BvyKDSQWuBpYDIwAmpUw/hE4DqwBnuY5kAfcCFgLzAIUbYz8ANYDKwB9ByULWOk84aLoaTf/AAeA88BD4K6dS683MAQYCdSz8yvAcOBdCLkUcDfgItDcLimFS4AHOSF3ArYBg03vlXHipX8vBNwauAm0S0U6DjgUk2coEHYdMN/07wN9gG/p+yHgw8AoD0RpLgdc1zcBc8zOZmBuFnAP9053TOECsM9FvjN1YaKdxQQvMsrGAOCnlaBKryB+xHtdKci4IuwIPAemALtSSJPdP+nFSBcjoQi32jmwNARcH/gENAGOAKNTlqd6kZcDftTY/gjoHAIWE8/Zj1BK/chj0552WsByoCjVimK3AatTPQ7ksjbgvYBbZmsYcMoHXmBloPMGRojQOyrSPeZ0DNvVYj+bITFbDC+KeJ573w2m0BT4msGecsBbuZb73mwJY6MPPNY9/kFT6GptMYu5seADrc3K1hhAfaIoYo27y4YkJ2I6VcybzwC2ml11sBs+sGr6A9AC2A9MiClUq/usN79kTeQt0NZ6xD8NZDswDagBVPwvIsFL1blYfNJsbHF9YnaojnWmt71nT3AWGJp4GOGADz7JBbDQNaPuViEKRJtKQUJDQmkeb/9XunVmWQRoopImXPraDmB6+iAE3BK4bk1dutoklv8HuGZ4X+BLHrD+q3Npg0gWgdNuk5hpQyPLB6VVWdJuJtE0EmjUIpAY1kojYmhUSr4Dx9xGccYZvm0ttaGRUBvLIFf7KsMki1fNgTchT/OWvcYWgdhYJzLdWvC0IK6q7bKXxhHbF1kEaqch0XqrEai5qzmeKXkR+5c10PsD7b2F/okR8nceYPK/XOBYu7l6FQP+CxV2mR9CgGw2AAAAAElFTkSuQmCC"/>
                    </a>
                    <i className="material-icons circle">NOME: </i>
                    <span className="title">{cliente['nome']}</span>
                    <p>NOME SOCIAL: {cliente['nomeSocial']}</p>
                    {/* <p>EMAIL: {cliente['email']}</p> */}
                </li>
            )
            return (
                <div>
                    <ul className="collection with-header">
                        <li className="collection-header"><h4>Clientes</h4></li>
                        {lista}
                    </ul>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
        }
        
}