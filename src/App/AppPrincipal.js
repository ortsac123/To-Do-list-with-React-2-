import React from "react";
import TodoCounter from "../TodoCounter";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import TodoSearch from "../TodoSearch";
import CreateTodoButton from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import Modal from "../Modal";
import TodoForm from "../TodoFort";
import PrimerTarae from "../PrimerTarea";


function AppPrincipal() {

const { loading,
        error,
        filTodos,
        completeTodos,
        eliminarTodos,
        openModal,
        setOpenModal,
      } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />
          <TodoList>
            <div>

            {loading && <p>Procesando por favor espere</p>}
            {error && <p>Hubo un error</p>}
            {!loading && !filTodos.length && (
              <PrimerTarae></PrimerTarae>
            )}

            </div>

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
          
          {openModal && (
            <Modal>
            <TodoForm/>
          </Modal>
          )}

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default AppPrincipal;
