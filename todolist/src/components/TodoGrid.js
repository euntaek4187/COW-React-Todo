import React from "react";
import './TodoGrid.css';
import TodoItem from "./TodoItem";

const TodoGrid = ({onGridToggle, todos}) => {
    return (
        <div>
            <div className="back2" onClick={onGridToggle}></div>
            <div className="girdBox">
                {todos.map(todo => (
                    <TodoItem todo={todo} key={todo.id}/>
                ))}
            </div>
        </div>
    )
};

export default TodoGrid;