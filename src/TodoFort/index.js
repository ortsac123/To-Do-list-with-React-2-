import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoFort.css';

function TodoForm() {
  const [newValue, setNew] = React.useState("");
  const {addTodos, setOpenModal} = React.useContext(TodoContext);

  const onChange = (e) => {
    setNew(e.target.value)
  };

  const onCancel = () => {
    setOpenModal(false)
  };

  const onSubmit = (event) => {
      event.preventDefault();
      setOpenModal(false)
      addTodos(newValue);    
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Esribe tu nueva tarea</label>
      <textarea
        value={newValue}
        onChange={onChange}
        placeholder="Crea una tarea"
      />
      <div className="TodoForm-buttonContainer">

        <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel" >Cancelar</button>

        <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>
      
      </div>
    </form>
  );
}

export default TodoForm;
