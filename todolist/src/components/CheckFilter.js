import React from "react";
import './CheckFilter.css';
import TodoItem from "./TodoItem";

const CheckFilter = ({onCheckFToggle, todos, onCheckAdd}) => {
    return (
        <div>
            <div className="back3" onClick={onCheckFToggle}></div>
            <div className="checkbox" onClick={onCheckAdd}>
            {todos.map(todo => (
                    <TodoItem todo={todo} key={todo.id}/>
                ))}
            </div>
        </div>
    )
}

export default CheckFilter;