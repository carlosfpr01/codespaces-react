import './Patrulhas.css'

const Patrulha = (props) =>{

    return (
        <section className='patrulha' style={{backgroundColor: props.corPrimaria}}>
            <h3 style={{borderColor: props.corSecundaria}}>{props.nome}</h3>
        </section>
    )
}

export default Patrulha;
