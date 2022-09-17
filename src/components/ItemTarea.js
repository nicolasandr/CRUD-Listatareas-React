import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ItemTarea = (props) => {
    const URL = process.env.REACT_APP_API_LISTATAREAS;
    const handleDelete = () => {
        Swal.fire({
            title: 'Esta seguro que desea borrar la tarea?',
            text: 'No se puede revertir esta accion',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrar',
            cancelButtonText: 'Cancelar',
        }).then(async (result) => {
            if (result.isConfirmed) {
                //realizamos la peticion DELETE
                try {
                    const respuesta = await fetch(URL + '/' + props.tarea.id, {
                        method: 'DELETE',
                    });
                    console.log(respuesta);
                    if (respuesta.status === 200) {
                        Swal.fire(
                            'Tarea borrada!',
                            'La tarea se eliminó con exito!',
                            'success'
                        );
                        props.consultarAPI();
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        });
    };
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            {props.tarea.nombreTarea}
            <Button variant="danger" onClick={handleDelete}>
                Borrar
            </Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;
