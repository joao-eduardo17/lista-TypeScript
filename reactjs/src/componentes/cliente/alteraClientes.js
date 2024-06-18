import { useEffect, useRef, useState } from "react"

export default function AlteraClientes(props) {
    const [cliente, setClientes] = useState([])
    const id = useRef(null);
    const nome = useRef(null);
    const nomeSocial = useRef(null);
    const email = useRef(null); 

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

    const alteraClientes = async() => {
        if(id.current.value.length && nome.current.value.length && nomeSocial.current.value.length && email.current.value.length) {
            const response = await fetch('http://localhost:32831/cliente/atualizar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id.current.value,
                    nome: nome.current.value,
                    nomeSocial: nomeSocial.current.value,
                    email: email.current.value
                })
            })
            id.current.value = ""
            nome.current.valu = ""
            nomeSocial.current.value = ""
            email.current.value = ""
            const result = await response.json()
            setClientes(result)
        }
    }



    let tema = props.tema
    const flex = {
        display: "flex",
        gap: "1rem"
    }
    return(
        <main>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="ID" aria-label="CPF" aria-describedby="basic-addon1" ref={id} />
            </div>
            <div className="input-group mb-3">
                <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                </div>
                <input type="text" className="form-control" placeholder="Novo nome" aria-label="Text input with checkbox" ref={nome} />
            </div>
            <div className="input-group mb-3">
                <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                </div>
                <input type="text" className="form-control" placeholder="Novo nome Social" aria-label="Text input with checkbox" ref={nomeSocial} />
            </div>
            {/* <section style={flex}>
                <div className="input-group mb-3">
                    <div className="input-group-text">
                        <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                    </div>
                    <input type="text" className="form-control" placeholder="Novo RG" aria-label="Text input with checkbox"/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-text">
                        <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                    </div>
                    <input type="date" className="form-control" placeholder="RG" aria-label="Text input with checkbox"/>
                </div>
            </section> */}
            <div className="input-group mb-3">
                <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                </div>
                <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" ref={email} />
                {/* <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                </div> */}
            </div>
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={alteraClientes}>Alterar</button>
            </div>
        </main>
    )
}