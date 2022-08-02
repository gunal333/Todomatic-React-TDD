import React from "react";
import ToDo from "../toDo/ToDo";

const ToDoList = ({toDos,setToDos,filteredToDos})=>{
    return (
      <div className="todo-container">
        <ul data-testid="todo-list" className="todo-list">
             {filteredToDos.map((toDo) =>(
                <ToDo 
                toDos={toDos}
                toDo={toDo}
                setToDos={setToDos} 
                key={toDo.id}/>
             ))}
        </ul>
      </div>
    );
};  

export default ToDoList;