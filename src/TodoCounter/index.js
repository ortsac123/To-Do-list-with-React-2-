import React from "react";
import { TodoContext } from "../TodoContext";
import'./TodoCounter.css';

const estilos ={
    color: 'red',
    backgroundColor : 'yellow'

}

function TodoCounter(){
    const {completados, totalTodos} = React.useContext(TodoContext)
        return(
            <h2 className="TodoCounter" >Has completado {completados} de {totalTodos} tareas</h2>
        )

}

export default TodoCounter;