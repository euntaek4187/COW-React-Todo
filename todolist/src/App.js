
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoInsert from './components/TodoInsert';
import TodoList from "./components/TodoList";
import { MdAddCircle } from "react-icons/md";
import TodoGrid from './components/TodoGrid';
import CheckFilter from './components/CheckFilter';

let nextId = 4;

const App = () => {
  const [gridToggle, setGridToggle] = useState(false);
  const [checkToggle, setCheckToggle] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "오늘 목표1",
      checked: false
    },
    {
      id: 2,
      text: "오늘 목표2",
      checked: false
    },
    {
      id: 3,
      text: "오늘 목표3",
      checked: false
    }
  ]);

  const onCheckFToggle = () => {
    setCheckToggle(prev => !prev);
  }

  const onGridToggle = () => {
    setGridToggle(prev => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert('to do list를 작성하세요.')
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false
      };
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  };

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev)
  };

  const onCheckToggle = (id) => {
    setTodos(todos => 
      todos.map(todo => 
        todo.id === id ? {...todo, checked: !todo.checked} : todo
      )
    );
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo)
  };

  const onRemove = id => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos => 
      todos.map(todo => (todo.id === id ? {...todo, text} : todo))
      );
  }

  const onCheckAdd = () => {
    setTodos(todos => 
      todos.map(todo => (todo.checked === true ? todo : ""))
      );
  };

  return (
  <Header todoLength={todos.length}>
    <button className='grid' onClick={onGridToggle}>그리드뷰</button>
    <button className='cheakFilter' onClick={onCheckFToggle}>완료된일</button>

    {checkToggle && <CheckFilter 
    onCheckFToggle={onCheckFToggle}
    onCheckAdd={onCheckAdd}/>}
    
    
    {gridToggle && <TodoGrid 
    onGridToggle={onGridToggle}
    todos={todos}
    />}

    <div className="addbutton" onClick={onInsertToggle}>
      <MdAddCircle />
      </div>
    <TodoList 
    todos={todos} 
    onCheckToggle={onCheckToggle} 
    onInsertToggle={onInsertToggle}
    onChangeSelectedTodo={onChangeSelectedTodo}
    />
      {insertToggle && (
      <TodoInsert 
      selectedTodo={selectedTodo}
      onInsertToggle={onInsertToggle} 
      onInsertTodo={onInsertTodo}
      onRemove={onRemove}
      onUpdate={onUpdate}
      />
      )}
  </Header>
  );
}

export default App;
