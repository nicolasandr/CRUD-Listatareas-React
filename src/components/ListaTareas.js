import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = (props) => {
  return (
    <div>
      <ListGroup>
        {
          props.arregloTareas.map((item,posicion)=> <ItemTarea key={posicion} tareaCargada={item}></ItemTarea>)
        }
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
