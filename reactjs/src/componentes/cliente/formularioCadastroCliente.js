import { useEffect, useRef, useState } from "react"

export default function FormularioCadastroCliente(props) {
    const [cliente, setClientes] = useState([])
    const nome = useRef(null);
    const nomeSocial = useRef(null);
    const email = useRef(null);
    // const  = useRef(null);

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

    const cadastraCliente = async() => {
        const response = await fetch('http://localhost:32831/cliente/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome.current.value,
                nomeSocial: nomeSocial.current.value,
                email: email.current.value
            })
        })
        nome.current.value = ""
        nomeSocial.current.value = ""
        email.current.value = ""
        const result = await response.json()
        setClientes(result)
    }

    let tema = props.tema
    const flex = {
        display: "flex",
        gap: "1rem"
    }
    return (
        <div className="container-fluid">
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" ref={nome} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" ref={nomeSocial} />
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
                {/* <div className="input-group mb-3">
                    <input type="tel" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" />
                </div> */}

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                    <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" ref={email} />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={cadastraCliente}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}