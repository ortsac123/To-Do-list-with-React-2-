import React, { useState } from 'react';
import AppPrincipal from './AppPrincipal';

//import './App.css';

const todos =[
  {text : 'Practicar guitarra', completed: false},
  {text : 'Hace ejercicio', completed: false},
  {text : 'Estudiar ingles', completed: false},
  {text : 'Comer saludable', completed: false},
  {text : 'No comer azucar jajaj', completed: false}
  
]

function App() {


  const itemStorage = localStorage.getItem('ToDo_V1');
  let auxStorage = [];

  if (!itemStorage){
    localStorage.setItem('ToDo_V1', JSON.stringify(auxStorage));
    auxStorage = [];
  } else{
    auxStorage = JSON.parse(itemStorage);  
  }
  
  const [todoss, setTodos] = React.useState(auxStorage);
  const [stateSearch, setStateSearch] = React.useState("");
  const completados  = todoss.filter(todo => !!todo.completed).length;
  const totalTodos =  todoss.length;

  let filTodos = [];

  if (!stateSearch.length >= 1){
    filTodos = todoss;
  } else {
    filTodos = todoss.filter (todo =>{
      const todoText = todo.text.toLowerCase()
      const searText = stateSearch.toLowerCase();
      return todoText.includes(searText);
    })
  }
    const saveTodos = (actTodos)=> {
      localStorage.setItem('ToDo_V1', JSON.stringify(actTodos))
      setTodos(actTodos);
    }

    const completeTodos = (text) => {
      const auxText = todoss.findIndex((todo) => todo.text === text );
      const newTodos  = [...todoss];
      newTodos[auxText].completed = true;
      saveTodos(newTodos); 

    };

    const eliminarTodos = (text) => {
      const auxText = todoss.findIndex((todo) => todo.text === text );
      const newTodos  = [...todoss];
      newTodos.splice(auxText, 1);
      saveTodos(newTodos);
    }
    

  return (
    <AppPrincipal
    totalTodos = {totalTodos}
    completados = {completados}
    stateSearch ={stateSearch}
    setStateSearch = {setStateSearch}
    filTodos = {filTodos}
    completeTodos = {completeTodos}
    eliminarTodos = {eliminarTodos}
    />
  );
}

export default App;
