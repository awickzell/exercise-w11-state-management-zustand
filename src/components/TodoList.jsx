import { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

const TodoList = () => {
  const [task, setTask] = useState("");
  const { todos, addTodo, deleteTodo, completeTodo } = useTodoStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <div className="header">
      <h2>Task Manager</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="taksform"
          placeholder="Add a new task..."
        />
        <button type="submit" className="submit">
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`completed ${
              todo.completed ? "line" : ""
            }`}
          >
            <span onClick={() => completeTodo(todo.id)}>{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="delete"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;