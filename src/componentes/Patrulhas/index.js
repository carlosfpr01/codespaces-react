import Elemento from '../Elemento';
import './Patrulhas.css'

const Patrulha = (props) =>{

    return (
        <section className='patrulha' style={{backgroundColor: props.corPrimaria}}>
            <h3 style={{borderColor: props.corSecundaria}}>{props.nome}</h3>
            {props.elementos.map(
                elementos => <Elemento 
                    key={elementos.nome} 
                    nome={elementos.nome} 
                    funcao={elementos.funcao} 
                    imagem={elementos.imagem} 
                />)}
        </section>
    )
}


export default Patrulha;
