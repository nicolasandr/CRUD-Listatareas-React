import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListaTareas from './ListaTareas';
import { cantidadCaracteres } from './helpers';
import Alert from 'react-bootstrap/Alert';

const Formulario = () => {
    const URL = process.env.REACT_APP_API_LISTATAREAS;

    const [arregloTareas, setArregloTareas] = useState([]); //useState(tareasLocalStorage)
    const [nombreTarea, setnombreTarea] = useState('');
    const [msjError, setMsjError] = useState(false);

    useEffect(() => {
        consultarAPI();
    }, []);

    const consultarAPI = async () => {
        try {
            //peticion GET
            const respuesta = await fetch(URL);
            const listaTareas = await respuesta.json();
            setArregloTareas(listaTareas);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('prueba de submit');
        //validar datos
        if (cantidadCaracteres(nombreTarea)) {
            console.log('los datos son correctos,crear el objeto');
            //crear un objeto
            const nuevaTarea = {
                nombreTarea: nombreTarea,
            };
            console.log(nuevaTarea);
            //enviar peticion a json server
            try {
                const respuesta = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(nuevaTarea),
                });
                if (respuesta.status === 201) {
                    refescarPagina();
                }
                console.log(respuesta);
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log('datos incorrectos');
            setMsjError(true);
        }
    };
    const refescarPagina = () => {
        window.location.reload(true);
    };
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex" controlId="formNombreTarea">
                    <Form.Control
                        type="text"
                        placeholder="Ingrese una tarea"
                        onChange={(e) =>
                            setnombreTarea(e.target.value.trimStart())
                        }
                    />

                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form.Group>
            </Form>
            {msjError ? (
                <Alert variant="danger" className="mt-4">
                    Debe corregir los datos
                </Alert>
            ) : null}

            <ListaTareas
                arregloTareas={arregloTareas}
                consultarAPI={consultarAPI}
            ></ListaTareas>
        </div>
    );
};

export default Formulario;
