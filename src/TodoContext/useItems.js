import React from "react";

function useItems (newItems, todoInicial) {

    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
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

      }, 1500);

    });

    const saveTodos = (actTodos) => {
      try {localStorage.setItem(newItems, JSON.stringify(actTodos));
      setItem(actTodos);} catch(error){
        setError(error);
      }
    };

    return {items, saveTodos, loading, error};
  };


  export default useItems;

