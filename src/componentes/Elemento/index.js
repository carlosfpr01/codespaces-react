import './Elemento.css'

const Elemento = (props) => {
    return (
        <div className='elemento'>
            <div className='cabecalho'>
                <img src={props.foto} alt="Foto de perfil de"/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Elemento;