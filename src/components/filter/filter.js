import React from "react";

const Filter = ({setStatus})=>{
    const statusHandler=(e)=>{
        setStatus(e.target.value)
    };
    return(
    <div className="select">
        <select data-testid="filter" onChange={statusHandler} name="todos" className="filter-todo">
          <option data-testid="all" value="all">All</option>
          <option data-testid="completed" value="completed">Completed</option>
          <option data-testid="uncompleted" value="uncompleted">Uncompleted</option>
        </select>
      </div>
    );
}; 

export default Filter;