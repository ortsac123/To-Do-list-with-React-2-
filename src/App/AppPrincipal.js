import React from 'react';
import TodoCounter from '../TodoCounter';
import TodoList from '../TodoList';
import TodoItem from '../TodoItem';
import TodoSearch from '../TodoSearch';
import CreateTodoButton from '../CreateTodoButton';


function AppPrincipal({
    totalTodos,
    completados,
    stateSearch,
    setStateSearch, 
    filTodos, 
    completeTodos, 
    eliminarTodos 
}){

return(
    <React.Fragment>
    <TodoCounter 
    total = {totalTodos}
    completed = {completados}
    />
      
    <TodoSearch 
      stateSearch = {stateSearch}
      setStateSearch = {setStateSearch}
    />

    <TodoList>
      {filTodos.map(todo =>(
        <TodoItem 
          key={todo.text} 
          text = {todo.text} 
          completed = {todo.completed}
          tachar = {() => completeTodos(todo.text)}
          eliminar = {() => eliminarTodos(todo.text)}
        />
        )) }

    </TodoList>
   <CreateTodoButton/>
      
  </React.Fragment>

);

}

export default AppPrincipal;