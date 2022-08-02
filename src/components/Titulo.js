import React from "react";

const Titulo = (props) => {
  return (
    <div>
      <h1 className="display-4 text-center">Lista tareas {props.comision}</h1>
      <hr />
    </div>
  );
};

export default Titulo;
 