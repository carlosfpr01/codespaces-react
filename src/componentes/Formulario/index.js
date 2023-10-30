import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const cargos=[
        'Chefe de seção',
        'Chefe assistente',
        'Monitor',
        'Sub-monitor',
        'Elemento',
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [patrulha, setPatrulha] = useState('')

    const AoSalvar = (evento) => {
        evento.preventDefault()
        props.elementoAdd({
            nome,
            cargo,
            imagem,
            patrulha
        });
        setCargo('')
        setNome('')
        setImagem('')
        setPatrulha('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={AoSalvar}>
                <h2>Preencha os dados requisitados para concluir a criação do perfil</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome..."
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Cargo"
                    itens={cargos}
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder=""
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Patrulha" 
                    itens={props.patrulhas}
                    valor={patrulha}
                    aoAlterado={valor => setPatrulha(valor)}
                />
                <Botao
                    text="Criar Card"
                />
              
            </form>
        </section>

    )
}

export default Formulario