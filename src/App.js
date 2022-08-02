import Filter from "./components/filter/Filter";
import { useState,React } from "react";
import './App.css';

function App() {

const [status,setStatus] = useState("all");

  return(
    <div className="App">
      <header>
      <h1>Gunal's Todo List</h1>
      </header>
    <Filter setStatus={setStatus} />    
    </div>
  );
}

export default App;
