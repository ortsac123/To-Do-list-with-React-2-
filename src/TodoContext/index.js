import React from "react";
import useItems from "./useItems";

const TodoContext = React.createContext();

function TodoProvider(props) {

<useItems></useItems>

  const {
    items: todoss,
    saveTodos: saveTodos,
    loading,
    error,
  } = useItems("ToDo_V1", []);
  const [stateSearch, setStateSearch] = React.useState("");
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
        completeTodos,
        eliminarTodos
    }}>{props.children}</TodoContext.Provider>
  );
}


export {TodoContext, TodoProvider};

