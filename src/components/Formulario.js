import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaTareas from "./ListaTareas";
//alternativa para importar de bootstrap
// import {Form,Button} form 'react-bootstrap';

const Formulario = () => {

// aqui va la logica

// crear un state
const [arregloTareas, setArregloTareas] = useState([]);
const [tarea, setTarea] = useState('');
// aqui va el maquetado y un poco de logica

// const actualizarTarea = (e) => {
//   //obtener el value de mi input
//  console.log(e.target.value)
//  // actualizar el state
//  setTarea(e.target.value.trim());
// }

const handleSubmit  = (e) => {
 e.preventDefault();
 console.log('prueba de submit');
 //actualizar lista de tareas
 setArregloTareas([...arregloTareas,tarea]);
 setTarea('');
}

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control 
          type="text" 
          placeholder="Ingrese una tarea" 
          onChange={ (e)=>  setTarea(e.target.value.trim()) }
          value={tarea}
          />
          
          <Button variant="primary" type="submit">
           Enviar
          </Button>
        </Form.Group>
      </Form>
      {/* aqui invoco al componente ListaTareas */}
      <ListaTareas arregloTareas={arregloTareas}></ListaTareas>
    </div>
   
  );
};

export default Formulario;
