import React, { useState } from "react";
import { set } from "react-hook-form";
import AppPrincipal from "./AppPrincipal";

//import './App.css';

const todos = [
  { text: "Practicar guitarra", completed: false },
  { text: "Hace ejercicio", completed: false },
  { text: "Estudiar ingles", completed: false },
  { text: "Comer saludable", completed: false },
  { text: "No comer azucar jajaj", completed: false },
];

function App() {
  const useItems = (newItems, todoInicial) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [items, setItem] = React.useState(todoInicial);

    React.useEffect(() => {
      setTimeout(() => {
  try{const itemStorage = localStorage.getItem(newItems);
        let auxStorage = todoInicial;

        if (!itemStorage) {
          localStorage.setItem(newItems, JSON.stringify(todoInicial));
          auxStorage = todoInicial;
        } else {
          auxStorage = JSON.parse(itemStorage);
        }

        setItem(auxStorage);
        setLoading(false); 
      } catch (error){
        setError(error);
      }

      }, 2000);

    });

    const saveTodos = (actTodos) => {
      try {localStorage.setItem(newItems, JSON.stringify(actTodos));
      setItem(actTodos);} catch(error){
        setError(error);
      }
    };

    return {items, saveTodos, loading, error};
  };

  const {items: todoss,
         saveTodos: saveTodos,
         loading,
         error } = useItems("ToDo_V1", []);
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
    <AppPrincipal
      loading={loading}
      totalTodos={totalTodos}
      completados={completados}
      stateSearch={stateSearch}
      setStateSearch={setStateSearch}
      filTodos={filTodos}
      completeTodos={completeTodos}
      eliminarTodos={eliminarTodos}
    />
  );
}

export default App;
