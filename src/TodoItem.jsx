import React from "react";

const TodoItem = ({ id, title, completed, toggleTodo, deleteTodo }) => {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          onChange={(e) => toggleTodo(id, e.target.checked)}
          checked={completed}
        />
        {title}
      </label>
      <button onClick={(e) => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
