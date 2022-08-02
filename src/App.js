import ToDoList from "./components/toDoList/ToDoList";
import Form from "./components/form/Form";
import { useState,React, useEffect } from "react";
import './App.css';

function App() {

const [status,setStatus] = useState("all");
const [toDos,setToDos] = useState([]);
const [filteredToDos,setFilteredToDos] = useState([]);

useEffect(()=>{
  filterHandler();
},[toDos,status])

const filterHandler=()=>{
  switch(status)
  {
   case 'completed':setFilteredToDos(toDos.filter(toDo => toDo.completed === true))
   break;
   case 'uncompleted':setFilteredToDos(toDos.filter(toDo => toDo.completed === false))
   break;
   default:setFilteredToDos(toDos);
   break; 
  }
}

return(
    <div className="App">
      <header>
      <h1>Gunal's Todo List</h1>
      </header>
    <Form setStatus={setStatus}
      setToDos={setToDos} 
      toDos={toDos} />   
    <ToDoList filteredToDos={filteredToDos}
      setToDos={setToDos} 
      toDos={toDos} />
    </div>
  );
}

export default App;
