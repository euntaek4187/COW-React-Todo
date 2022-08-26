import React, { useEffect, useState } from "react";
import {MdAddCircle} from "react-icons/md";
import "./TodoInsert.css";
import { TiTrash, TiPencil } from "react-icons/ti";


const TodoInsert = ({onInsertToggle, onInsertTodo, selectedTodo, onRemove, onUpdate}) => {
    const [value, setValue] = useState("");

    const onChange = e => {
        setValue(e.target.value);
    };
    const onSubmit = e => {
        e.preventDefault();
        onInsertTodo(value);
        setValue("");
        onInsertToggle();
      };
    
    useEffect(() => {
        if(selectedTodo) {
            setValue(selectedTodo.text);
        }
    }, [selectedTodo]);
    return (
        <div>
            <div className="background" onClick={onInsertToggle}></div>
                <form onSubmit={selectedTodo ? () => {onUpdate(selectedTodo.id, value)} : onSubmit}>
                    <input placeholder="what needs to bo done?"
                    value={value}
                    onChange={onChange}>
                    </input>
                    {selectedTodo ? (
                        <div className="rewrite">
                            <TiPencil onClick={() => {onUpdate(selectedTodo.id, value)}}/>
                            <TiTrash onClick={() => {onRemove(selectedTodo.id)}}/>
                        </div>
                    ) : (<button type="submit">
                        <MdAddCircle />
                    </button>)}
                </form>
        </div>
    );
};

export default TodoInsert;