import React, { useState, useReducer } from "react";
import todoReducer from "./reducer/todoReducer";
import { addTodo, toggleTodo, deleteTodo } from "./action/todoAction";

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
    <div>
      <h1>TODO LIST</h1>
      <div>
        <input
          type="text"
          value={task}
          placeholder="Write your Todo"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="btn">
        <button onClick={handleAddTodo}>ADD</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
                onClick={() => handleToggle(todo.id)}
              >
                {todo.text}
              </span>
              <button onClick={() => handleDelete(todo.id)}>DELETE</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
