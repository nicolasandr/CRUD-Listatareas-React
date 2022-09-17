import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = (props) => {
  return (
    <div>
      <ListGroup>
        {
          props.arregloTareas.map((tarea)=> <ItemTarea key={tarea.id} tarea={tarea}  borrarTarea={props.borrarTarea} ></ItemTarea>)
        }
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
