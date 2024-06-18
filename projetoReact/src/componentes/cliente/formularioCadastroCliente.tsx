import { Component } from "react";
import CadastradorCliente from "../api/cadastro/cadastro";

type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {
    private nome: string
    private nomeSocial: string
    private email: string
    private telefone: string

    constructor(props: any) {
        super(props)
        this.capturarNome = this.capturarNome.bind(this)
        this.capturarNomeSocial = this.capturarNomeSocial.bind(this)
        this.capturarTel = this.capturarTel.bind(this)
        this.capturarEmail = this.capturarEmail.bind(this)
        this.submeterFormulario = this.submeterFormulario.bind(this)
        this.cadastrarCliente = this.cadastrarCliente.bind(this)
    }

    public cadastrarCliente(objeto: Object) {
        let cadastrador = new CadastradorCliente()
        cadastrador.cadastrar(objeto)
    }

    public capturarNome(evento: any) {
        this.nome = evento.target.value
    }
    
    public capturarNomeSocial(evento: any) {
        // console.log("DEU CERTO")
        this.nomeSocial = evento.target.value
    }

    public capturarEmail(evento: any) {
        // console.log("DEU CERTO")
        this.email = evento.target.value
    }
    
    public capturarTel(evento: any) {
        this.telefone = evento.target.value
    }

    public submeterFormulario(evento: any) {
        console.log("DEU CERTO")
        evento.preventDefault()

        let cliente = {
            nome: this.nome,
            nomeSocial: this.nomeSocial,
            email: this.email,
            endereco: null,
            telefone: this.telefone
        }
        console.log(cliente)
        this.cadastrarCliente(cliente)
        evento.target.reset()
    }

    render() {

        // STYLES
        let tema = this.props.tema
        const flex = {
            display: "flex",
            gap: "1rem"
        }

        return (
            <div className="container-fluid">
                <form onSubmit={(e) => this.submeterFormulario(e)}>
                    <div className="input-group mb-3">
                        <input onChange={this.capturarNome} type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input onChange={this.capturarNomeSocial} type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                    </div>
                    {/* <section style={flex}>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="date" className="form-control" placeholder="Data de expedição" aria-label="Data de expedição" aria-describedby="basic-addon1" />
                        </div>
                    </section>
                    <section style={flex}>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="date" className="form-control" placeholder="Data de expedição" aria-label="Data de expedição" aria-describedby="basic-addon1" />
                        </div>
                    </section> */}
                    <div className="input-group mb-3">
                        <input type="tel" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                        <input onChange={this.capturarEmail} type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }} name="action">Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}