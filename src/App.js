import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

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
    </div>
  );
}

export default App;
