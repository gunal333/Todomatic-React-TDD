import {React,useState} from "react";
import Filter from "../filter/Filter";

const Form=({setStatus,setToDos,toDos,})=>{
    const [inputText, setInputText] = useState("");
    const inputTextHandler=(e)=>
    {
        setInputText(e.target.value);
    };
    const submitToDoHandler=(e)=>{
        e.preventDefault();
        setToDos([
            ...toDos,{text:inputText,completed:false,id:Math.random()*1000}
        ]);
        setInputText("");
    };
    return(
        <form data-testid="input-form">
      <input value = {inputText} data-testid="input-field" onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitToDoHandler} disabled = {!inputText?true:false} className= "todo-button" data-testid="add-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <Filter setStatus={setStatus}/>
      </form>
    );
}
export default Form;