import React,{Alert} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTareas = (props) => {
    return (
        <div>
            <ListGroup>
                {props.arregloTareas.map((tarea) => (
                    <ItemTarea
                        key={tarea.id}
                        tarea={tarea}
                        consultarAPI={props.consultarAPI}
                    ></ItemTarea>
                ))}
            </ListGroup>
            {/* <Alert variant="danger">
                debe agregar correctamente los datos
            </Alert> */}
        </div>
    );
};

export default ListaTareas;
