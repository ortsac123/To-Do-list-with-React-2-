import React from "react";
import "./TodoItem.css";

function TodoItem(props) {

  const onCompleted = () => {
    alert("Completado"+ ' ' + props.text);
  };

  const onEliminar = (e) => {
    console.log(e.target.value);
  };

  return (
    <li className="TodoItem">
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <span
        onClick={props.tachar}
        className={`Icon completa ${props.completed && "Icon-check--active"}`}
      >
        Completada
      </span>
      <span onClick={props.eliminar} className="Icon eliminar Icon-delete">
        Eliminar
      </span>
    </li>
  );
}

export default TodoItem;
