import React from "react";
import'./TodoCounter.css';

const estilos ={
    color: 'red',
    backgroundColor : 'yellow'

}

function TodoCounter(props){

    return(
        <h2 className="TodoCounter" >Has completado {props.completed} de {props.total} tareas</h2>
    )
}

export default TodoCounter;