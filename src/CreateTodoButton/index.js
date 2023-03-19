import React from "react";
import './CreateButton.css';
import { TodoContext } from "../TodoContext";

function CreateTodoButton(props){

    const {setOpenModal} = React.useContext(TodoContext);
    

    const onClick = () =>{
        setOpenModal(prevState => !prevState ); 
        
    }

    return(
        <button className="CreateButton"
        onClick = {onClick} >
            +
            
            </button>
    );
}

export default CreateTodoButton;