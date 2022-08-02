import React from "react";

const ToDo = ({toDos,toDo,setToDos})=>{
    const deleteHandler=()=>{
         setToDos(toDos.filter((el)=>el.id !== toDo.id));
    };
    const completeHandler=()=>{
        setToDos(toDos.map((item)=>{
            if(item.id === toDo.id)
            {
            return{
                ...item,completed:!item.completed
            }
            }
            return item;
        }))
    };
    return(
        <div className="todo">
            <li data-testid="todo-item" className={`todo-item ${toDo.completed?"completed":""}`}>{toDo.text}</li>
            <button data-testid="complete-button" onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button data-testid="delete-button" onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default ToDo;