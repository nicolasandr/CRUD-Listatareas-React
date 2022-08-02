import React from 'react';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';


//creamos nuestro primer componente
const App = () => {
    return (
      <section className='container my-5'>
        <div>
          <Titulo comision='c2i'></Titulo>
          <Subtitulo></Subtitulo>
          <Formulario></Formulario>
         
        </div>
        </section>
    );
};

export default App;