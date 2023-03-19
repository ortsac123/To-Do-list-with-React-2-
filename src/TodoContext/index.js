import React, { useState } from "react";
import useItems from "./useItems";

const TodoContext = React.createContext();

function TodoProvider(props) {

  const {
    items: todoss,
    saveTodos: saveTodos,
    loading,
    error,
  } = useItems("ToDo_V1", []);
  const [stateSearch, setStateSearch] = React.useState("");
  const [openModal, setOpenModal] = useState(false)
  const completados = todoss.filter((todo) => !!todo.completed).length;
  const totalTodos = todoss.length;

  let filTodos = [];

  if (!stateSearch.length >= 1) {
    filTodos = todoss;
  } else {
    filTodos = todoss.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searText = stateSearch.toLowerCase();
      return todoText.includes(searText);
    });
  }

  const completeTodos = (text) => {
    const auxText = todoss.findIndex((todo) => todo.text === text);
    const newTodos = [...todoss];
    newTodos[auxText].completed = true;
    saveTodos(newTodos);
  };

  const addTodos = (text) => {
    const newTodos = [...todoss];
    newTodos.push({
      completed:false,
      text
    });
    saveTodos(newTodos);
  };

  const eliminarTodos = (text) => {
    const auxText = todoss.findIndex((todo) => todo.text === text);
    const newTodos = [...todoss];
    newTodos.splice(auxText, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{
        loading,
        totalTodos,
        completados,
        stateSearch,
        setStateSearch,
        filTodos,
        addTodos,
        completeTodos,
        eliminarTodos,
        openModal, 
        setOpenModal,
        
    }}>{props.children}</TodoContext.Provider>
  );
}


export {TodoContext, TodoProvider};

