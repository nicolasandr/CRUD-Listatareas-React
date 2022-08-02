import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaTareas from "./ListaTareas";
//alternativa para importar de bootstrap
// import {Form,Button} form 'react-bootstrap';

const Formulario = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3 d-flex">
          <Form.Control type="text" placeholder="Ingrese una tarea" />
          <Button variant="primary" type="submit">
          Enviar
        </Button>
        </Form.Group>
      </Form>
      {/* aqui invoco al componente ListaTareas */}
      <ListaTareas></ListaTareas>
    </div>
   
  );
};

export default Formulario;
