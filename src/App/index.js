import React, { useState } from "react";
import { set } from "react-hook-form";
import AppPrincipal from "./AppPrincipal";
import { TodoProvider } from "../TodoContext";

//import './App.css';

const todos = [
  { text: "Practicar guitarra", completed: false },
  { text: "Hace ejercicio", completed: false },
  { text: "Estudiar ingles", completed: false },
  { text: "Comer saludable", completed: false },
  { text: "No comer azucar jajaj", completed: false },
];

function App() {

  return (
    <TodoProvider>
      <AppPrincipal/>
    </TodoProvider>
  );
}

export default App;
