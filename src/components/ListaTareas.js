import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTareas = (props) => {
    return (
        <div>
            <ListGroup>
                {props.arregloTareas.map((tarea) => (
                    <ItemTarea
                        key={tarea._id}
                        tarea={tarea}
                        consultarAPI={props.consultarAPI}
                    ></ItemTarea>
                ))}
            </ListGroup>
        </div>
    );
};

export default ListaTareas;
