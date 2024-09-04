import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

// Post component with delete and edit functionalities
const Todo = React.forwardRef(({ todo, onDelete, onEdit }, ref) => (
  <div className="post" ref={ref}>
  
    <p>{todo}</p>
    <button onClick={onDelete}>Delete</button>
    <button onClick={onEdit}>Edit</button>
  </div>
));

// Input component with forwarded ref
const Input = React.forwardRef(({ onClick, inputChange, charCount }, ref) => (
  <div>
    <input type="text" placeholder="Tweets" onChange={inputChange} ref={ref} />
    <button onClick={onClick}>Add</button>
    <span>{charCount}</span>
  </div>
));

// Function to calculate remaining characters
const calculateCharCount = (str) => {
  return 250 - str.length;
};

const App = () => {
  const [charCount, setCharCount] = useState(250);
  const [todos, setTodos] = useState([]);
  const [todoRefs, setTodoRefs] = useState([]);
  const inputRef = useRef(null);
                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  useEffect(() => {

    setTodoRefs((postRefs) =>
      Array(todos.length)
        .fill()
        .map((_, i) => postRefs[i] || React.createRef())
    );
  }, [todos]);

  const handleInputChange = () => {
    const str = inputRef.current.value;
    setCharCount(calculateCharCount(str));
  };

  const handlePost = () => {
    const str = inputRef.current.value;
    if (str.length > 0) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(),todo: str },
      ]);
      inputRef.current.value = "";
      setCharCount(250);
    }
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id, index) => {
    const todo = todoRefs[index].current.querySelector('p').innerText;
    const newTodo = prompt("Edit your post:", todo);
    if (newTodo !== null) {
      setTodoRefs((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, todo: newTodo } : todo
        )
      );
    }
  };

  return (
    <div className="App">
      <Input
        onClick={handlePost}
        charCount={charCount}
        inputChange={handleInputChange}
        ref={inputRef}
      />
      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
         
          post={todo.post}
          onDelete={() => handleDelete(todo.id)}
          onEdit={() => handleEdit(todo.id, index)}
          ref={todoRefs[index]}
        />
      ))}
    </div>
  );
};

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
