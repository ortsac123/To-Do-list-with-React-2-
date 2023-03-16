import React from "react";
import TodoCounter from "../TodoCounter";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import TodoSearch from "../TodoSearch";
import CreateTodoButton from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";

function AppPrincipal() {

const {loading,
       error,
       filTodos,
       completeTodos,
       eliminarTodos } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />
          <TodoList>
            {loading && <p>Procesando por favor espere</p>}
            {error && <p>Hubo un error</p>}
            {!loading && !filTodos.length && (
              <p>---Ingresa tu primer tarea---</p>
            )}

            {filTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                tachar={() => completeTodos(todo.text)}
                eliminar={() => eliminarTodos(todo.text)}
              />
            ))}
          </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default AppPrincipal;
