import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = () => {

    const patrulhas=[
        'Poti',
        'Mayo',
        'Aguia',
        'Gorila',
        'Leopardo',
        'Escorpião',
        'matilha-3',
        'matilha-2',
        'matilha-1'
    ]

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados requisitados para concluir a criação do perfil</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome..."/>
                <CampoTexto label="Cargo" placeholder="Digite o seu idade..."/>
                <CampoTexto label="Imagem" placeholder="Digite o sua imagem..."/>
                <ListaSuspensa label="Patrulhas" itens={patrulhas}/>
                <Botao text="Criar Card"/>
            </form>
        </section>

    )
}

export default Formulario