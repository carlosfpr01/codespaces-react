import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Patrulha from './componentes/Patrulhas';

function App() {

  const patrulhas = [  
    {
      nome: 'Potiguara',
      corPrimaria: '#A4FF90',
      corSecundaria: '#828282'
    },
    {
      nome:"Mayoruna",
      corPrimaria: '#C7DEFF',
      corSecundaria: '#8100BA'
    },
    {
      nome:"Yanomami",
      corPrimaria: '#FFBCFF',
      corSecundaria: 'red'
    },
    {
      nome:"Chefia",
      corPrimaria: '#FFFE91',
      corSecundaria: '#0045CC'
    }
  ]

  const [elementos, setElementos] = useState([])

  const elementoAdd = (elemento) => {
    console.log(elemento)
  }
  
  return (
    <div className="App">
      <Banner/>
      <Formulario
        elementoAdd={elemento => elementoAdd(elemento)}
      />
      {patrulhas.map(patrulha => <Patrulha 
          key={patrulha.nome} 
          nome={patrulha.nome} 
          corPrimaria={patrulha.corPrimaria}
          corSecundaria={patrulha.corSecundaria}
        />
        )
      }
    </div>
  );
}

export default App;
