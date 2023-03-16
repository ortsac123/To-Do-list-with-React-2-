import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {

  const {stateSearch, setStateSearch} = React.useContext(TodoContext);

  const onSearch = (e) => {
    console.log(e.target.value);
    setStateSearch(e.target.value);
  };

  return (
    <React.Fragment>
      <input
        className="TodoSearch"
        placeholder="Ingrese tarea"
        value={stateSearch}
        onChange={onSearch}
      />
    </React.Fragment>
  );
}

export default TodoSearch;
