import React, { useState, useReducer } from "react";
import todoReducer from "./reducer/todoReducer";
import { addTodo, toggleTodo, deleteTodo } from "./action/todoAction";
import "../Components/todo.css";

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="todo-container">
      <h1 className="todo-title">TODO LIST</h1>
      <div>
        <input
          type="text"
          value={task}
          className="todo-input"
          placeholder="Write your Todo"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="btn">
        <button className="add" onClick={handleAddTodo}>ADD</button>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                className="todo-text"
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
                onClick={() => handleToggle(todo.id)}
              >
                {todo.text}
              </span>
              <span className="todo-actions">
                <button className="delete" onClick={() => handleDelete(todo.id)}>DELETE</button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
