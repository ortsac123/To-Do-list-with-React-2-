import React from "react";
import './CreateButton.css';

function CreateTodoButton(props){

    const onClick = () =>{
        alert('Boton');
    }

    return(
        <button className="CreateButton"
        onClick = {onClick} >
            +
            
            </button>
    );
}

export default CreateTodoButton;